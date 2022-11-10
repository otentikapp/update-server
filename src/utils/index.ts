export function getExtension(filename: string) {
    return filename.substring(filename.lastIndexOf('.') + 1)
}

export function getOS(userAgent: string): string {
    let osName = ''
    if (userAgent.search('Windows') !== -1) {
        osName = 'Windows'
    } else if (userAgent.search('Mac') !== -1) {
        osName = 'macOS'
    } else if (userAgent.search('X11') !== -1 && !(userAgent.search('Linux') !== -1)) {
        osName = 'UNIX'
    } else if (userAgent.search('Linux') !== -1 && userAgent.search('X11') !== -1) {
        osName = 'Linux'
    }

    return osName
}

export { default as constants } from './constants'

export * from './repository'
