import './style.css'; // Import styles so Vite handles them
import { I18nManager } from './modules/I18nManager.js';
import { GraphManager } from './modules/GraphManager.js';
import { UIManager } from './modules/UIManager.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Init I18n
    const i18n = new I18nManager('zh');

    // 2. Init Graph
    const graphContainer = document.getElementById('graph-container');
    const graph = new GraphManager(graphContainer, i18n);

    // 3. Init UI
    const ui = new UIManager(graph, i18n);

    // 4. Initial Render
    ui.updateUI();
});
