export default {
    url: {
        github_org: 'https://github.com/otentikapp',
        github_repo: 'https://github.com/otentikapp/authenticator',
    },
}

export const aliases = {
    darwin: ['mac', 'macos', 'osx'],
    win32: ['windows32', 'windows', 'win'],
    win64: ['windows64'],
    // actually we bind all linux to appimage
    appimage: ['linux32', 'linux64', 'linux'],
    // Not supported yet
    exe: ['exe'],
    dmg: ['dmg'],
    deb: ['debian'],
    rpm: ['fedora'],
}
