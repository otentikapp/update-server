import { Hono } from 'hono'
import { Env } from '../interface'
import { prettyJSON } from '../middleware'
import { getPlatformName } from '../utils/platform'
import { getLatestRelease } from '../utils/repository'

const router = new Hono<{ Bindings: Env }>()
router.use('*', prettyJSON())

router.get('/', async (c) => {
    const latest = await getLatestRelease(c)
    const version = latest.tag_name.replace('v', '')

    const files: any[] = await Promise.all(
        latest.assets.map(async (item): Promise<any> => {
            const platform = getPlatformName(item.name)
            const sigUrl = `https://github.com/otentikapp/authenticator/releases/download/${latest.tag_name}/Authenticator.app.tar.gz.sig`
            const resp: any = await fetch(sigUrl)
            const sigStr = await resp.text()
            const signature = platform === 'darwin' ? sigStr : undefined

            return {
                name: item.name,
                content_type: item.content_type,
                download_url: item.browser_download_url,
                download_count: item.download_count,
                size: item.size,
                signature,
                platform,
            }
        })
    )

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
