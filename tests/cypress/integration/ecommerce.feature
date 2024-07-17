Feature: Pruebas de las pantallas de e-Commerce

  Background:
    Given Estoy en la página de inicio de "laManchaCommerce"

  Scenario: Iniciar sesión en la aplicación
    Given Estoy en la pantalla de "Iniciar Sesión"
    When Ingreso credenciales válidas
    And Hago clic en el botón "Iniciar Sesión"
    Then Debería iniciar sesión correctamente

  Scenario: Registrar un nuevo usuario
    Given Estoy en la pantalla de "Registro"
    When Lleno el formulario de registro con detalles válidos
    And Hago clic en el botón "Registrarse"
    Then Debería registrarme correctamente

  Scenario: Ver detalles de un producto
    Given Estoy en la pantalla de "Inicio"
    When Hago clic en un producto
    Then Debería estar en la pantalla de "Detalles del Producto"

  Scenario: Agregar un producto al carrito de compras
    Given Estoy en la pantalla de "Detalles del Producto"
    When Hago clic en "Agregar al Carrito"
    And Voy a la pantalla de "Carrito"
    Then Debería ver el producto añadido en mi carrito

  Scenario: Realizar un pedido
    Given Tengo artículos en mi carrito en la pantalla de "Carrito"
    And Estoy en la pantalla de "Carrito"
    When Procedo al checkout
    And Selecciono métodos de envío y pago en las pantallas de "Checkout"
    And Realizo el pedido
    Then Debería ver la confirmación del pedido en la pantalla de "Confirmación de Pedido"

  Scenario: Actualizar el perfil de usuario
    Given Estoy conectado en la pantalla de "Perfil"
    When Actualizo la información de mi perfil
    And Guardo los cambios
    Then Mi información de perfil debería actualizarse correctamente
