// Creamos una instancia de la API de MercadoPago con las credenciales de prueba
const mercadopago = new MercadoPago("TEST-7a98890d-5eb1-48bd-b3d5-31a9e6751d8a", {
  locale: "es-AR", // The most common are: 'pt-BR', 'es-AR' and 'en-US'
});

// Obtenemos los datos del pedido del DOM
document.getElementById("checkout-btn").addEventListener("click", function () {
  const orderData = {
    quantity: 1, // Cantidad de productos
    price: document.getElementById("unit-price").innerHTML, // Precio del producto
  };
  
// Se realiza una solicitud POST al servidor local para crear una preferencia de pago
  fetch("http://localhost:8080/create_preference", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (preference) {
      createCheckoutButton(preference.id);
    })
    .catch(function () {
      alert("Unexpected error");
    });
});

// Función para crear el botón de pago
function createCheckoutButton(preferenceId) {
// Inicializamos la integración de pagos de MercadoPago
  const bricksBuilder = mercadopago.bricks();
  
// Definimos una función asincrónica para renderizar el botón de pago
  const renderComponent = async (bricksBuilder) => {
    if (window.checkoutButton) window.checkoutButton.unmount();
    await bricksBuilder.create(
      "wallet",
      "button-checkout", // class/id where the payment button will be displayed
      {
        initialization: {
          preferenceId: preferenceId,
        },
        callbacks: {
          onError: (error) => console.error(error),
          onReady: () => {},
        },
      }
    );
  };
  window.checkoutButton = renderComponent(bricksBuilder);
}
