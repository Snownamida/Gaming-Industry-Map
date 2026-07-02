import { categoryColors } from '../data/locales.js';
import { gameData } from '../data/gameData.js';

export class UIManager {
    constructor(graphManager, i18n) {
        this.graph = graphManager;
        this.i18n = i18n;

        // Elements
        this.titleEl = document.getElementById('app-title');
        this.subtitleEl = document.getElementById('app-subtitle');
        this.searchInput = document.getElementById('search-input');
        this.legendTitle = document.getElementById('legend-title');
        this.legendList = document.getElementById('legend-list');
        this.infoPanel = document.getElementById('info-panel');
        this.resetBtn = document.getElementById('reset-btn');
        this.physicsBtn = document.getElementById('physics-btn');
        this.langBtn = document.getElementById('lang-btn');
        this.sidebarToggle = document.getElementById('sidebar-toggle');
        this.sidebar = document.querySelector('.sidebar');

        // Init Events
        this._initEvents();

        // Subscribe to lang changes
        this.i18n.subscribe(() => this.updateUI());
    }

    _initEvents() {
        // Search: typing highlights the first match, Enter selects it
        this.searchInput.addEventListener('input', (e) => this._handleSearch(e.target.value));
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const match = this._findMatch(this.searchInput.value);
                if (match) this.selectNode(match);
            }
        });

        // Buttons
        this.resetBtn.addEventListener('click', () => this.graph.resetZoom());
        this.physicsBtn.addEventListener('click', () => {
            const isOn = this.graph.togglePhysics();
            this.physicsBtn.textContent = this.i18n.t(isOn ? 'physicsOn' : 'physicsOff');
        });
        this.langBtn.addEventListener('click', () => this.i18n.toggleLanguage());

        // Sidebar
        this.sidebarToggle.addEventListener('click', () => {
            this.sidebar.classList.toggle('collapsed');
        });

        // Graph Node Click
        this.graph.onNodeClick = (data) => this.showNodeDetails(data);
    }

    _findMatch(term) {
        if (!term) return null;
        term = term.trim().toLowerCase();
        if (!term) return null;
        return gameData.nodes.find(n =>
            n.name.toLowerCase().includes(term) ||
            (n.name_zh && n.name_zh.includes(term))
        ) || null;
    }

    _handleSearch(term) {
        const match = this._findMatch(term);
        if (match) {
            // NOTE: GraphManager.getGraphData() maps gameData.nodes in order,
            // so the raw index matches the ECharts dataIndex.
            this.graph.highlightNode(gameData.nodes.indexOf(match));
        } else {
            this.graph.unhighlight();
        }
    }

    // Select a node programmatically: details panel + highlight + shareable URL hash
    selectNode(node) {
        this.showNodeDetails(node);
        this.graph.highlightNode(gameData.nodes.indexOf(node));
    }

    // Restore selection from a shared link like .../#node=Tencent
    restoreFromHash() {
        const m = window.location.hash.match(/^#node=(.+)$/);
        if (!m) return;
        const id = decodeURIComponent(m[1]);
        const node = gameData.nodes.find(n => n.id === id);
        if (node) this.selectNode(node);
    }

    updateUI() {
        const t = (k) => this.i18n.t(k);

        // Text Updates
        this.titleEl.textContent = t('title');
        this.subtitleEl.textContent = t('subtitle');
        this.searchInput.placeholder = t('searchPlaceholder');
        this.legendTitle.textContent = t('legendTitle');
        this.resetBtn.textContent = t('resetBtn');
        this.physicsBtn.textContent = t(this.graph.physics ? 'physicsOn' : 'physicsOff');

        // Update Legend
        const categories = this.graph.update(); // Graph update returns categories
        this._renderLegend(categories);

        // Reset sidebar info
        this.infoPanel.innerHTML = `<div class="placeholder-text" id="info-placeholder">${t('placeholderText')}</div>`;
    }

    _renderLegend(categories) {
        this.legendList.innerHTML = '';
        categories.forEach(cat => {
            const li = document.createElement('li');
            li.innerHTML = `<div class="legend-dot" style="background:${cat.itemStyle.color}"></div>${cat.name}`;
            this.legendList.appendChild(li);
        });
    }

    showNodeDetails(data) {
        const color = categoryColors[data.category];
        const name = this.i18n.lang === 'zh' ? (data.name_zh || data.name) : data.name;

        // Localized Category Name
        const catKey = data.category;
        const catName = this.i18n.lang === 'zh' ? gameData.categories[catKey] : catKey;

        // Relations
        const relatedLinks = gameData.links.filter(l => l.source === data.id || l.target === data.id);
        const relatedList = relatedLinks.map(l => {
            const isSource = l.source === data.id;
            const otherId = isSource ? l.target : l.source;
            const otherNode = gameData.nodes.find(n => n.id === otherId);
            const otherName = this.i18n.lang === 'zh' ? (otherNode.name_zh || otherNode.name) : otherNode.name;
            const relation = this.i18n.lang === 'zh' ? (l.relation_zh || l.relation) : l.relation;
            return `<span class="tag">${isSource ? '→' : '←'} ${relation} ${otherName}</span>`;
        }).join('');

        // Description (Simplified generic logic from before)
        let desc = "";
        if (this.i18n.lang === 'zh') {
            if (data.category === 'Game') desc = "一款拥有众多玩家的知名游戏。";
            else if (data.category === 'Conglomerate') desc = "拥多元化投资的大型控股公司。";
            else if (data.category === 'Studio') desc = "开发你喜爱游戏的创意工作室。";
            else desc = "行业主要参与者。";
        } else {
            if (data.category === 'Game') desc = "A major title played by millions.";
            else if (data.category === 'Conglomerate') desc = "A massive holding company.";
            else if (data.category === 'Studio') desc = "Creative powerhouse.";
            else desc = "Key industry player.";
        }

        this.infoPanel.innerHTML = `
            <div class="info-title" style="color:${color}">${name}</div>
            <span class="info-category" style="border: 1px solid ${color}; color: ${color}">${catName}</span>
            <div class="info-desc">${desc}</div>
            <div class="info-meta">${relatedList}</div>
        `;

        // Keep the URL shareable: copying it deep-links to this node
        try {
            history.replaceState(null, '', '#node=' + encodeURIComponent(data.id));
        } catch (e) { /* history API unavailable */ }
    }
}
