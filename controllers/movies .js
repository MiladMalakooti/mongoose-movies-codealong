const Movie = require('../models/movie');

module.exports = {
    new: newMovies,
    create
};

function create(req, res){
    // convert noShowing's checkbox
    req.body.nowShowing = !!req.body.nowShowing;
    req.body.cast = req.body.replace(/\s*,\s*/g, ',');
    if (req.body.cast) req.body.cast = req.body.cast.split(',')
    const movie = new Movie(req.body);
    movie.user = req.user._id;
    movie.save(function(err){
        if (err) return res.render('movies/new');
        console.log(movie);
        res.redirect('/movies/mew');
    });
}

function newMovies(req, res){
    res.render('movies/new');
}