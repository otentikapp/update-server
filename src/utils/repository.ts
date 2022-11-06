import { Octokit } from '@octokit/rest'

// GitHub Token Scope required: repo
export async function getReleases(c: any) {
    const octokit = new Octokit({ auth: c.env.GITHUB_TOKEN })
    return await octokit.rest.repos.listReleases({
        owner: 'otentikapp',
        repo: 'clients',
    })
}

export async function getLatestRelease(c: any) {
    const { data } = await getReleases(c)
    const excludeVersions = ['draft', 'prerelease']
    const releases = data.filter((release: any) =>
        excludeVersions.some((exclude) => !release[exclude])
    )
    return releases[0]
}

export async function getLatestVersionString(c: any): Promise<string> {
    const latest = await getLatestRelease(c)
    const version = latest.tag_name.replace('v', '')
    return version
}
