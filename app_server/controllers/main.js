const index = (req, res) => {
    res.render('index', {title:  'Travlr Getaways - Travel'});
};

module.exports = {
    index
}