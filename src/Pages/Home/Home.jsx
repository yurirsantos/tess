import { Form } from '../../Components/Forms/Forms'
import { Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'
import logoTess from '../../Assets/TESS-Sem-fundo.png'

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
          <img className="sm:w-1/3 m-auto" src={logoTess} alt="" />
        </div>
        <Title title="Acelere seu crescimento com nosso" enface="code" />
        <div className="grid grid-rows-1 grid-flow-col gap-4 p-5 sm:w-3/5 m-auto">
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
    </Main>
  )
}
