addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    // Obtém o conteúdo do arquivo index.html
    const response = await fetch('index.html', {
      cf: { cacheTtl: 3600 }
    })
    
    // Cria uma nova resposta com o conteúdo HTML
    return new Response(await response.text(), {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      }
    })
  }