import { Form } from '../../Components/Forms/Forms'
import { Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'

export function Home() {
  const MVV = [
    {
      title: 'Missao',
      desc: 'Nossa missao como empresa é'
    },
    {
      title: 'Visao',
      desc: 'Nossa visao como empresa é'
    },
    {
      title: 'Valores',
      desc: 'Nossos valores como empresa é'
    }
  ]

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
      <div className="bg-neutral-800 p-5">
        <div className="w-4/5 m-auto p-5">
          <img
            className="w-4/5 m-auto"
            src="https://dsm01pap007files.storage.live.com/y4mVgzMjlJ0RMYLlnjnUA5kH-JldXNclUJCUeHgCnkfDr3jWNHLVWYSMSb3L_t6YhIWTp4cOeM_En0cSo4jlLqpW269TM8snbCvWCob-mtY7pkarmfTIy3y9MsTSobJeZuUg48dcdaJUichz8JSnFiyYeqIfyIiPcodO4Yzy6cOA2GjjY-Y0pGQO3lI1WKitNDrM6J2XH44X_8ILoyL3mVO-KzjwwcvfxJhlMkQVAT5m3k?encodeFailures=1&width=920&height=719"
            alt=""
          />
        </div>
        <Title title="Acelere seu crescimento com nosso" enface="code" />
        <div className="grid grid-rows-1 grid-flow-col gap-4 p-5">
          {MVV.map(item => {
            return (
              <div className="bg-neutral-700 rounded-md p-5 hover:bg-neutral-900">
                <h1 className="text-white text-center text-xl font-bold m-3">
                  {item.title}
                </h1>
                <p className="text-white text-center text-base font-thin">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="p-5">
        <Title title="Por que contratar a" enface="TESS Developer" />
      </div>
      <div className="bg-neutral-800 p-5">
        <Title
          title="Preencha o formulário e recebe um contato de um de nossos"
          enface="especialistas!"
        />
        <Form />
      </div>
      <div className="m-5">
        <Title title="Nossas" enface="Redes Sociais" />
        <div className="grid grid-cols-6 gap-6 mt-5 mb-5 p-2 justify-center bg-amber-400">
          {redesSociais.map(item => {
            return (
              <a href={item.href}>
                <div className="col-span-6 sm:col-span-6 lg:col-span-1 bg-indigo-600 p-5 text-white rounded-full hover:bg-indigo-500">
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
