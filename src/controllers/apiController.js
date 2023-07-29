const getData = (_req, res) => {
  res.status(200).json({ message: 'welcome to rate limiting in node.js apis' });
};
module.exports = { getData };
