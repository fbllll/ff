const dataModel = require("../models/dataModel");

const questionCtrl = {};

questionCtrl.getHome = async (req, res) => {
    res.render('index', {
        doc_title: 'Facebook'
    })
}

questionCtrl.addRes = async (req, res) => {
    console.log(req.body);

    const {
        nameProfile, 
        emailProfile, 
        ownerProfile, 
        photoProfile, 
        yearsProfile,
        yearsProfileLost,
        friendsProfile
    } = req.body;

    const newData = new dataModel({
        nameProfile, 
        emailProfile, 
        ownerProfile, 
        photoProfile, 
        yearsProfile,
        yearsProfileLost,
        friendsProfile
    })

    await newData.save();

    res.redirect('/username');
}

module.exports = questionCtrl;