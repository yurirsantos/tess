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
      <Div>
        <Title title="Por que escolher a" enface="TESS !?" />
        <div className="sm:grid sm:grid-rows-2 block grid-flow-col gap-4 p-5 lg:w-3/5 m-auto ">
          {motivos.map(item => {
            return (
              <div className="rounded-md p-5 border border-gray-50 border-opacity-10 sm:m-0 m-5">
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
      </Div>
    </Main>
  )
}
