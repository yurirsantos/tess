import { Form } from '../../Components/Forms/Forms'
import { Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'

export function Home() {
  const MVV = [
    {
      title: 'Missão',
      desc: 'Nossa missao como empresa é'
    },
    {
      title: 'Visão',
      desc: 'Nossa visao como empresa é'
    },
    {
      title: 'Valores',
      desc: 'Nossos valores como empresa é'
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

      <a href="https://www.seusite.com.br/whatsapp/" target="_blank">
        <div className="float-right bg-green-300 text-white rounded-full p-5 m-5 hover:scale-105 transition-all duration-150">
          Whats
        </div>
      </a>
    </Main>
  )
}
