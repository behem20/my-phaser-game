export function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    // Добавляем ведущий ноль, если меньше 10
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = secs < 10 ? "0" + secs : secs;

    return `${m}:${s}`;
}