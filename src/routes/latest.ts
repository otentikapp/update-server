import { Hono } from 'hono'
import { Env } from '../interface'
import { prettyJSON } from '../middleware'
import { getLatestRelease } from '../utils/repository'

const router = new Hono<{ Bindings: Env }>()
router.use('*', prettyJSON())

router.get('/', async (c) => {
    const latest = await getLatestRelease(c)
    const version = latest.tag_name.replace('v', '')
    const files = latest.assets.map((item) => ({
        name: item.name,
        content_type: item.content_type,
        download_url: item.browser_download_url,
        download_count: item.download_count,
        size: item.size,
    }))

    return c.json({
        version,
        pub_date: latest.published_at,
        notes: latest.body,
        release_notes: `https://github.com/otentikapp/authenticator/releases/tag/${latest.tag_name}`,
        all_releases: `https://github.com/otentikapp/authenticator/releases`,
        repository: `https://github.com/otentikapp/authenticator`,
        files,
    })
})

export default router
