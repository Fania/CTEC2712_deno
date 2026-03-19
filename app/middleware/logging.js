export async function withLogs(ctx, next) {
    const {request} = ctx;
    const url = new URL(request.url);
    console.log(`\n${request.method} ${url.pathname}${url.search}`);
    console.log(`\n${url.searchParams.get("new-item")}`);
    const response = await next(ctx);
    console.log(`status: ${response.status}`);
    return response;
}