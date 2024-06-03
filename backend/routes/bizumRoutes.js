// routes/payment.js
import express from 'express';
const bizumRouter = express.Router();

// Endpoint para simular un pago con Bizum
bizumRouter.post('/pay-with-bizum', (req, res) => {
  const { amount, phoneNumber } = req.body;

  // Simular una respuesta de éxito
  if (amount && phoneNumber) {
    res.json({
      status: 'success',
      message: 'Pago con Bizum simulado con éxito',
    });
  } else {
    res
      .status(400)
      .json({ status: 'error', message: 'Datos de pago incompletos' });
  }
});
export default bizumRouter;
