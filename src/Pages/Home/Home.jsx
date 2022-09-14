import { useState, useEffect } from 'react'
import { Form } from '../../Components/Forms/Forms'
import { Title } from '../../Components/Texts/Texts'
import logoTess from '../../Assets/TESS-Sem-fundo.png'
import { Input, Textarea } from '../../Components/Forms/Inputs'
import { Div800, Div, Main } from '../../Components/Secoes/Secoes'
import { Button } from '../../Components/Buttons/Buttons'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'

export function Home() {
  const tecnologias = [
    {
      src: '/LogoReact.png',
      alt: ''
    },
    {
      src: '/LogoTailwind.png',
      alt: ''
    },
    {
      src: '/LogoViteJs.png',
      alt: ''
    },
    {
      src: '/LogoSweetalert2.png',
      alt: ''
    }
  ]

  return (
    <Main>
      <Div800>
        <AnimatedOnScroll animationIn="zoomInDown">
          <div className="w-4/5 m-auto p-5">
            <img className="sm:w-1/3 m-auto" src={logoTess} alt="" />
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="flipInX ">
          <Title title="Desenvolvendo sonhos em" enface="realidade!" />
        </AnimatedOnScroll>
        <div className="grid grid-rows-3 sm:grid-rows-1 grid-flow-col gap-4 p-5 lg:w-3/5 m-auto">
          <AnimatedOnScroll
            animationIn="zoomInLeft"
            className="bg-neutral-700 rounded-md p-5 hover:bg-neutral-900 hover:scale-110 duration-150"
          >
            <div>
              <h1 className="text-white text-center text-xl font-normal m-3">
                Missão
              </h1>
              <p className="text-white text-center text-lg font-extralight">
                Desenvolver os melhores softwares do mercado e assim tornando os
                sonhos dos empresários realidade!
              </p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll
            animationIn="zoomInUp"
            className="bg-neutral-700 rounded-md p-5 hover:bg-neutral-900 hover:scale-110 duration-150"
          >
            <div>
              <h1 className="text-white text-center text-xl font-normal m-3">
                Visão
              </h1>
              <p className="text-white text-center text-lg font-extralight">
                Seremos referência no mercado em tecnologias web e excelência no
                desenvolvimento de pessoas!
              </p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll
            animationIn="zoomInRight"
            className="bg-neutral-700 rounded-md p-5 hover:bg-neutral-900 hover:scale-110 duration-150"
          >
            <div>
              <h1 className="text-white text-center text-xl font-normal m-3">
                Valores
              </h1>
              <p className="text-white text-center text-lg font-extralight">
                Ética, Qualidade, Inovação e Segurança
              </p>
            </div>
          </AnimatedOnScroll>
        </div>
      </Div800>

      <Div>
        <AnimatedOnScroll animationIn="zoomInUp">
          <Title title="Sobre a" enface="TESS" />
        </AnimatedOnScroll>

        <AnimatedOnScroll animationIn="flipInX">
          <p className="text-white text-center text-xl m-5">
            Somos um empresa dedicada no desenvolvimento de aplicações Web.
          </p>
        </AnimatedOnScroll>

        <div className="sm:grid sm:grid-rows-2 block grid-flow-col gap-4 p-5 lg:w-3/5 m-auto ">
          <AnimatedOnScroll
            animationIn="zoomInLeft"
            className="rounded-md p-5 border border-gray-50 border-opacity-10 sm:m-0 m-5 hover:scale-110 duration-150"
          >
            <h1 className="text-white text-center text-xl font-bold m-3">
              Projeto exclusivo!
            </h1>
            <p className="text-white text-center text-lg font-extralight">
              Desenvolvido de acordo com o seu desejo e necessidade!
            </p>
          </AnimatedOnScroll>

          <AnimatedOnScroll
            animationIn="zoomInUp"
            className="rounded-md p-5 border border-gray-50 border-opacity-10 sm:m-0 m-5 hover:scale-110 duration-150"
          >
            <h1 className="text-white text-center text-xl font-bold m-3">
              Inovação!
            </h1>
            <p className="text-white text-center text-lg font-extralight">
              Projetos inovadores para atingir o máximo do público de seu
              negócio!
            </p>
          </AnimatedOnScroll>

          <AnimatedOnScroll
            animationIn="zoomInRight"
            className="rounded-md p-5 border border-gray-50 border-opacity-10 sm:m-0 m-5 hover:scale-110 duration-150"
          >
            <h1 className="text-white text-center text-xl font-bold m-3">
              Visibilidade na Internet!
            </h1>
            <p className="text-white text-center text-lg font-extralight">
              Proporcionando sempre a melhor visibilidade na internet!
            </p>
          </AnimatedOnScroll>

          <AnimatedOnScroll
            animationIn="zoomInLeft"
            className="rounded-md p-5 border border-gray-50 border-opacity-10 sm:m-0 m-5 hover:scale-110 duration-150"
          >
            <h1 className="text-white text-center text-xl font-bold m-3">
              Tecnologias Atuais!
            </h1>
            <p className="text-white text-center text-lg font-extralight">
              Desenvolvidos com as melhores tecnolgoias atuais do mercado da TI!
            </p>
          </AnimatedOnScroll>

          <AnimatedOnScroll
            animationIn="zoomInUp"
            className="rounded-md p-5 border border-gray-50 border-opacity-10 sm:m-0 m-5 hover:scale-110 duration-150"
          >
            <h1 className="text-white text-center text-xl font-bold m-3">
              Qualidade!
            </h1>
            <p className="text-white text-center text-lg font-extralight">
              Desenvolvidos com a melhor qualidade possível!
            </p>
          </AnimatedOnScroll>

          <AnimatedOnScroll
            animationIn="zoomInRight"
            className="rounded-md p-5 border border-gray-50 border-opacity-10 sm:m-0 m-5 hover:scale-110 duration-150"
          >
            <h1 className="text-white text-center text-xl font-bold m-3">
              Agilidade!
            </h1>
            <p className="text-white text-center text-lg font-extralight">
              Sabemos o quanto é importante a entrega do seu projeto!
            </p>
          </AnimatedOnScroll>
        </div>
        <AnimatedOnScroll animationIn="tada">
          <Button
            id="buttonFalarComEspecialista"
            value="Falar com um especialista"
            type="button"
            href="https://api.whatsapp.com/send?phone=5549999429941&text=Ol%C3%A1%20TESS!%20Gostria%20de%20agendar%20um%20conversa!s"
            target="_blanck"
          />
        </AnimatedOnScroll>
      </Div>

      <Div800>
        <AnimatedOnScroll animationIn="zoomInUp">
          <Title title="Do que sua empresa" enface="precisa?" />
        </AnimatedOnScroll>

        <AnimatedOnScroll animationIn="bounceIn">
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
      </Div800>

      <Div>
        <AnimatedOnScroll animationIn="zoomInUp">
          <Title title="Tecnologias que" enface="usamos" />
        </AnimatedOnScroll>
        <div className="grid grid-rows-4 sm:grid-rows-1 grid-flow-col gap-4 p-5 lg:w-3/5 m-auto">
          {tecnologias.map(item => {
            return (
              <AnimatedOnScroll animationIn="rollIn">
                <div className="hover:animate-bounce duration-150">
                  <img
                    className="w-40 h-40 m-auto sm:w-14 sm:h-14"
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              </AnimatedOnScroll>
            )
          })}
        </div>
      </Div>
    </Main>
  )
}
