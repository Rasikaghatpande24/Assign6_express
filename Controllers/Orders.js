const { response } = require('express');
const Orders = require('../Models/orders');

exports.orderssaved = (req, res) => {
    const { userId } = req.body;

    const order = new Orders({
        userId: placedByUserId
    })
    Orders.save()
        .then(response => {
            res.status(200).json({ message: "Order Placed succesfully", ordersave: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getorderdetailsbyId = (req, res) => {
    const { byUserId } = req.body;
    User.find({ userId: placedByUserId })
        .then(response => {
            res.status(200).json({ message: "Orders data fetched succesfully", orderdetails: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}