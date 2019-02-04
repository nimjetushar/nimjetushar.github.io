export default function registerWebWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('dist/service-workers.js');
    }
}