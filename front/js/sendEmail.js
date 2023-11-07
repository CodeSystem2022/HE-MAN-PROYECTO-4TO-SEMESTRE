// Obtenemos referencias a los elementos del DOM
const form = document.getElementById('form');
const sendMail = document.getElementById('emailIA');

// Función que maneja el envío de correos electrónicos al hacer clic en el botón del formulario
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
    // Restablece el formulario para borrar los campos después de enviar el correo
    form.reset();
}
// Agregamos un manejador de eventos para el evento 'submit' del formulario
form.addEventListener('submit', handleSendEmail);
