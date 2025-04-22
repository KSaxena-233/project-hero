export default {
  async fetch(request, env) {
    try {
      // Get the URL and pathname
      const url = new URL(request.url);
      let pathname = url.pathname;

      // Handle root path and non-file paths
      if (pathname === '/' || !pathname.includes('.')) {
        pathname = '/index.html';
      }

      // Create a new request to the static asset
      const assetRequest = new Request(
        `${url.origin}${pathname}`,
        request
      );

      // Serve the static asset
      return env.ASSETS.fetch(assetRequest);
    } catch (e) {
      return new Response('Not Found', { 
        status: 404,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    }
  }
}; 