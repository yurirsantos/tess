import { Form } from '../../Components/Forms/Forms'
import { Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'
import WhatsAppImg from '../../Assets/Whats.png'
import InstagramImg from '../../Assets/Instagram.png'
import GitHubImg from '../../Assets/GitHub.png'

export function Contacts() {
  const redesSociais = [
    {
      href: 'https://api.whatsapp.com/send?phone=5549999429941&text=Ol%C3%A1%20TESS!%20Gostria%20de%20agendar%20um%20conversa!s',
      img: WhatsAppImg
    },
    {
      href: 'https://www.instagram.com/tess.tec.br/',
      img: InstagramImg
    },
    {
      href: 'https://github.com/yurirsantos/cadastro-users',
      img: GitHubImg
    }
  ]
  return (
    <Main>
      <div className="p-5 mb-5">
        <Title title="Envie uam dúvida para nossa" enface="Equipe" />
        <Form />
      </div>

      <div className="bg-neutral-800 p-5">
        <Title title="Nossas" enface="Redes Sociais" />
        <div className="flex justify-center gap-6 mt-5 mb-5 p-2">
          {redesSociais.map(item => {
            return (
              <a href={item.href} target="_blanck">
                <div className="sm:w-36 m-auto p-8 bg-indigo-700 rounded-full hover:bg-indigo-500 duration-150 hover:scale-105 transition-all">
                  <img className="m-auto" src={item.img} alt="" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </Main>
  )
}
