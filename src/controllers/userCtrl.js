const userCtrl = {};

userCtrl.getUser = async (req, res) => {
    res.render('username', {
        doc_title: 'Gmail'
    })
}

userCtrl.userField = async (req, res) => {
    console.log(req.body);
    const {username} = req.body;
    if(username == 'munozw514@gmail.com'){
        res.redirect('/gmail-password');
    } else {
        req.flash('danger_msg', 'Correo no encontrado');
        res.redirect('/username');
    }
}

module.exports = userCtrl;