import { Div800, Div, Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'
import imgDesenvolvimentoWeb from '../../Assets/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import imgBlog from '../../Assets/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg'
import imgPortifolio from '../../Assets/scott-graham-5fNmWej4tAA-unsplash.jpg'
import imgLadingPage from '../../Assets/sigmund-4UGmm3WRUoQ-unsplash.jpg'
import { Form } from '../../Components/Forms/Forms'
import { Input, Textarea } from '../../Components/Forms/Inputs'
import { Button } from '../../Components/Buttons/Buttons'

export function Services() {
  return (
    <Main>
      <div className="m-5">
        <Title title="Cartela de" enface="serviços" />
      </div>
      <Div800>
        <Title title="Desenvolvimento" enface="Web" />
        <div className="w-[1200px] m-auto sm:flex sm:justify-between block">
          <div className="w-[450px]">
            <p className="text-white font-light text-center sm:w-[500px] m-5 text-xl">
              Área da tecnologia voltada à construção de sites, aplicativos,
              softwares, bancos de dados e quaisquer outras ferramentas que, de
              certa forma, constroem a internet como conhecemos hoje.
            </p>
          </div>
          <div className="w-[450px]">
            <img
              className="w-[300px] sm:w-96 m-auto rounded-md hover:scale-110 duration-150"
              src={imgDesenvolvimentoWeb}
              alt=""
            />
          </div>
        </div>
      </Div800>
      <Div>
        <Title title="Landing" enface="page" />
        <div className="w-[1200px] m-auto sm:flex sm:justify-between block">
          <div className="w-[450px]">
            <img
              className="w-[300px] sm:w-96 m-auto mt-5 rounded-md hover:scale-110 duration-150"
              src={imgLadingPage}
              alt=""
            />
          </div>
          <div className="w-[450px]">
            <p className="text-white font-light text-center sm:w-[500px] m-5 text-xl">
              No marketing digital, uma lading page, em português 'página de
              destino', ou também conhecida como 'página de captura de
              clientes', é uma página única da web que aparece em resposta ao
              clique em um resultado de busca de um mecanismo de pesquisa
              otmizado.
            </p>
          </div>
        </div>
      </Div>
      <Div800>
        <Title title="Portifólio" enface="Web" />
        <div className="w-[1200px] m-auto sm:flex sm:justify-between block">
          <div className="w-[450px]">
            <p className="text-white font-light text-center sm:w-[500px] m-5 text-xl">
              Portifólio é uma compilação de materiais ou trabalhos
              desenvolvidos por um profissional (ouempresa) que demosntra
              habilidades, competências, qualificações e experiências. Todas
              reunidas em um único local na web para acesso do publico geral.
            </p>
          </div>
          <div className="w-[450px]">
            <img
              className="w-[300px] sm:w-96 m-auto rounded-md hover:scale-110 duration-150"
              src={imgPortifolio}
              alt=""
            />
          </div>
        </div>
      </Div800>
      <Div>
        <Title title="Blog" enface="Web" />
        <div className="w-[1200px] m-auto sm:flex sm:justify-between block">
          <div className="w-[450px]">
            <img
              className="w-[300px] sm:w-96 m-auto mt-5 rounded-md hover:scale-110 duration-150"
              src={imgBlog}
              alt=""
            />
          </div>
          <div className="w-[450px]">
            <p className="text-white font-light text-center sm:w-[500px] m-5 text-xl">
              O blog é um site pessoal ou profissional que popularizou (e muito)
              a produção de conteúdo na internet, Hoje, é o principal eio de
              comunicação de diversos portais.
            </p>
          </div>
        </div>
      </Div>
      <Div800>
        <Title title="Fale com a" enface="TESS" />
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
          <div className="w-28 m-auto">
            <Button id="buttonEnviar" value="Enviar" type="submit" />
          </div>{' '}
        </Form>
      </Div800>
    </Main>
  )
}
