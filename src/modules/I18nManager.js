import { textResources } from '../data/locales.js';

export class I18nManager {
    constructor(defaultLang = 'zh') {
        this.currentLang = defaultLang;
        this.listeners = [];
    }

    setLanguage(lang) {
        if (this.currentLang !== lang) {
            this.currentLang = lang;
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
