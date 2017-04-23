/**
 * Created by calvindudek on 28/02/2017.
 */
const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


let users = {
    "calvindudek": {"firstName": "Calvin", "lastName": "Dudek"},
    "nadjadudek": {"firstName": "Nadja", "lastName": "Dudek"}
};

router.get('/', (req, res) => {
    // items_list
    // res.json(items_list)
    res.render('pages/users/all', {users})
});

router.get('/:username', (req, res) => {
    let username = req.params.username;
    let user = users[username];
    res.render('pages/users/profile', { user })

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});



module.exports = router;