import Swal from 'sweetalert2'

export function Form() {
  function envio() {
    Swal.fire('Sucesso!', 'E-mail enviado com sucesso!', 'success')
  }
  return (
    <>
      <div className="bg-neutral-700 p-3 sm:w-3/5 m-auto rounded-md mt-5 mb-5">
        <div className="col-span-6 sm:col-span-4 mt-5 mb-5 p-2">
          <label
            htmlFor="nome"
            className="block text-lg font-semibold text-white"
          >
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="mt-1 block w-full shadow-sm sm:text-sm rounded-full bg-neutral-600 border-none placeholder-neutral-400 p-3"
            placeholder="Informe seu nome..."
          />
        </div>

        <div className="col-span-6 sm:col-span-4 mt-5 mb-5 p-2">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-white"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="mt-1 block w-full shadow-sm sm:text-sm rounded-full bg-neutral-600 border-none placeholder-neutral-400 p-3"
            placeholder="Informe seu e-mail..."
          />
        </div>

        <div className="grid grid-cols-6 gap-6 mt-5 mb-5 p-2">
          <div className="col-span-6 sm:col-span-6 lg:col-span-1">
            <label
              htmlFor="ddd"
              className="block text-lg font-semibold text-white"
            >
              DDD
            </label>
            <input
              type="text"
              name="ddd"
              id="ddd"
              autoComplete="address-level2"
              className="mt-1 block w-full shadow-sm sm:text-sm rounded-full bg-neutral-600 border-none placeholder-neutral-400 p-3"
              placeholder="Informe seu DDD..."
              maxLength={3}
            />
          </div>

          <div className="col-span-6 sm:col-span-2 lg:col-span-5">
            <label
              htmlFor="numero"
              className="block text-lg font-semibold text-white"
            >
              Número
            </label>
            <input
              type="text"
              name="numero"
              id="numero"
              autoComplete="address-level1"
              className="mt-1 block w-full shadow-sm sm:text-sm rounded-full bg-neutral-600 border-none placeholder-neutral-400 p-3"
              placeholder="Informe seu número..."
            />
          </div>
        </div>

        <div
          className="w-28 sm:w-36 m-auto bg-indigo-600 rounded-full p-5 text-white text-center font-bold text-xl hover:bg-indigo-500 cursor-pointer transition-all duration-100 hover:scale-105"
          onClick={envio}
        >
          Enviar
        </div>
      </div>
    </>
  )
}
