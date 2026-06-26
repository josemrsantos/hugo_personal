document.addEventListener('DOMContentLoaded', (): void => {
    const yearElement: HTMLElement | null = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear().toString();
    }
});
