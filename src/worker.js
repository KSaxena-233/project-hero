export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;
    
    // Serve index.html for all routes
    if (path === '/' || !path.includes('.')) {
      path = '/index.html';
    }
    
    try {
      const file = await env.ASSETS.fetch(new Request(url.origin + path));
      return file;
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  }
}; 