const getData = (req, res) => {
  res.json({ data: 'welcome to rate limiting in node.js apis' });
};
module.exports = { getData };
