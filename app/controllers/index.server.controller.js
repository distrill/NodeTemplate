exports.render = (req, res) => {
  res.sendFile('index.html', {
    root: __dirname + '/../views/',
  });
};
