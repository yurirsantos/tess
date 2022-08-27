import { Navbar } from '../Navbar/Navbar'
import WhatsappImg from '../../Assets/Whats.png'

export function Main(props) {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      {props.children}
      <a
        href="https://api.whatsapp.com/send?phone=5549999429941&text=Ol%C3%A1%20TESS!%20Gostria%20de%20agendar%20um%20conversa!"
        target="_blank"
      >
        <div className="fixed z-50 right-5 top-3/4 mt-20 sm:mt-40 bg-green-400 text-white rounded-full hover:scale-105 transition-all duration-150">
          <img className="w-14 m-auto" src={WhatsappImg} alt="" />
        </div>
      </a>
    </main>
  )
}
