import { createInertiaApp } from '@inertiajs/react';
import { renderToString } from '@inertiajs/server';
// import App from './App';

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`).default,
    setup: ({ App, props }) => renderToString(<App {...props} />),
});
