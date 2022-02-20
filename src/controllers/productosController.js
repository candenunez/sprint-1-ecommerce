

const productosController = {

    cart: (req, res) =>  {
         res.render ('cart')

    },
    createproduct:(req, res) =>  {
         res.render ('chargeproduct')

    },
    details:(req, res) =>  {
         res.render ('details')

    },
    editproduct:(req, res) =>  {
         res.render ('editproduct')

    },
    productslists:(req, res) =>  {
         res.render ('productslists')

    }

}

module.exports = productosController;