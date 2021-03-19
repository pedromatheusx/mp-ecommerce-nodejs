
// SDK de Mercado Pago
const mercadopago = require('mercadopago');

// Configura credenciais
mercadopago.configure({
  integrator_id: "dev_24c65fb163bf11ea96500242ac130004",
  access_token: process.env.PROD_ACCESS_TOKEN || "APP_USR-334491433003961-030821-12d7475807d694b645722c1946d5ce5a-725736327"
});


module.exports = {

  async preference(req, res) {
    const { title, price, unit ,img} = req.query
    // Cria um objeto de preferência

    let preference = {
        items: [{
          id: "1234",
          title,
          discription: "Celular de Tienda e-commerce",
          picture_url : img,
          unit_price: Number(price),
          quantity: parseInt(unit),
        }],
        external_reference: "pedromatheusduarte@gmail.com",
        payer: {
          name: "Lalo",
          surname: "Landa",
          email: "test_user_92801501@testuser.com",
          date_created: new Date().toISOString(),
          phone: {
            area_code: "55",
            number: 985298743
          },
    
          address: {
            street_name: "Insurgentes Sur",
            street_number: 1602,
            zip_code: "78134-190"
          }
        },
        payment_methods:{
          excluded_payment_types:[
            {
              id:"amex"
            }
          ],
          installments: 6
        },
        notification_url: "https://webhook.site/c7d600eb-99c9-4c92-a8ab-29521a699356",
        back_urls: {
          success: "https://mercado-pago-pro.herokuapp.com/success",
          failure: "https://mercado-pago-pro.herokuapp.com/failure",
          pending: "https://mercado-pago-pro.herokuapp.com/pending"
        },
        auto_return: 'approved',
    };

    mercadopago.preferences.create(preference)
      .then(function (response) {
        // Este valor substituirá a string "<%= global.id %>" no seu HTML
        // global.id = response.body.id;
     return res.redirect(response.body.init_point);
      }).catch(function (error) {
        console.log(error);
      });
  }
}
