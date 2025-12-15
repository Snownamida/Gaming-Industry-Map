// State
let currentLang = 'zh'; // Default to Chinese as requested

const textResources = {
    en: {
        title: "GAMING MAP",
        subtitle: "Global Industry Visualization",
        searchPlaceholder: "Search Company or Game...",
        legendTitle: "Legend",
        placeholderText: "Select a node to view details",
        resetBtn: "Reset View",
        physicsBtn: "Toggle Physics",
        physicsOn: "Physics: ON",
        physicsOff: "Physics: OFF",
        type: "Type",
        significance: "Significance"
    },
    zh: {
        title: "全球游戏产业格局图",
        subtitle: "Global Gaming Industry Visualization",
        searchPlaceholder: "搜索公司或游戏...",
        legendTitle: "图例",
        placeholderText: "点击节点查看详情",
        resetBtn: "重置视图",
        physicsBtn: "切换物理",
        physicsOn: "物理引擎: 开",
        physicsOff: "物理引擎: 关",
        type: "类型",
        significance: "权重"
    }
};

const categoryColors = {
    'Conglomerate': '#ff4c4c',
    'Publisher': '#ff9f43',
    'Studio': '#0abde3',
    'Game': '#1dd1a1',
    'Platform': '#5f27cd'
};

// Initialize ECharts
const chartDom = document.getElementById('graph-container');
const myChart = echarts.init(chartDom);
let option;
let physics = false;

// Helper to get text based on lang
function t(key) {
    return textResources[currentLang][key];
}

// Helper to get node name
function getNodeName(node) {
    return currentLang === 'zh' ? (node.name_zh || node.name) : node.name;
}

function getCategoryName(catKey) {
    return currentLang === 'zh' ? rawData.categories[catKey] : catKey;
}

function getRelationName(link) {
    return currentLang === 'zh' ? (link.relation_zh || link.relation) : link.relation;
}

// Generate Graph Data
function getGraphData() {
    const categories = Object.keys(categoryColors).map(key => ({
        name: getCategoryName(key),
        baseKey: key, // Keep English key for lookup
        itemStyle: { color: categoryColors[key] }
    }));

    const nodes = rawData.nodes.map(node => ({
        id: node.id,
        name: getNodeName(node),
        originalData: node,
        symbolSize: node.val,
        value: node.val,
        category: categories.findIndex(c => c.baseKey === node.category),
        label: {
            show: node.val > 25
        }
    }));

    const links = rawData.links.map(link => ({
        source: link.source,
        target: link.target,
        value: getRelationName(link), // Display text on line
        originalData: link,
        lineStyle: {
            color: 'source',
            curveness: 0.1
        }
    }));

    return { categories, nodes, links };
}

function updateChart() {
    const { categories, nodes, links } = getGraphData();

    option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(20, 20, 35, 0.9)',
            borderColor: '#00bcd4',
            textStyle: { color: '#fff' },
            formatter: (params) => {
                if (params.dataType === 'node') {
                    const node = params.data.originalData;
                    const catName = getCategoryName(node.category);
                    return `
                        <div style="font-weight:bold; margin-bottom:5px;">${getNodeName(node)}</div>
                        <div style="font-size:12px; color:#ccc;">${t('type')}: ${catName}</div>
                        <div style="font-size:12px; color:#ccc;">${t('significance')}: ${node.val}</div>
                    `;
                } else {
                    // Link
                    const link = params.data.originalData;
                    // Find source and target names
                    const sNode = rawData.nodes.find(n => n.id === link.source);
                    const tNode = rawData.nodes.find(n => n.id === link.target);
                    const sName = getNodeName(sNode);
                    const tName = getNodeName(tNode);
                    const rel = getRelationName(link);
                    return `${sName} > ${tName} <br/> ${rel}`;
                }
            }
        },
        legend: [
            {
                data: categories.map(a => a.name),
                textStyle: { color: '#fff' },
                bottom: 20,
                left: 20,
                orient: 'vertical'
            }
        ],
        series: [
            {
                type: 'graph',
                layout: 'force',
                data: nodes,
                links: links,
                categories: categories,
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: '#fff'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.1
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: { width: 4 }
                },
                force: {
                    repulsion: 300,
                    edgeLength: [50, 200],
                    gravity: 0.1,
                    layoutAnimation: physics
                },
                scaleLimit: { min: 0.4, max: 5 }
            }
        ]
    };

    myChart.setOption(option, { notMerge: true }); // notMerge to ensure categories update correctly
    updateLegendUI(categories);
}

