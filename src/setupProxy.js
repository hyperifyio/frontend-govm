// Copyright (c) 2024. Sendanor <info@sendanor.fi>. All rights reserved.

const REACT_APP_BACKEND_TARGET_URL = process?.env?.REACT_APP_BACKEND_TARGET_URL ?? 'https://localhost:3001';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: REACT_APP_BACKEND_TARGET_URL,
            changeOrigin: true,
            ws: true,
            autoRewrite: true,
            secure: false, // Verify SSL disabled for development
            // logLevel: 'debug',
            //protocolRewrite: 'http',
            // pathRewrite: {
            //     ['^/api'] : ''
            // }
        })
    );
};
