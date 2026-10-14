/* ==========================================================================
   Lógica e Armazenamento — Projeto Prêmio Guigui Terres
   Escola Estadual D. Pedro II (Ensino Integral) - Janiópolis/PR
   ========================================================================== */

// Carrega o total guardado no navegador ou inicia em 148
let totalAssinaturas = parseInt(localStorage.getItem('totalAssinaturas')) || 148;

document.addEventListener('DOMContentLoaded', () => {
    // Atualiza o contador na tela assim que o site carrega
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.innerText = totalAssinaturas;
    }

    // Configura a rolagem suave dos links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/**
 * Lida com o Envio do Abaixo-Assinado
 */
function handleSignature(event) {
    const nameInput = document.getElementById('name');

    if (nameInput && nameInput.value.trim() !== "") {
        // Incrementa o número de assinaturas
        totalAssinaturas++;
        
        // Salva na memória local do navegador
        localStorage.setItem('totalAssinaturas', totalAssinaturas);

        // Atualiza a tela
        const counterElement = document.getElementById('counter');
        if (counterElement) {
            counterElement.innerText = totalAssinaturas;
        }

        // Exibe mensagem de confirmação
        const successMsg = document.getElementById('successMessage');
        if (successMsg) {
            successMsg.classList.remove('hidden');
        }
    }
}

/**
 * Lida com o Envio de Relatos
 */
function handleReport(event) {
    const reportMsg = document.getElementById('reportSuccess');
    if (reportMsg) {
        reportMsg.classList.remove('hidden');
    }
}