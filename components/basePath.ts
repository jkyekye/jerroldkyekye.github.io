const basePath = process.env.NODE_ENV === "production" ? "/jerroldkyekye.github.io" : "";

export function withBasePath(path: string) {
    return `${basePath}${path}`;
}
