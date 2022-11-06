/** @jsx jsx */
import { jsx } from 'hono/jsx'
import { Layout } from './layout'

export default function Page() {
    return (
        <Layout>
            <main>
                <div>
                    <h1 class='title'>It Works!</h1>
                    <p class='subtitle'>
                        This is the default page when we working on it. Here are some reasons why
                        you are viewing this page:
                    </p>
                    <ul>
                        <li>This is the default web page for the site.</li>
                        <li>
                            This page used to <code>test the server</code> configuration.
                        </li>
                        <li>Site owner haven't uploaded your website yet.</li>
                        <li>Site owner still working on something great for you.</li>
                    </ul>
                    <p class='footermsg'>
                        Please contact the{' '}
                        <a href='https://s.id/dmaris' target='_blank' rel='noopener noreferrer'>
                            site owner
                        </a>{' '}
                        to get more information.
                    </p>
                </div>
            </main>
        </Layout>
    )
}
