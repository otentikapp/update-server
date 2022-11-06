/** @jsx jsx */
import { jsx } from 'hono/jsx'
import { SiteData } from '../interface'
import { Layout } from './layout'
import { constants } from '../utils'

export default function Page(props: { siteData: SiteData; versionString: string; content: any }) {
    return (
        <Layout {...props.siteData} stylesheet='/assets/release.css'>
            <div id='wrap'>
                <main>
                    <header>
                        <div id='release'>
                            <span>Otentik</span>
                            <span id='repo'>Authenticator</span>
                        </div>
                        <div id='date'>3 months ago</div>
                    </header>

                    <div id='list'>
                        {props.content.map((item: any) => (
                            <div key={item.id} class='item'>
                                <div class='fileType'>
                                    <span>{item.label}</span>
                                    <span class='size'>{item.file_size}</span>
                                </div>
                                <div class='url'>
                                    <a href={item.download_url}>{item.file_name}</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <footer>
                        <div id='version'>v{props.versionString}</div>
                        <a
                            id='release-notes'
                            href={`${constants.url.github_repo}/releases/tag/v${props.versionString}`}
                        >
                            Release Notes
                        </a>
                        <a id='all-releases' href='/archive'>
                            All Releases
                        </a>
                        <a href={`${constants.url.github_repo}`}>GitHub</a>
                    </footer>
                </main>
            </div>
        </Layout>
    )
}
