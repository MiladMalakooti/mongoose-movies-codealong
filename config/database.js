const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies',{ // default port: 20717 but not necessary to put
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
});