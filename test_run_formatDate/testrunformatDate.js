module.exports = (err, req, res, next) => {
  res.status(500).sind({ error: err.message });
};
