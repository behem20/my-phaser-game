let langData = {};

export function setLanguage(scene, langKey) {
    langData = scene.cache.json.get(`lang_${langKey}`);

    
}

export function t(key) {
    
    return key.split('.').reduce((o, i) => o ? o[i] : null, langData) || key;
}