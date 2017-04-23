/**
 * Created by calvindudek on 28/02/2017.
 */
const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


let items = {
    "1": {"first_name": "calvin", "last_name": "dudek"},
    "2": {"first_name": "nadja", "last_name": "dudek"}
};

router.get('/', (req, res) => {
    // items_list
    // res.json(items_list)
    res.render('home', items)
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Hello World ${id}`);
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {
    // let id = re
});

module.exports = router;