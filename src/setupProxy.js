// Copyright (c) 2024. Sendanor <info@sendanor.fi>. All rights reserved.

const REACT_APP_BACKEND_TARGET_URL = process?.env?.REACT_APP_BACKEND_TARGET_URL ?? 'http://localhost:3001';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: REACT_APP_BACKEND_TARGET_URL,
            changeOrigin: true,
            ws: true,
            autoRewrite: true,
            // logLevel: 'debug',
            //protocolRewrite: 'http',
            // pathRewrite: {
            //     ['^/api'] : ''
            // }
        })
    );
};
