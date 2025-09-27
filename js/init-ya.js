import { startGame } from "../game.js";
import { YaManager } from "./yaManager.js";


export async function initYandexSdkAndStart() {
    let sdk = null;

    if (window.yaGames) {
        try {
            sdk = await window.yaGames.init();
            window.ysdk = sdk;
            console.log('Yandex SDK inited', sdk);
            // ✅ автоопределение языка (п.2.14)
            // let portalLang = sdk.environment.i18n.lang;
            const portalLang = sdk?.environment?.i18n?.lang;
            const SUPPORTED = ['ru']; // у тебя поддерживается только русский

            const langToUse = (portalLang && SUPPORTED.includes(portalLang)) ? portalLang : 'ru';
            window.gameLang = langToUse;
        } catch (e) {
            window.ysdk = null;
        }
    } else {
       
        window.ysdk = createLocalYsdkMock();
    }
 
    // Теперь можно запускать игру — передаём SDK если нужно.
    if (YaManager && typeof YaManager.init === 'function') {
        await YaManager.init();
    }
    // Теперь запускаем игру
    async function testLocalSdk() {
        if (!window.ysdk) {
            // console.warn("SDK не инициализирован");
            return;
        }

        // console.log("=== Тест mock SDK ===");

        // 1. Сохраняем тестовые данные
        await window.ysdk.storage.set('testData', { coins: 100, gems: 5 });
        // console.log("Данные записаны в mock SDK");

        // 2. Читаем их обратно
        const loaded = await window.ysdk.storage.get('testData');
        // console.log("Загруженные данные:", loaded);

        // 3. Проверка на LocalStorage
        // console.log("LocalStorage:", localStorage.getItem('testData'));
    }

    testLocalSdk();
  
    startGame();
}
//    if (window.ysdk?.features?.GameplayAPI) window.ysdk.features.GameplayAPI.start();
//    if (ysdk?.features?.GameplayAPI) ysdk.features.GameplayAPI.stop();
function createLocalYsdkMock() {
    // минимальный mock — дополняй методами, которые ты реально используешь
    console.log('mock sdk');

    return {
        // пример: getPlayer() в реальном SDK возвращает объект/промис — здесь простой mock:
        getPlayer: async () => ({ getName: () => 'LocalPlayer' }),
        // если используешь рекламу — делаем фейковую реализацию
        showRewardedAd: async () => ({ watched: false }),
        // storage-like mock (если будешь пользоваться storage через SDK)
        storage: {
            async get(key) {
                try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
            },
            async set(key, value) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        },
        features: {
            LoadingAPI: { ready: () => {console.log("ready") } },
            GameplayAPI: {
                start: () => {
                    console.log("start");
                }, stop: () => {
                    console.log('stop');
                }
            },
        }   
    };
}

window.addEventListener('load', () => {
    initYandexSdkAndStart();
});
/*
 * startGame() должен создать Phaser.Game или вызвать код, который
 * создаёт игру. Важно: этот вызов должен быть _после_ init.
 * Я предполагаю, что у тебя есть game.js где есть функция startGame.
 * Если в game.js конфигурация создаёт игру сразу при загрузке,
 * вынеси создание Phaser в функцию startGame().
 */
// initYandexSdkAndStart();