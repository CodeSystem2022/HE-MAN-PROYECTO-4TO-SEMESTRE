const form = document.getElementById('form');
const sendMail = document.getElementById('emailIA');

function handleSendEmail(event) {
    event.preventDefault();
    const fd = new FormData(form); // Utiliza el formulario 'form'

    const subject = encodeURIComponent(fd.get('subject'));
    const message = encodeURIComponent(fd.get('message'));

    const mailtoUrl = `mailto:HeManbeers1981@gmail.com?subject=${subject}&body=${message}`;
    
    // Actualiza el enlace 'emailIA' con la URL del correo electrónico
    sendMail.setAttribute('href', mailtoUrl);
    
    // Simula un clic en el enlace 'sendMail' para abrir la aplicación de correo predeterminada
    sendMail.click();

    form.reset();
}

form.addEventListener('submit', handleSendEmail);