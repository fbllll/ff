const mongoose = require('mongoose');

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1/copyGo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));