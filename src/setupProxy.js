const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use("/mock",
        createProxyMiddleware({
            target: 'http://localhost:3001/',
            changeOrigin: true,
            pathRewrite: {
                "^/mock": ""
            }
        })
    )
}