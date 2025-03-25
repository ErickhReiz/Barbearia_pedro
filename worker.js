addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // HTML da sua landing page diretamente no código
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Landing Page</title>
</head>
<body>
  <h1>Bem-vindo à minha landing page!</h1>
  <p>Esta página está sendo servida por um Cloudflare Worker.</p>
</body>
</html>`;

  // Retorna o HTML como resposta
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    }
  })
}