function updateLegendUI(categories) {
    const legendList = document.getElementById('legend-list');
    legendList.innerHTML = '';
    categories.forEach(cat => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="legend-dot" style="background:${cat.itemStyle.color}"></div>${cat.name}`;
        legendList.appendChild(li);
    });
}

// UI Update
function updateUIText() {
    document.getElementById('app-title').textContent = t('title');
    document.getElementById('app-subtitle').textContent = t('subtitle');
    document.getElementById('search-input').placeholder = t('searchPlaceholder');
    document.getElementById('legend-title').textContent = t('legendTitle');
    const infoPlaceholder = document.getElementById('info-placeholder');
    if (infoPlaceholder) {
        infoPlaceholder.textContent = t('placeholderText');
    }
    document.getElementById('reset-btn').textContent = t('resetBtn');
    // document.getElementById('physics-btn').textContent = t('physicsBtn'); // Optional: update button text? Keep simple for now.

    // Update language button text
    // document.getElementById('lang-btn').textContent = currentLang === 'zh' ? 'Language: 中文' : 'Language: EN';
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateUIText();
    updateChart();

    // If a node was selected, refresh the sidebar?
    // It's tricky because the graph reload deselects everything in echarts usually.
    // For simplicity, we just clear the sidebar or reset it.
    document.getElementById('info-panel').innerHTML = `<div class="placeholder-text" id="info-placeholder">${t('placeholderText')}</div>`;
}

// Interaction
myChart.on('click', function (params) {
    if (params.dataType === 'node') {
        updateSidebar(params.data.originalData);
    }
});

function updateSidebar(data) {
    const panel = document.getElementById('info-panel');
    const color = categoryColors[data.category];
    const name = getNodeName(data);
    const catName = getCategoryName(data.category);

    // Find relations
    const relatedLinks = rawData.links.filter(l => l.source === data.id || l.target === data.id);
    const relatedList = relatedLinks.map(l => {
        const isSource = l.source === data.id;
        const otherId = isSource ? l.target : l.source;
        const otherNode = rawData.nodes.find(n => n.id === otherId);
        const otherName = getNodeName(otherNode);
        const relation = getRelationName(l);
        return `<span class="tag">${isSource ? '→' : '←'} ${relation} ${otherName}</span>`;
    }).join('');

    let desc = "";
    // Description logic can also be localized if needed, keeping it simple for now or adding quick switch
    if (currentLang === 'zh') {
        if (data.category === 'Game') desc = "一款拥有众多玩家的知名游戏。";
        else if (data.category === 'Conglomerate') desc = "拥多元化投资的大型控股公司。";
        else if (data.category === 'Studio') desc = "开发你喜爱游戏的创意工作室。";
        else desc = "行业主要参与者。";
    } else {
        if (data.category === 'Game') desc = "A major title played by millions.";
        else if (data.category === 'Conglomerate') desc = "A massive holding company with diverse investments.";
        else if (data.category === 'Studio') desc = "Creative powerhouse behind your favorite games.";
        else desc = "Key industry player.";
    }

    panel.innerHTML = `
        <div class="info-title" style="color:${color}">${name}</div>
        <span class="info-category" style="border: 1px solid ${color}; color: ${color}">${catName}</span>
        <div class="info-desc">${desc}</div>
        <div class="info-meta">${relatedList}</div>
    `;
}

// Search
document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (!term) return;

    // Search against both English name and Chinese name if possible, or just the current display name
    // Searching against all names is better UX
    const match = rawData.nodes.find(n =>
        n.name.toLowerCase().includes(term) ||
        (n.name_zh && n.name_zh.includes(term))
    );

    if (match) {
        // Need to find the index in the CURRENT dataset passed to echarts
        // Since the order of nodes in current `option.series[0].data` matches `rawData.nodes`, we can just use index
        const idx = rawData.nodes.indexOf(match);
        myChart.dispatchAction({
            type: 'focusNodeAdjacency',
            dataIndex: idx
        });
    } else {
        myChart.dispatchAction({
            type: 'unfocusNodeAdjacency'
        });
    }
});

function resetZoom() {
    myChart.dispatchAction({ type: 'restore' });
}

function togglePhysics() {
    physics = !physics;
    myChart.setOption({
        series: [{
            force: { layoutAnimation: physics }
        }]
    });
}

window.addEventListener('resize', () => myChart.resize());

document.getElementById('lang-btn').addEventListener('click', toggleLanguage);

document.getElementById('sidebar-toggle').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
});

// Init
updateUIText();
updateChart();
