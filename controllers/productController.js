const products = require("../model/products");

class ProductsController {
    getAllProducts =  async (req, res) => {
        try {
            const data = await products.find().populate();
            // console.log('data: ', data);
            res.json({
               
                data: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ProductsController;
