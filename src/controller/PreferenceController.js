
// SDK de Mercado Pago
const mercadopago = require('mercadopago');

// Configura credenciais
mercadopago.configure({
  access_token: process.env.PROD_ACCESS_TOKEN || "TEST-3221234070031413-030323-7a90077e2ebdf20f2112696754256ca9-256917392"
});


module.exports = {

  async preference(req, res) {
    const { title, price, unit } = req.query
console.log(req.query)
    // Cria um objeto de preferência

    let preference = {
      items: [
        {
          title,
          quantity: parseInt(unit),
          unit_price: Number(price),

        }
      ]
    };

    mercadopago.preferences.create(preference)
      .then(function (response) {
        // Este valor substituirá a string "<%= global.id %>" no seu HTML
        global.id = response.body.id;
      }).catch(function (error) {
        console.log(error);
      });
  }
}
