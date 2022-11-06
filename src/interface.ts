export interface Env {
    // DB: D1Database
    GITHUB_TOKEN: string
    GITHUB_ORG: string
    GITHUB_REPO: string
    // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
    // MY_KV_NAMESPACE: KVNamespace;
    //
    // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
    // MY_DURABLE_OBJECT: DurableObjectNamespace;
    //
    // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
    // MY_BUCKET: R2Bucket;
}

export interface SiteData {
    title?: string
    description?: string
    children?: any
    stylesheet?: string
}
