const express = require('express');

const route = express.Router();
const locationController = require('../Controllers/Location');
const mealtypesController = require('../Controllers/MealTypes');
const restaurantController = require('../Controllers/Restaurants');
const menuitemsController = require('../Controllers/Items');
const userController = require('../Controllers/Users');
const ordersController = require('../Controllers/Orders');


route.get('/locations', locationController.getLocations);
route.get('/mealtypes', mealtypesController.getMealTypes);
route.get('/restaurants/:locId', restaurantController.getrestaurantsbyLocation);
route.post('/filter', restaurantController.restaurantsFilter);
route.get('/restaurant/:resId', restaurantController.getrestaurantdetailsbyId);
route.get('/menuitems/:resId', menuitemsController.getmenuItemsbyResId);
route.post('/userSignUp', userController.usersignUp);
route.post('/userLogin', userController.userlogIn);
route.post('/ordersaved', ordersController.orderssaved);
route.post('/orderdetails', ordersController.getorderdetailsbyId);

module.exports = route;