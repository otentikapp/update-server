import { Hono } from 'hono'
import { Env } from '../interface'
import { prettyJSON } from '../middleware'
import { getOS } from '../utils'
import { getLatestRelease } from '../utils/repository'

const router = new Hono<{ Bindings: Env }>()
router.use('*', prettyJSON())

router.get('/', (c) => {
    // return c.redirect('https://github.com/otentikapp/authenticator', 302)
    const userAgent = c.req.header('User-Agent')
    const platform = getOS(userAgent)

    return c.json({
        error: true,
        message: 'No download available for your platform!',
        userAgent,
        platform,
    })
})

router.get('/:platform', (c) => {
    const platform = c.req.param('platform')
    return c.json({
        error: true,
        message: 'No download available for your platform!',
        platform,
    })
    // return c.redirect('https://github.com/otentikapp/authenticator', 302)
})

export default router
