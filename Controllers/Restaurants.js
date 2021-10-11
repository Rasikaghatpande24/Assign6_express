const { response } = require('express');
const Restaurants = require('../Models/restaurants');

exports.getrestaurantsbyLocation = (req, res) => {
    const { locId } = req.params;
    Restaurants.find({ location_id: locId })
        .then(response => {
            res.status(200).json({ message: "Restaurants fetched Succesfully ", restaurants: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.restaurantsFilter = (req, res) => {
    let { location, cuisine, mealtype, lcost, hcost, sort, page } = req.body;
    sort = sort ? sort : 1;
    page - page ? page : 1;

    const itemsperpage = 2;
    let filterobj = {};
    const startindex = page * itemsperpage - itemsperpage;
    const endindex = page * itemsperpage;


    location && (filterobj["location_Id"] = location);
    cuisine && (filterobj["cuisine_id"] = cuisine);
    mealtype && (filterobj["mealtype_id"] = mealtype);
    lcost && hcost && (filterobj["lcost_id"] = lcost) && (filterobj["hcost_id"] = hcost);


    Restaurants.find(filterobj).sort({ min_price: sort })
        .then(response => {
            let pageArr = [];
            for (var i = 1; i <= Math.ceil(response.length / itemsperpage); i++) {
                pageArr.push(i);
            }

            const filteredResponse = response.slice(startindex, endindex);
            res.status(200).json({ message: "Restaurants data fetched succesfully ", restaurants: filteredResponse, pages: pageArr })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getrestaurantdetailsbyId = (req, res) => {
    const { resId } = req.params;
    Restaurants.find({ _id: resId })
        .then(response => {
            res.status(200).json({ message: "Restaurants data fetched succesfully", resdata: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}