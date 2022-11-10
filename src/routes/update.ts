import { Hono } from 'hono'
import { Env } from '../interface'
import { prettyJSON } from '../middleware'
import { getLatestRelease } from '../utils/repository'

const router = new Hono<{ Bindings: Env }>()
router.use('*', prettyJSON())

router.get('/:platform/:version', (c) => {
    const platform = c.req.param('platform')
    const version = c.req.param('version')
    return c.json({
        name: 'v2.0.0',
        notes: "This is the latest version! Once updated you shouldn't see this prompt.",
        pub_date: '2020-06-25T14:14:19Z',
        signature:
            'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUldSWTRKaFRZQmJER1pYVDNHNXB5NlBrUVRCWEhtOG5ZcWJQSVg4OVowY3dUdElxcWw5T1hYdTJBUS8zRmxENFA3OUsrTlFBWXMyMlBjK1RHekZkZTdvaG9BMSswOXZ5WEFvPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNjI1ODM2MzA3CWZpbGU6L1VzZXJzL3J1bm5lci93b3JrL3RhdXJpL3RhdXJpL3RhcmdldC9yZWxlYXNlL2J1bmRsZS9tYWNvcy91cGRhdGVyLWV4YW1wbGUuYXBwLnRhci5negpXajBDQURrMG1KREdmb2VLcXRLcmlERTRWQThReEtrVVZoaVNOSGUvdTFTTzlVVzNSUGM3NWNOVExOVWVWcUc5b1g2V0xZamU2a3RtQ3BRRWNmcEZBQT09Cg==',
        url: 'https://github.com/lemarier/tauri-test/releases/download/v2.0.0/updater-example_2.0.0_x64.app.tar.gz',
        platform,
        version,
    })
})

export default router
