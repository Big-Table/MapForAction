const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/incidents", "/tweets", "/auth", "/actions"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
