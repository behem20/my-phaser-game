export const YaManager = {
    sdk: null,

    init: async function () {
        if (window.yaGames) {
            // реальный SDK
            this.sdk = await window.yaGames.init();
            // console.log('Yandex SDK готов');
        } else {
            // локальный mock
            this.sdk = {
                player: {
                    async setData(data) {
                        localStorage.setItem('mockSave', JSON.stringify(data));
                        // console.log('Сохранено локально (mock)');
                    },
                    async getData() {
                        const data = localStorage.getItem('mockSave');
                        return data ? JSON.parse(data) : {};
                    }
                }
            };
            // console.log('Локальный mock SDK готов');
        }
    },

    saveGame: async function (data) {
        if (!this.sdk) return;
        try {
            await this.sdk.player.setData(data);
            // console.log('Сохранено', this.sdk === window.yaGames ? 'в облако' : 'локально (mock)');
        } catch (e) {
            // console.warn('Ошибка сохранения', e);
        }
    },

    loadGame: async function () {
        if (!this.sdk) return {};
        try {
            return await this.sdk.player.getData();
        } catch (e) {
            // console.warn('Ошибка загрузки', e);
            return {};
        }
    }
};