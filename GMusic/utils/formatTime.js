export default function formatTime(seconds){
    if (!Number.isFinite(seconds) || seconds < 0){
        return '00:00';
    }
    const totalsecons = Math.floor(seconds);
    const minutes = Math.floor(totalsecons / 60);
    const remainingSeconds = totalsecons % 60;

    return ${String(minutes).padStart(2,'0')}:${String(remainingSeconds).padStart(2,'0')};
}