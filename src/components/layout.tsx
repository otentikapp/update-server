/** @jsx jsx */
import { html } from 'hono/html'
import { SiteData } from '../interface'

export const Layout = (props: SiteData) => html`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="all, noindex, nofollow" />
            <meta name="googlebot" content="all, noindex, nofollow" />
            <meta
                name="description"
                content="${props.description || 'This is the default page when we working on it'}"
            />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="stylesheet" href="${props.stylesheet || '/assets/style.css'}" />
            <title>${props.title || 'Otentik Release Page'}</title>
        </head>
        <body>
            ${props.children}
        </body>
    </html>
`
