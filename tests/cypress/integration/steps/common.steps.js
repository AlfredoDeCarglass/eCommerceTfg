// cypress/e2e/common.steps.js

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
// Función de espera
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Background
Given('Estoy en la página de inicio de {string}', async (pagina) => {
  await sleep(1000);
});

// Scenario: Iniciar sesión en la aplicación
Given('Estoy en la pantalla de {string}', async (pantalla) => {
  await sleep(1000);
});

When('Ingreso credenciales válidas', async () => {
  await sleep(1000);
});

And('Hago clic en el botón {string}', async (boton) => {
  await sleep(1000);
});

Then('Debería iniciar sesión correctamente', async () => {
  await sleep(1000);
});

// Scenario: Registrar un nuevo usuario
When('Lleno el formulario de registro con detalles válidos', async () => {
  await sleep(1000);
});

Then('Debería registrarme correctamente', async () => {
  await sleep(1000);
});

// Scenario: Ver detalles de un producto
When('Hago clic en un producto', async () => {
  await sleep(1000);
});

Then('Debería estar en la pantalla de {string}', async (pantalla) => {
  await sleep(1000);
});

// Scenario: Agregar un producto al carrito de compras
When('Hago clic en {string}', async (accion) => {
  await sleep(1000);
});

And('Voy a la pantalla de {string}', async (pantalla) => {
  await sleep(1000);
});

Then('Debería ver el producto añadido en mi carrito', async () => {
  await sleep(1000);
});

// Scenario: Realizar un pedido
Given(
  'Tengo artículos en mi carrito en la pantalla de {string}',
  async (pantalla) => {
    await sleep(1000);
  }
);

When('Procedo al checkout', async () => {
  await sleep(1000);
});

And(
  'Selecciono métodos de envío y pago en las pantallas de {string}',
  async (pantalla) => {
    await sleep(1000);
  }
);

And('Realizo el pedido', async () => {
  await sleep(1000);
});

Then(
  'Debería ver la confirmación del pedido en la pantalla de {string}',
  async (pantalla) => {
    await sleep(1000);
  }
);

// Scenario: Actualizar el perfil de usuario
Given('Estoy conectado en la pantalla de {string}', async (pantalla) => {
  await sleep(1000);
});

When('Actualizo la información de mi perfil', async () => {
  await sleep(1000);
});

And('Guardo los cambios', async () => {
  await sleep(1000);
});

Then(
  'Mi información de perfil debería actualizarse correctamente',
  async () => {
    await sleep(1000);
  }
);
