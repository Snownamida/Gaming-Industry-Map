import { textResources } from '../data/locales.js';

const STORAGE_KEY = 'gim-lang';

export class I18nManager {
    constructor(defaultLang = 'zh') {
        let saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }
        this.currentLang = (saved === 'zh' || saved === 'en') ? saved : defaultLang;
        this.listeners = [];
    }

    setLanguage(lang) {
        if (this.currentLang !== lang) {
            this.currentLang = lang;
            try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
            this.notify();
        }
    }

    toggleLanguage() {
        this.setLanguage(this.currentLang === 'zh' ? 'en' : 'zh');
    }

    t(key) {
        return textResources[this.currentLang][key] || key;
    }

    subscribe(callback) {
        this.listeners.push(callback);
    }

    notify() {
        this.listeners.forEach(cb => cb(this.currentLang));
    }

    get lang() {
        return this.currentLang;
    }
}
