const Items = require('../Models/items');

exports.getmenuItemsbyResId = (req, res) => {
    const { resId } = req.params;
    Items.find({ restaurantId: resId })
        .then(response => {
            res.status(200).json({ message: "Items fetched succesfully", items: resId })
        })
        .catch()
}