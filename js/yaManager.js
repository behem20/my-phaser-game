export const YaManager = {
    sdk: null,
    gameLang: 'ru',

    init: async function (sdkInstance = null) {
        if (sdkInstance) {
            this.sdk = sdkInstance;
        } else if (window.yaGames) {
            this.sdk = await window.yaGames.init();
        } else {
            // локальный mock
            this.sdk = {
                player: {
                    async setData(data) {
                        localStorage.setItem('mockSave', JSON.stringify(data));
                    },
                    async getData() {
                        const data = localStorage.getItem('mockSave');
                        return data ? JSON.parse(data) : {};
                    }
                }
            };
        }
        const portalLang = this.sdk?.environment?.i18n?.lang;
        const SUPPORTED = ['ru'];
        this.gameLang = portalLang && SUPPORTED.includes(portalLang) ? portalLang : 'ru';
        window.gameLang = this.gameLang;
        console.log('Язык игры:', this.gameLang);
    },

    saveGame: async function (data) {
        if (!this.sdk) return;
        try {
            await this.sdk.player.setData(data);
        } catch (e) { }
    },

    loadGame: async function () {
        if (!this.sdk) return {};
        try {
            return await this.sdk.player.getData();
        } catch (e) {
            return {};
        }
    }
};