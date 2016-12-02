function render(req, res) {
  res.render('index', {
    title: 'application',
  });
}

module.exports = {
  render,
};
