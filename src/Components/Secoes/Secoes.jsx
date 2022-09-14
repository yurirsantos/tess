import { Navbar } from '../Navbar/Navbar'
import WhatsappImg from '/Whats.png'
import logoTESS from '../../Assets/TESS-Sem-fundo.png'
import { Link } from 'react-router-dom'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'

export function Main(props) {
  const navigation = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Serviços',
      href: '/Services'
    },
    {
      title: 'Contatos',
      href: '/Contacts'
      // },
      // {
      //   title: 'Portifólio',
      //   href: '/Portfolio'
      //
    }
  ]
  return (
    <html className="scroll-smooth">
      <header>
        <Navbar />
      </header>
      <main>
        {props.children}

        <a
          href="https://api.whatsapp.com/send?phone=5549999429941&text=Ol%C3%A1%20TESS!%20Gostria%20de%20agendar%20um%20conversa!"
          target="_blank"
        >
          <div className="fixed z-50 right-5 top-3/4 mt-20 sm:mt-40 bg-green-400 text-white rounded-full hover:scale-105 transition-all duration-75 hover:animate-pulse">
            <img className="w-14 m-auto" src={WhatsappImg} alt="" />
          </div>
        </a>
      </main>

      <footer className="p-4 bg-neutral-900 shadow md:px-6 md:py-8 border-t border-gray-500 mt-5">
        <div className="sm:flex sm:items-center sm:justify-between">
          <AnimatedOnScroll animationIn="rollIn">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
              <img src={logoTESS} className="mr-3 h-12" alt="Flowbite Logo" />
            </a>
          </AnimatedOnScroll>
          <div className="grid grid-rows-2 sm:grid-rows-1 grid-flow-col lg:w-3/5 m-auto sm:justify-between justify-center">
            <div>
              <AnimatedOnScroll animationIn="zoomInUp">
                <div>
                  <span className="font-bold text-white text-sm">E-mail:</span>
                  <span className="text-white hover:underline ml-3 text-sm">
                    contato@tess.tec.br
                  </span>
                </div>
              </AnimatedOnScroll>

              <AnimatedOnScroll animationIn="zoomInUp">
                <div>
                  <span className="font-bold text-white text-sm">
                    WhatsApp:
                  </span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5549999429941&text=Ol%C3%A1%20TESS!%20Gostria%20de%20agendar%20um%20conversa!s"
                    className="text-white hover:underline ml-3 text-sm"
                    target="_blanck"
                  >
                    (49) 99942-9941
                  </a>
                </div>
              </AnimatedOnScroll>
            </div>
            <div>
              <ul className="flex flex-wrap items-center mb-6 text-md text-white sm:mb-0">
                {navigation.map(item => {
                  return (
                    <AnimatedOnScroll animationIn="rollIn">
                      <Link key={item.title} to={item.href}>
                        <span className="mr-4 hover:underline md:mr-6 ">
                          {item.title}
                        </span>
                      </Link>
                    </AnimatedOnScroll>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <AnimatedOnScroll animationIn="fadeInUp">
          <div className="block text-sm text-gray-500 text-center hover:underline mt-5">
            © 2022 <span>TESS™</span>. Desenvolvendo sonhos em realidade!
          </div>
        </AnimatedOnScroll>
      </footer>
    </html>
  )
}

export function Div800(props) {
  return (
    <html className="bg-neutral-800 pb-5 pt-5 scroll-smooth">
      {props.children}
    </html>
  )
}

export function Div(props) {
  return <html className="pb-5 pt-5 scroll-smooth">{props.children}</html>
}
