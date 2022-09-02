import { Form } from '../../Components/Forms/Forms'
import { Title } from '../../Components/Texts/Texts'
import logoTess from '../../Assets/TESS-Sem-fundo.png'
import { Input, Textarea } from '../../Components/Forms/Inputs'
import { Div800, Div, Main } from '../../Components/Secoes/Secoes'
import { Button } from '../../Components/Buttons/Buttons'

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

  const motivos = [
    {
      title: 'Projeto exclusivo!',
      desc: 'Desenvolvido de acordo com o seu desejo e necessidade!'
    },
    {
      title: 'Inovação!',
      desc: 'Projetos inovadores para atingir o máximo do público de seu negócio!'
    },
    {
      title: 'Visibilidade na Internet!',
      desc: 'Proporcionando sempre a melhor visibilidade na internet!'
    },
    {
      title: 'Tecnologias Atuais!',
      desc: 'Desenvolvidos com as melhores tecnolgoias atuais do mercado da TI!'
    },
    {
      title: 'Qualidade!',
      desc: 'Desenvolvidos com a melhor qualidade possível!'
    },
    {
      title: 'Agilidade!',
      desc: 'Sabemos o quanto é importante a entrega do seu projeto!'
    }
  ]

  const tecnologias = [
    {
      src: 'https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png',
      alt: ''
    },
    {
      src: 'https://pic.vsixhub.com/01/c9/4db62a7c-7d70-419c-96d2-6c3a4dc77ea5-logo.png',
      alt: ''
    },
    {
      src: 'https://avatars.githubusercontent.com/u/65625612?s=280&v=4',
      alt: ''
    },
    {
      src: 'https://avatars.githubusercontent.com/u/35137722?s=200&v=4',
      alt: ''
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
              <div className="bg-neutral-700 rounded-md p-5 hover:bg-neutral-900 hover:scale-110 duration-150">
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
      <Div>
        <Title title="Sobre a" enface="TESS" />
        <p className="text-white text-center text-xl m-5">
          Somos um empresa dedicada no desenvolvimento de aplicações Web.
        </p>
        <div className="sm:grid sm:grid-rows-2 block grid-flow-col gap-4 p-5 lg:w-3/5 m-auto ">
          {motivos.map(item => {
            return (
              <div className="rounded-md p-5 border border-gray-50 border-opacity-10 sm:m-0 m-5 hover:scale-110 duration-150">
                <h1 className="text-white text-center text-xl font-bold m-3">
                  {item.title}
                </h1>
                <p className="text-white text-center text-lg font-extralight">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
        <Button
          id="buttonFalarComEspecialista"
          value="Falar com um especialista"
          type="button"
          href="https://api.whatsapp.com/send?phone=5549999429941&text=Ol%C3%A1%20TESS!%20Gostria%20de%20agendar%20um%20conversa!s"
          target="_blanck"
        />
      </Div>
      <Div800>
        <Title title="Do que sua empresa" enface="precisa?" />
        <Form>
          <Input
            id="user_name"
            name="user_name"
            type="text"
            htmlFor="user_name"
            placeholder="Informe seu nome..."
            label="Nome *"
          />

          <Input
            id="user_email"
            name="user_email"
            type="text"
            htmlFor="user_email"
            placeholder="Informe seu e-mail..."
            label="E-mail *"
          />

          <Input
            id="user_numero"
            name="user_numero"
            type="number"
            htmlFor="user_numero"
            placeholder="Informe seu número..."
            label="Número *"
          />

          <Textarea
            id="mensagem"
            name="mensagem"
            htmlFor="mensagem"
            label="Mensagem *"
          />

          <div className="w-28 m-auto">
            <Button id="buttonEnviar" value="Enviar" type="submit" />
          </div>
        </Form>
      </Div800>

      <Div>
        <Title title="Tecnologias que" enface="usamos" />
        <div className="grid grid-rows-4 sm:grid-rows-1 grid-flow-col gap-4 p-5 lg:w-3/5 m-auto">
          {tecnologias.map(item => {
            return (
              <div>
                <img
                  className="w-40 h-40 m-auto sm:w-14 sm:h-14 hover:animate-bounce duration-150"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            )
          })}
        </div>
      </Div>
    </Main>
  )
}
