const questionCtrl = {};

questionCtrl.getHome = async (req, res) => {
    res.render('index', {
        doc_title: 'Facebook'
    })
}

module.exports = questionCtrl;