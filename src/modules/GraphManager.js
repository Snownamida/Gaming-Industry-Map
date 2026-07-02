import * as echarts from 'echarts';
import { categoryColors } from '../data/locales.js';
import { gameData } from '../data/gameData.js';

export class GraphManager {
    constructor(domElement, i18n) {
        this.chart = echarts.init(domElement);
        this.i18n = i18n;
        this.physics = false;
        this.onNodeClick = null; // Callback

        // Resize handler
        window.addEventListener('resize', () => this.chart.resize());

        // Click handler
        this.chart.on('click', (params) => {
            if (params.dataType === 'node' && this.onNodeClick) {
                this.onNodeClick(params.data.originalData);
            }
        });
    }

    _getNodeName(node) {
        return this.i18n.lang === 'zh' ? (node.name_zh || node.name) : node.name;
    }

    _getCategoryName(catKey) {
        return this.i18n.lang === 'zh' ? gameData.categories[catKey] : catKey;
    }

    _getRelationName(link) {
        return this.i18n.lang === 'zh' ? (link.relation_zh || link.relation) : link.relation;
    }

    getGraphData() {
        const categories = Object.keys(categoryColors).map(key => ({
            name: this._getCategoryName(key),
            baseKey: key,
            itemStyle: { color: categoryColors[key] }
        }));

        const nodes = gameData.nodes.map(node => ({
            id: node.id,
            name: this._getNodeName(node),
            originalData: node,
            symbolSize: node.val,
            value: node.val,
            category: categories.findIndex(c => c.baseKey === node.category),
            label: {
                // Threshold 10 restores the behavior of commit df11776,
                // which was accidentally reverted during the Vite refactor.
                show: node.val > 10 || node.category === 'Game'
            }
        }));

        const links = gameData.links.map(link => ({
            source: link.source,
            target: link.target,
            value: this._getRelationName(link),
            originalData: link,
            lineStyle: {
                color: 'source',
                curveness: 0.1
            }
        }));

        return { categories, nodes, links };
    }

    update() {
        const { categories, nodes, links } = this.getGraphData();
        const t = (k) => this.i18n.t(k);

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(20, 20, 35, 0.9)',
                borderColor: '#00bcd4',
                textStyle: { color: '#fff' },
                formatter: (params) => {
                    if (params.dataType === 'node') {
                        const node = params.data.originalData;
                        const catName = this._getCategoryName(node.category);
                        return `
                            <div style="font-weight:bold; margin-bottom:5px;">${this._getNodeName(node)}</div>
                            <div style="font-size:12px; color:#ccc;">${t('type')}: ${catName}</div>
                            <div style="font-size:12px; color:#ccc;">${t('significance')}: ${node.val}</div>
                        `;
                    } else {
                        const link = params.data.originalData;
                        const sNode = gameData.nodes.find(n => n.id === link.source);
                        const tNode = gameData.nodes.find(n => n.id === link.target);
                        const sName = this._getNodeName(sNode);
                        const tName = this._getNodeName(tNode);
                        const rel = this._getRelationName(link);
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
                        layoutAnimation: this.physics
                    },
                    scaleLimit: { min: 0.4, max: 5 }
                }
            ]
        };

        this.chart.setOption(option, { notMerge: true });
        return categories; // Return for Legend UI if needed
    }

    resetZoom() {
        this.chart.dispatchAction({ type: 'restore' });
    }

    togglePhysics() {
        this.physics = !this.physics;
        this.chart.setOption({
            series: [{
                force: { layoutAnimation: this.physics }
            }]
        });
        return this.physics;
    }

    highlightNode(index) {
        this.chart.dispatchAction({
            type: 'focusNodeAdjacency',
            dataIndex: index
        });
    }

    unhighlight() {
        this.chart.dispatchAction({
            type: 'unfocusNodeAdjacency'
        });
    }
}
