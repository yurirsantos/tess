import { Form } from '../../Components/Forms/Forms'
import { Title } from '../../Components/Texts/Texts'
import logoTess from '../../Assets/TESS-Sem-fundo.png'
import { Input } from '../../Components/Forms/Inputs'
import { Div800, Div, Main } from '../../Components/Secoes/Secoes'

export function Home() {
  const MVV = [
    {
      title: 'Missão',
      desc: 'Desenvolver os melhores softwares do mercado e assim tornando os sonhos dos empresários realidade!'
    },
    {
      title: 'Visão',
      desc: 'Seremos referência no mercado em tecnologias web e excelência no desenvolvimento de pessoas!'
    },
    {
      title: 'Valores',
      desc: 'Ética, Qualidade, Inovação e Segurança'
    }
  ]

  return (
    <Main>
      <Div800>
        <div className="w-4/5 m-auto p-5">
          <img className="sm:w-1/3 m-auto" src={logoTess} alt="" />
        </div>
        <Title title="Desenvolvendo sonhos em" enface="realidade!" />
        <div className="grid grid-rows-3 sm:grid-rows-1 grid-flow-col gap-4 p-5 lg:w-3/5 m-auto ">
          {MVV.map(item => {
            return (
              <div className="bg-neutral-700 rounded-md p-5 hover:bg-neutral-900">
                <h1 className="text-white text-center text-xl font-normal m-3">
                  {item.title}
                </h1>
                <p className="text-white text-center text-lg font-extralight">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </Div800>
      <Div className="p-5">
        <Title title="Por que contratar a" enface="TESS" />
      </Div>
      <Div800 className="bg-neutral-800 p-5">
        <Title
          title="Preencha o formulário e recebe um contato de um de nossos"
          enface="especialistas!"
        />
        <Form>
          <Input
            id="user_name"
            name="user_name"
            type="text"
            htmlFor="user_name"
            placeholder="Informe seu nome..."
            label="Nome"
          />

          <Input
            id="user_email"
            name="user_email"
            type="email"
            htmlFor="user_email"
            placeholder="Informe seu e-mail..."
            label="E-mail"
          />

          <div className="w-40 m-auto">
            <input
              className="w-28 sm:w-36 m-auto bg-indigo-600 rounded-full p-5 text-white text-center font-bold text-xl hover:bg-indigo-500 cursor-pointer transition-all duration-100 hover:scale-105"
              type="submit"
              value="Enviar"
              id="buttonEnviar"
            />
          </div>
        </Form>
      </Div800>
    </Main>
  )
}
