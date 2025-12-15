// Initialize ECharts instance
const chartDom = document.getElementById('graph-container');
const myChart = echarts.init(chartDom);
let option;

// Color palette for categories
const categories = [
    { name: 'Conglomerate', itemStyle: { color: '#ff4c4c' } }, // Red
    { name: 'Publisher', itemStyle: { color: '#ff9f43' } },    // Orange
    { name: 'Studio', itemStyle: { color: '#0abde3' } },       // Cyan
    { name: 'Game', itemStyle: { color: '#1dd1a1' } },         // Green
    { name: 'Platform', itemStyle: { color: '#5f27cd' } }      // Purple
];

// Helper to map category to index
const getCategoryIndex = (catName) => {
    const idx = categories.findIndex(c => c.name === catName);
    return idx >= 0 ? idx : 0;
};

// Process Data
const nodes = rawData.nodes.map(node => ({
    id: node.id,
    name: node.name,
    symbolSize: node.val, // Size based on importance/value
    value: node.val,
    category: getCategoryIndex(node.category),
    // specific visual settings
    label: {
        show: node.val > 25 // Only show labels for bigger nodes by default to reduce clutter
    }
}));

const links = rawData.links.map(link => ({
    source: link.source,
    target: link.target,
    value: link.relation,
    lineStyle: {
        color: 'source',
        curveness: 0.1
    }
}));

// ECharts Configuration
option = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(20, 20, 35, 0.9)',
        borderColor: '#00bcd4',
        textStyle: {
            color: '#fff'
        },
        formatter: (params) => {
            if (params.dataType === 'node') {
                const node = rawData.nodes.find(n => n.id === params.data.id);
                return `
                    <div style="font-weight:bold; margin-bottom:5px;">${node.name}</div>
                    <div style="font-size:12px; color:#ccc;">Type: ${node.category}</div>
                    <div style="font-size:12px; color:#ccc;">Significance: ${node.val}</div>
                `;
            } else {
                return `${params.data.source} > ${params.data.target} <br/> Relation: ${params.data.value}`;
            }
        }
    },
    legend: [
        {
            data: categories.map(a => a.name),
            textStyle: {
                color: '#fff'
            },
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
                lineStyle: {
                    width: 4
                }
            },
            force: {
                repulsion: 300,
                edgeLength: [50, 200],
                gravity: 0.1
            },
            scaleLimit: {
                min: 0.4,
                max: 5
            }
        }
    ]
};

myChart.setOption(option);

// Interaction Logic
myChart.on('click', function (params) {
    if (params.dataType === 'node') {
        const nodeData = rawData.nodes.find(n => n.id === params.data.id);
        updateSidebar(nodeData);
    }
});

// Sidebar update function
function updateSidebar(data) {
    const panel = document.getElementById('info-panel');
    const color = categories[getCategoryIndex(data.category)].itemStyle.color;

    // Find relations
    const relatedLinks = rawData.links.filter(l => l.source === data.id || l.target === data.id);
    const relatedList = relatedLinks.map(l => {
        const isSource = l.source === data.id;
        const otherId = isSource ? l.target : l.source;
        const otherNode = rawData.nodes.find(n => n.id === otherId);
        const relation = l.relation;
        return `<span class="tag">${isSource ? '→' : '←'} ${relation} ${otherNode.name}</span>`;
    }).join('');

    panel.innerHTML = `
        <div class="info-title" style="color:${color}">${data.name}</div>
        <span class="info-category" style="border: 1px solid ${color}; color: ${color}">${data.category}</span>
        <div class="info-desc">
            An entity within the global gaming ecosystem. 
            ${data.category === 'Game' ? 'A major title played by millions.' :
            data.category === 'Conglomerate' ? 'A massive holding company with diverse investments.' :
                data.category === 'Studio' ? 'Creative powerhouse behind your favorite games.' : 'Key industry player.'}
        </div>
        <div class="info-meta">
            ${relatedList}
        </div>
    `;
}

// Search functionality
document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (!term) return;

    const match = nodes.find(n => n.name.toLowerCase().includes(term));
    if (match) {
        // Highlight logic could go here, for now we zoom to it if exact-ish
        myChart.dispatchAction({
            type: 'focusNodeAdjacency',
            dataIndex: nodes.indexOf(match)
        });
    } else {
        myChart.dispatchAction({
            type: 'unfocusNodeAdjacency'
        });
    }
});

function resetZoom() {
    myChart.dispatchAction({
        type: 'restore'
    });
}

let physics = true;
function togglePhysics() {
    physics = !physics;
    myChart.setOption({
        series: [{
            force: {
                layoutAnimation: physics
            }
        }]
    });
}

// Resize handler
window.addEventListener('resize', () => {
    myChart.resize();
});

// Update legend in sidebar
const legendList = document.getElementById('legend-list');
categories.forEach(cat => {
    const li = document.createElement('li');
    li.innerHTML = `<div class="legend-dot" style="background:${cat.itemStyle.color}"></div>${cat.name}`;
    legendList.appendChild(li);
});
