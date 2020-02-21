const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies',{ // default port: 20717 but not necessary to put
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
});

// shortcut vaiable
const db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
}); ///// end of shortcut for db