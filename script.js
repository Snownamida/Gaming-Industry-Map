import { data } from './data.js';

const chartDom = document.getElementById('chart-container');
const myChart = echarts.init(chartDom);
const infoPanel = document.getElementById('info-panel');
// Language State
let currentLang = 'zh'; // Default to Chinese

let option;

// Theme Colors
const colors = [
    '#00d2ff', // Region (Cyan)
    '#f43f5e', // Corporation (Red/Pink)
    '#6366f1', // Studio (Indigo)
    '#10b981', // Director (Emerald)
    '#f59e0b', // Producer (Amber)
    '#3b82f6', // Movie (Blue)
    '#8b5cf6'  // TV Series (Violet)
];

// UI Translations
const uiText = {
    en: {
        title: 'Film<span class="highlight">Map</span>',
        subtitle: 'The Cinematic Universe Visualized',
        selectNode: 'Select a Node',
        hoverText: 'Hover or click on a studio, person, or movie to reveal connections.',
        connections: 'Connections:',
        is: 'Is',
        by: 'By',
        noConnections: 'No direct connections mapped.',
        reset: 'Reset View'
    },
    zh: {
        title: '影视<span class="highlight">格局</span>',
        subtitle: '全球电影产业可视化',
        selectNode: '选择一个节点',
        hoverText: '悬停或点击电影公司、人物或作品以查看详细关系。',
        connections: '关系连接：',
        is: '是',
        by: '由',
        noConnections: '暂无直接关联。',
        reset: '重置视图'
    }
};

function updateUI() {
    const t = uiText[currentLang];
    document.querySelector('.logo h1').innerHTML = t.title;
    document.querySelector('.logo p').innerText = t.subtitle;
    document.getElementById('reset-zoom').innerText = t.reset;
    document.querySelector('.overlay-info h3').innerText = t.selectNode;
    document.querySelector('.overlay-info p').innerText = t.hoverText;
    document.getElementById('lang-toggle').innerText = currentLang === 'en' ? '中文' : 'English';
}

function renderChart() {
    // Process Data for ECharts based on currentLang
    const nodes = data.nodes.map(node => ({
        id: node.id,
        name: node.name[currentLang], // Dynamic Name
        category: node.category,
        symbolSize: node.symbolSize,
        value: node.symbolSize,
        label: { show: true }, // Show labels for all nodes
        // Store full object for reference if needed
        rawData: node
    }));

    const links = data.links.map(link => ({
        source: link.source,
        target: link.target,
        value: link.value[currentLang], // Dynamic Value
        lineStyle: {
            curveness: 0.1
        }
    }));

    const categories = data.categories.map(c => ({ name: c.name[currentLang] }));

    option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                if (params.dataType === 'node') {
                    const catName = categories[params.data.category].name;
                    return `<div style="padding: 5px;">
                                <b style="font-size: 1.1em; color: #fff;">${params.name}</b><br/>
                                <span style="color: #aaa;">${catName}</span>
                            </div>`;
                } else {
                    return `${params.data.source} > <b>${params.data.value}</b> > ${params.data.target}`;
                }
            },
            backgroundColor: 'rgba(20, 20, 30, 0.9)',
            borderColor: '#333',
            textStyle: { color: '#fff' }
        },
        legend: {
            data: categories.map(a => a.name),
            textStyle: {
                color: '#94a3b8'
            },
            bottom: 20,
            type: 'scroll'
        },
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
                    color: '#fff',
                    fontSize: 12
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.15,
                    width: 1.5,
                    opacity: 0.6
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 4,
                        opacity: 1
                    },
                    itemStyle: {
                        shadowBlur: 20,
                        shadowColor: '#fff'
                    }
                },
                force: {
                    repulsion: 400,
                    edgeLength: [50, 200],
                    gravity: 0.1
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                color: colors
            }
        ]
    };

    myChart.setOption(option, true); // true = notMerge (refresh completely)

    // Re-bind interaction logic with new scope
    myChart.off('click');
    myChart.on('click', function (params) {
        if (params.dataType === 'node') {
            const node = params.data;
            const cat = categories[node.category].name;
            const t = uiText[currentLang];

            // Find connected nodes
            const connectedLinks = links.filter(l => l.source === node.id || l.target === node.id);
            const connections = connectedLinks.map(l => {
                const isSource = l.source === node.id;
                const targetId = isSource ? l.target : l.source;
                const targetNode = nodes.find(n => n.id === targetId);
                return `<li>${isSource ? '' : `<span style="color:#aaa">${t.is} </span>`}<b>${l.value}</b> ${isSource ? '' : `<span style="color:#aaa">${t.by} </span>`}: ${targetNode.name}</li>`;
            }).join('');

            infoPanel.innerHTML = `
                <h3>${node.name}</h3>
                <p style="color: ${colors[node.category]}; font-weight: bold; margin-bottom: 10px;">${cat}</p>
                <p><strong>${t.connections}</strong></p>
                <ul style="list-style: none; margin-top: 5px; font-size: 0.9em; color: #ccc; max-height: 200px; overflow-y: auto;">
                    ${connections || `<li>${t.noConnections}</li>`}
                </ul>
            `;
        }
    });
}

// Initial Render
updateUI();
renderChart();

// Language Toggle
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateUI();
    renderChart();
});

// Controls
document.getElementById('reset-zoom').addEventListener('click', () => {
    myChart.dispatchAction({
        type: 'restore'
    });
});

// Resize handler
window.addEventListener('resize', () => {
    myChart.resize();
});
