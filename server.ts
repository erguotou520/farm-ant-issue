Bun.serve({
  port: 4001,
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    const url = new URL(req.url);
    return new Response(url.pathname);
  },
  websocket: {
    open(ws) {
      console.log("WebSocket opened");
    },
    message(ws, message) {
      ws.send(message)
    }
  }
});