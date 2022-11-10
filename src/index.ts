// Read more about Service Workers and Module Workers:
// https://honojs.dev/docs/getting-started/cloudflare-workers/#advanced

import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static.module'

import { homeHandler, tauriHandler, downloadHandler, updateHandler } from './routes'
import { poweredBy, logger, cors } from './middleware'
import { Env } from './interface'

// Initialize Hono instance.
const app = new Hono<{ Bindings: Env }>()

// Serving static files from public directory.
app.use('/favicon.ico', serveStatic({ path: 'favicon.ico' }))
app.use('/assets/*', serveStatic({ root: '' }))
// app.get('/', serveStatic({ path: 'index.html' }))

// Register core middlewares
app.use('*', logger())
app.use('*', poweredBy())
app.use('*', cors())

// Register app routes.
app.route('/', homeHandler)
app.route('/tauri', tauriHandler)
app.route('/update', updateHandler)
app.route('/download', downloadHandler)

// Handle 404 endpoint
// app.get('*', serveStatic({ path: '404.html' }))
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

export default app // <--- Module Worker mode
