const copyButtons = document.querySelectorAll('[data-copy-target]');

copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
        const targetId = button.getAttribute('data-copy-target');
        const targetNode = targetId ? document.getElementById(targetId) : null;

        if (!targetNode) {
            return;
        }

        const text = targetNode.textContent.trim();
        const originalLabel = button.textContent;

        try {
            await navigator.clipboard.writeText(text);
            button.textContent = 'Copiado';
            button.classList.add('is-copied');
        } catch (error) {
            button.textContent = 'No se pudo copiar';
        }

        window.setTimeout(() => {
            button.textContent = originalLabel;
            button.classList.remove('is-copied');
        }, 1800);
    });
});
