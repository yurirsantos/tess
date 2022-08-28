import { Div800, Div, Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'
import imgDesenvolvimentoWeb from '../../Assets/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import imgBlog from '../../Assets/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg'
import imgPortifolio from '../../Assets/scott-graham-5fNmWej4tAA-unsplash.jpg'
import imgLadingPage from '../../Assets/sigmund-4UGmm3WRUoQ-unsplash.jpg'

export function Services() {
  return (
    <Main>
      <div className="m-5">
        <Title title="Cartela de" enface="serviços" />
      </div>
      <Div800 className="bg-neutral-800 p-5">
        <Title title="Desenvolvimento" enface="Web" />
        <div className="m-5 sm:flex">
          <p className="text-white font-light w-5/6">
            Área da tecnologia voltada à construção de sites, aplicativos,
            softwares, bancos de dados e quaisquer outras ferramentas que, de
            certa forma, constroem a internet como conhecemos hoje.
          </p>
          <div className="w-full m-auto p-5">
            <img
              className="sm:w-56 m-auto"
              src={imgDesenvolvimentoWeb}
              alt=""
            />
          </div>
        </div>
      </Div800>
      <Div>
        <Title title="Landing" enface="page" />
        <div className="m-5 sm:flex">
          <div className="w-full m-auto p-5">
            <img className="sm:w-56 m-auto" src={imgLadingPage} alt="" />
          </div>
          <p className="text-white font-light w-5/6">
            No marketing digital, uma lading page, em português 'página de
            destino', ou também conhecida como 'página de captura de clientes',
            é uma página única da web que aparece em resposta ao clique em um
            resultado de busca de um mecanismo de pesquisa otmizado.
          </p>
        </div>
      </Div>
      <Div800 className="bg-neutral-800 p-5">
        <Title title="Portifólio" enface="Web" />
        <div className="m-5 sm:flex">
          <p className="text-white font-light w-5/6">
            Portifólio é uma compilação de materiais ou trabalhos desenvolvidos
            por um profissional (ouempresa) que demosntra habilidades,
            competências, qualificações e experiências. Todas reunidas em um
            único local na web para acesso do publico geral.
          </p>
          <div className="w-full m-auto p-5">
            <img className="sm:w-56 m-auto" src={imgPortifolio} alt="" />
          </div>
        </div>
      </Div800>
      <Div>
        <Title title="Blog" enface="Web" />
        <div className="m-5 sm:flex">
          <div className="w-full m-auto p-5">
            <img className="sm:w-56 m-auto" src={imgBlog} alt="" />
          </div>
          <p className="text-white font-light w-5/6">
            O blog é um site pessoal ou profissional que popularizou (e muito) a
            produção de conteúdo na internet, Hoje, é o principal eio de
            comunicação de diversos portais.
          </p>
        </div>
      </Div>
    </Main>
  )
}
