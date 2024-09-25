import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import {App} from "./App";

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }));
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }));

app.get('/', (c) => {
    return c.html(
        <html>
        <body>
        <div id="root">
            <App /> {/* Render the App component on the server */}
        </div>
        <script src="/static/App.js" type="module"></script>
        </body>
        </html>
    );
});

app.get('*', serveStatic({ path: './static/fallback.txt' }));

export default app;