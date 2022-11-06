/** @jsx jsx */
import { Hono } from 'hono'
import { jsx } from 'hono/jsx'
import { Env } from '../interface'
import { ArchivePage, ReleasePage } from '../components'

const router = new Hono<{ Bindings: Env }>()

router.get('/', (c) => {
    const props = {
        siteData: { title: 'Download Otentik Authenticator' },
        versionString: '0.7.0',
        content: [
            {
                id: 'macos_universal',
                label: 'macOS Universal',
                download_url: `/download/Authenticator_0.7.0_x64.dmg`,
                file_name: `Authenticator_0.7.0_x64.dmg`,
                file_size: '2.69 MB',
            },
            {
                id: 'macos_intel_x64',
                label: 'macOS Intel x64',
                download_url: `/download/Authenticator_0.7.0_x64.dmg`,
                file_name: `Authenticator_0.7.0_x64.dmg`,
                file_size: '2.69 MB',
            },
            {
                id: 'windows_x64',
                label: 'Windows x64',
                download_url: `/download/authenticator-setup-0.7.0.exe`,
                file_name: `authenticator-setup-0.7.0.exe`,
                file_size: '3.2 MB',
            },
        ],
    }
    return c.html(<ReleasePage {...props} />)
})

router.get('/archive', (c) => {
    return c.html(<ArchivePage />)
})

export default router
