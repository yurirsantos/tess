import { Form } from '../../Components/Forms/Forms'
import { Main, Div, Div800 } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'
import WhatsAppImg from '/Whats.png'
import InstagramImg from '/Instagram.png'
import GitHubImg from '/GitHub.png'
import { Input, Textarea } from '../../Components/Forms/Inputs'
import { Button } from '../../Components/Buttons/Buttons'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'

export function Contacts() {
  const redesSociais = [
    {
      href: 'https://api.whatsapp.com/send?phone=5549999429941&text=Ol%C3%A1%20TESS!%20Gostria%20de%20agendar%20um%20conversa!s',
      img: WhatsAppImg
    },
    {
      href: 'https://www.instagram.com/tess.tec.br/',
      img: InstagramImg
    },
    {
      href: 'https://github.com/yurirsantos/',
      img: GitHubImg
    }
  ]
  return (
    <Main>
      <Div>
        <AnimatedOnScroll animationIn="zoomInDown">
          <Title title="Entre em contato com nossa" enface="Equipe" />
        </AnimatedOnScroll>

        <AnimatedOnScroll animationIn="zoomInUp">
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
            <AnimatedOnScroll animationIn="tada">
              <div className="w-28 m-auto">
                <Button id="buttonEnviar" value="Enviar" type="submit" />
              </div>
            </AnimatedOnScroll>
          </Form>
        </AnimatedOnScroll>
      </Div>

      <Div800>
        <AnimatedOnScroll animationIn="zoomInDown">
          <Title title="Nossas" enface="Redes Sociais" />
        </AnimatedOnScroll>

        <div className="flex justify-center gap-6 mt-5 mb-5 p-2">
          {redesSociais.map(item => {
            return (
              <AnimatedOnScroll animationIn="rollIn">
                <a href={item.href} target="_blanck">
                  <div className="sm:w-36 m-auto p-8 bg-indigo-700 rounded-full hover:bg-indigo-500 duration-150 hover:scale-105 transition-all">
                    <img className="m-auto" src={item.img} alt="" />
                  </div>
                </a>
              </AnimatedOnScroll>
            )
          })}
        </div>
      </Div800>
    </Main>
  )
}
