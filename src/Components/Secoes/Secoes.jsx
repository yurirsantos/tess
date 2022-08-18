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
        href="https://api.whatsapp.com/send?phone=5549988801287&text=Ol%C3%A1!%20Tudo%20bem%3F"
        target="_blank"
      >
        <div className="fixed z-50 right-4 top-3/4 mt-32 bg-green-400 text-white rounded-full p-4 hover:scale-105 transition-all duration-150">
          <img className="w-14 m-auto" src={WhatsappImg} alt="" />
        </div>
      </a>
    </main>
  )
}
