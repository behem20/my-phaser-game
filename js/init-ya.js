import { startGame } from "../game.js";
import { YaManager } from "./yaManager.js";

function waitForYaGames(timeout = 5000) {
    return new Promise((resolve, reject) => {
        const start = Date.now();

        const check = () => {
            if (window.yaGames) {
                resolve(window.yaGames);
            } else if (Date.now() - start > timeout) {
                reject(new Error('Yandex SDK not loaded'));
            } else {
                requestAnimationFrame(check); // ждём следующего кадра
            }
        };

        check();
    });
}
async function initYandexSdkAndStart() {
    try {
        const yaGames = await waitForYaGames(); // ждём SDK
        const sdk = await yaGames.init();
        window.ysdk = sdk;

        await YaManager.init(sdk); // передаём готовый SDK

        startGame();
    } catch (e) {
        console.error('Ошибка инициализации SDK:', e);
        await YaManager.init(); // fallback на mock
        startGame();
    }

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
            LoadingAPI: { ready: () => { console.log("ready") } },
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