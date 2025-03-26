addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // HTML da sua landing page diretamente no código
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TimeLine Soluções</title>
    <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/97408981?s=40&v=4" type="image/x-icon">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
      rel="stylesheet"
    />
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: "#172D44",
              secondary: "#FF7F11",
              black: "#2F2F2F",
              white: "#E2E8CE",
              soft: "#ACBFA4",
            },
            borderRadius: {
              none: "0px",
              sm: "4px",
              DEFAULT: "8px",
              md: "12px",
              lg: "16px",
              xl: "20px",
              "2xl": "24px",
              "3xl": "32px",
              full: "9999px",
              button: "8px",
            },
            fontFamily: {
              'montserrat': ['Montserrat', 'sans-serif'],
              'roboto': ['Roboto', 'sans-serif'],
            }
          },
        },
      };
    </script>
    <style>
      :where([class^="ri-"])::before {
        content: "\f3c2";
      }
      .service-card:hover {
        transform: translateY(-5px);
      }
      .gallery-image:hover {
        transform: scale(1.05);
      }
    </style>
  </head>
  <body class="bg-white font-roboto">
    <header class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-montserrat font-bold text-primary">TimeLine</h1>
          <div class="hidden md:flex space-x-8">
            <a href="#inicio" class="text-black hover:text-secondary">Início</a>
            <a href="#solucoes" class="text-black hover:text-secondary">Soluções</a>
            <a href="#planos" class="text-black hover:text-secondary">Planos</a>
            <a href="#cases" class="text-black hover:text-secondary">Cases</a>
            <a href="#contato" class="text-black hover:text-secondary">Contato</a>
          </div>
          <button class="bg-secondary text-white px-6 py-2 rounded-md hover:bg-secondary/90">
            Fale Conosco
          </button>
        </div>
      </nav>
    </header>

    <main>
      <section id="inicio" class="relative h-screen">
        <div class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
        </div>
        <div class="absolute inset-0 bg-primary/80"></div>
        <div class="relative container mx-auto px-6 h-full flex items-center">
          <div class="max-w-2xl text-white">
            <h2 class="text-5xl font-montserrat font-bold mb-6">Transformação Digital para seu Negócio</h2>
            <p class="text-xl mb-8 font-roboto">
              Soluções tecnológicas personalizadas para impulsionar sua empresa ao próximo nível.
              Desenvolvimento web, automação e consultoria especializada.
            </p>
            <button class="bg-secondary text-white px-8 py-3 rounded-md hover:bg-secondary/90">
              Conheça Nossas Soluções
            </button>
          </div>
        </div>
      </section>

      <section id="solucoes" class="py-20 bg-soft/10">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-montserrat font-bold text-center mb-16">Nossas Soluções</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="service-card bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
              <div class="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                <i class="ri-code-line text-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Desenvolvimento Web</h3>
              <p class="text-gray-600">
                Landing pages otimizadas, sites institucionais e sistemas web personalizados para sua empresa.
              </p>
            </div>
            
            <div class="service-card bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
              <div class="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                <i class="ri-settings-line text-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Automação</h3>
              <p class="text-gray-600">
                Automatize processos e aumente a eficiência do seu negócio com nossas soluções inteligentes.
              </p>
            </div>

            <div class="service-card bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
              <div class="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                <i class="ri-line-chart-line text-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Consultoria</h3>
              <p class="text-gray-600">
                Análise estratégica e implementação de soluções tecnológicas para otimizar seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" class="py-20">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-montserrat font-bold text-center mb-16">Nossos Planos</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 class="text-2xl font-bold mb-4">Plano A – Landing Page no Seu Subdomínio</h3>
              <p class="text-gray-600 mb-6">Landing Page no Seu Subdomínio</p>
              <div class="text-3xl font-bold mb-6">
                R$XX/mês ou R$XX único
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center">
                  <i class="ri-check-line text-secondary mr-2"></i>Hospedagem no seu subdomínio
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-secondary mr-2"></i>Customização básica
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-secondary mr-2"></i>Integração com formulário de contato
                </li>
              </ul>
              <button class="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90">
                Começar Agora
              </button>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-primary relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                Mais Popular
              </div>
              <h3 class="text-2xl font-bold mb-4">Plano B – Landing Page + 1 Ano de Domínio Próprio</h3>
              <p class="text-gray-600 mb-6">Para quem busca mais cuidados</p>
              <div class="text-3xl font-bold mb-6">
                R$XX/ano
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center">
                  <i class="ri-check-line text-primary mr-2"></i>Tudo do Plano A
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-primary mr-2"></i>Domínio próprio .com.br
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-primary mr-2"></i>Certificado SSL incluso
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-primary mr-2"></i>Suporte técnico básico
                </li>
              </ul>
              <button class="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90">
                Assinar Agora
              </button>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 class="text-2xl font-bold mb-4">Plano C – Landing Page + Domínio + E-mail Profissional</h3>
              <p class="text-gray-600 mb-6">Experiência VIP completa</p>
              <div class="text-3xl font-bold mb-6">
                R$XX/ano
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center">
                  <i class="ri-check-line text-primary mr-2"></i>Tudo do Plano B
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-primary mr-2"></i>1 conta de e-mail profissional
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-primary mr-2"></i>Integração com WhatsApp Business e redes sociais
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-primary mr-2"></i>Opção de blog ou página extra
                </li>
              </ul>
              <button class="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90">
                Assinar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="unidades" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-16">Nossas Unidades</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <div class="aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src="https://public.readdy.ai/ai/img_res/01af48b7e60950513e77d196f49dca2c.jpg"
                  alt="Unidade Centro"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="text-2xl font-bold mb-4">Unidade Caroba</h3>
              <div class="space-y-3 text-gray-600">
                <p class="flex items-center">
                  <i class="ri-map-pin-line mr-2"></i>Rua Augusta, 1500 - Centro
                </p>
                <p class="flex items-center">
                  <i class="ri-time-line mr-2"></i>Seg - Sáb: 9h às 20h
                </p>
                <p class="flex items-center">
                  <i class="ri-phone-line mr-2"></i>(21) 99999-8888
                </p>
              </div>
              <div class="mt-6 h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.43221780459!2d-43.55244138828903!3d-22.897423537451598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be1829809639d%3A0xe532ad9e024fb9ba!2sBarbearia%20Irm%C3%A3os%20Dias!5e0!3m2!1spt-BR!2sbr!4v1742916028569!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="w-full h-full"
                >
                </iframe>
              </div>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <div class="aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src="https://public.readdy.ai/ai/img_res/3653a0745e3432b50bc7c8795f42e036.jpg"
                  alt="Unidade Shopping"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="text-2xl font-bold mb-4">Unidade Arthur Rios</h3>
              <div class="space-y-3 text-gray-600">
                <p class="flex items-center">
                  <i class="ri-map-pin-line mr-2"></i>Shopping Vila Nova - Piso
                  L3
                </p>
                <p class="flex items-center">
                  <i class="ri-time-line mr-2"></i>Seg - Dom: 10h às 22h
                </p>
                <p class="flex items-center">
                  <i class="ri-phone-line mr-2"></i>(21) 99999-7777
                </p>
              </div>
              <div class="mt-6 h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3071510705668!2d-43.55127118828894!3d-22.90203913761648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be199997de72d%3A0x699e059e6b9a2af4!2sBarbearia%20Irm%C3%A3os%20Dias%202!5e0!3m2!1spt-BR!2sbr!4v1742916391470!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="w-full h-full"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="bg-primary text-white py-12">
      <div class="container mx-auto px-6 text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <h3 class="font-montserrat text-2xl font-bold text-secondary mb-4">
              TimeLine
            </h3>
            <p class="text-soft">Soluções tecnológicas para seu negócio.</p>
          </div>
          <div class="flex flex-col items-center">
            <h4 class="text-lg font-bold mb-4">Contato</h4>
            <div class="space-y-2 text-gray-400">
              <p class="flex items-center justify-center">
                <i class="ri-whatsapp-line mr-2"></i>(21) 99999-8888
              </p>
              <p class="flex items-center justify-center">
                <i class="ri-mail-line mr-2"></i>contato@irmaosdias.com.br
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <h4 class="text-lg font-bold mb-4">Redes Sociais</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-primary"
                ><i class="ri-instagram-line text-2xl"></i
              ></a>
              <a href="#" class="text-gray-400 hover:text-primary"
                ><i class="ri-facebook-line text-2xl"></i
              ></a>
              <a href="#" class="text-gray-400 hover:text-primary"
                ><i class="ri-twitter-line text-2xl"></i
              ></a>
            </div>
          </div>
        </div>
        <div
          class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; 2025 Time Line. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
    <div class="fixed bottom-6 right-6 flex flex-col space-y-4">
      <a
        href="https://api.whatsapp.com/message/ETVBOD7B3JXMP1?autoload=1&app_absent=0"
        target="_blank"
        class="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600"
      >
        <i class="ri-whatsapp-line text-2xl"></i>
      </a>
    </div>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const nav = document.querySelector("nav");
        window.addEventListener("scroll", () => {
          if (window.scrollY > 50) {
            nav.classList.add("shadow-md");
          } else {
            nav.classList.remove("shadow-md");
          }
        });
      });
    </script>
  </body>
</html>`;

  // Retorna o HTML como resposta
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    }
  })
}