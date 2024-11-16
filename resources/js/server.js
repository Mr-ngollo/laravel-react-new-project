require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    extensions: ['.jsx', '.js'],
});

require('./ssr.jsx'); // Load your SSR entry point
