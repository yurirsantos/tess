import { Div800, Div, Main } from '../../Components/Secoes/Secoes'
import { Title } from '../../Components/Texts/Texts'
import logoTess from '../../Assets/TESS.png'

export function AboutUs() {
  return (
    <Main>
      <div className="m-5">
        <Title title="Sobre" enface="Nós" />
      </div>
      <Div800 className="bg-neutral-800 p-5">
        <Title title="Desenvolvimento" enface="Web" />
        <div className="m-5 sm:flex">
          <p className="text-white font-light w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum
            cumque aperiam eos perferendis nulla ipsum fugit! Voluptas delectus
            sed, deleniti, nemo omnis consequatur, sint pariatur quod dicta
            nostrum inventore?
          </p>
          <div className="w-full m-auto p-5">
            <img className="sm:w-56 m-auto" src={logoTess} alt="" />
          </div>
        </div>
      </Div800>
      <Div>
        <Title title="Portifólio" enface="Web" />
        <div className="m-5 sm:flex">
          <div className="w-full m-auto p-5">
            <img className="sm:w-56 m-auto" src={logoTess} alt="" />
          </div>
          <p className="text-white font-light w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum
            cumque aperiam eos perferendis nulla ipsum fugit! Voluptas delectus
            sed, deleniti, nemo omnis consequatur, sint pariatur quod dicta
            nostrum inventore?
          </p>
        </div>
      </Div>
    </Main>
  )
}
