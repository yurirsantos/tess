import { Form } from '../../Components/Forms/Forms'
import { Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'

export function Contacts() {
  const redesSociais = [
    {
      title: 'WhatsApp',
      href: '',
      img: ''
    },
    {
      title: 'Instagram',
      href: '',
      img: ''
    },
    {
      title: 'Git Hub',
      href: '',
      img: ''
    }
  ]
  return (
    <Main>
      <div className="p-5">
        <Title title="Envie uam dúvida para nossa" enface="Equipe" />
        <Form />
      </div>

      <div className="bg-neutral-800 p-5">
        <Title title="Nossas" enface="Redes Sociais" />
        <div className="flex justify-center gap-6 mt-5 mb-5 p-2">
          {redesSociais.map(item => {
            return (
              <a href={item.href}>
                <div className="bg-indigo-600 p-5 text-white rounded-full hover:bg-indigo-500">
                  {item.title}
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </Main>
  )
}
