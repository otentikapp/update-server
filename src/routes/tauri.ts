import { Hono } from 'hono'
import { Env } from '../interface'
import { prettyJSON } from '../middleware'
import { getLatestRelease } from '../utils/repository'

const router = new Hono<{ Bindings: Env }>()
router.use('*', prettyJSON())

router.get('/', (c) => {
    return c.json({
        account: '',
        repository: '',
        date: '',
        files: [],
        version: '',
        releaseNotes: `https://github.com/otentikapp/authenticator/releases/tag/v0.1.0}`,
        allReleases: `https://github.com/otentikapp/authenticator/releases`,
        github: `https://github.com/otentikapp/authenticator`,
    })
})

router.get('/github', async (c) => {
    const latest = await getLatestRelease(c)
    const version = latest.tag_name.replace('v', '')

    return c.json({
        version,
        url: 'https://otentik.app/releases/myrelease.tar.gz',
        notes: 'Theses are some release notes',
        pub_date: '2020-09-18T12:29:53+01:00',
        signature: '',
        packages: latest.assets,
    })
})

export default router
