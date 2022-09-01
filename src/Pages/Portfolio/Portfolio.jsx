import { Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'

export function Portfolio() {
  const sites = [
    {
      title: 'Landing Page - Viagens',
      src: 'https://user-images.githubusercontent.com/91801482/174334373-1475ddc4-4ea7-4f9f-a3d1-f995ea84bae8.png',
      desc: 'Página estática para captação de novos clientes para empresa de viagens!'
    },
    {
      title: 'Landing Page - Hotel',
      desc: 'Página estática para captação de novos clientes para empresa de Hoteis!'
    }
  ]
  return (
    <Main>
      <div className="p-5">
        <Title title="Portifólio" enface="TESS" />
        <div className="mt-5">
          <Title title="Projetos disponíveis para" enface="venda!" />
          <div className="grid grid-rows-3 sm:grid-rows-1 grid-flow-col gap-4 p-5 lg:w-3/5 m-auto ">
            {sites.map(item => {
              return (
                <div className="bg-neutral-700 rounded-md p-5 hover:bg-neutral-800">
                  <h1 className="text-white text-center text-xl font-normal m-3">
                    {item.title}
                  </h1>
                  <img src={item.src} alt="" />
                  <p className="text-white text-center text-lg font-extralight">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Main>
  )
}
