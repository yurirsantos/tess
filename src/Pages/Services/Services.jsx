import { Div800, Div, Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'
import imgDesenvolvimentoWeb from '../../Assets/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import imgBlog from '../../Assets/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg'
import imgPortifolio from '../../Assets/scott-graham-5fNmWej4tAA-unsplash.jpg'
import imgLadingPage from '../../Assets/sigmund-4UGmm3WRUoQ-unsplash.jpg'
import { Form } from '../../Components/Forms/Forms'
import { Input, Textarea } from '../../Components/Forms/Inputs'

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
      <Div800>
        <Title title="Ficou com alguma" enface="Dúvida?" />
        <p className="text-white font-light mt-5 text-center">
          Entre em contato com nossa equipe agora mesmo!
        </p>
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
            type="email"
            htmlFor="user_email"
            placeholder="Informe seu e-mail..."
            label="E-mail *"
          />

          <Textarea
            id="mensagem"
            name="mensagem"
            type="text"
            htmlFor="mensagem"
            label="Mensagem *"
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
