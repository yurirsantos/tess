import Swal from 'sweetalert2'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export function Form() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jgxzk9j', //ID Service
        'template_m7pkwi6', //ID Template
        form.current,
        '0jh92L19mCNamvZpQ' //Key Public
      )
      .then(
        result => {
          Swal.fire(
            'E-mail Enviado!',
            'Seu e-mail foi enviado com sucesso para Fronteira Tec',
            'success'
          )

          const input_user_name = (document.getElementById('user_name').value =
            '')
          const input_user_email = (document.getElementById(
            'user_email'
          ).value = '')
          const input_message = (document.getElementById('message').value = '')
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'E-mail não enviado, entre em contato com nossa central de atendimento atráves do telefone (49) 98880-1287'
          })
        }
      )
  }
  return (
    <div>
      <div className="bg-neutral-700 p-3 sm:w-3/5 m-auto rounded-md mt-5 mb-5">
        <form ref={form} onSubmit={sendEmail}>
          <div className="col-span-6 sm:col-span-4 mt-5 mb-5 p-2">
            <label
              htmlFor="user_nome"
              className="block text-lg font-semibold text-white"
            >
              Nome
            </label>
            <input
              type="text"
              name="user_nome"
              id="user_nome"
              className="mt-1 block w-full shadow-sm sm:text-sm rounded-full bg-neutral-600 border-none placeholder-neutral-400 p-3 text-white"
              placeholder="Informe seu nome..."
            />
          </div>

          <div className="col-span-6 sm:col-span-4 mt-5 mb-5 p-2">
            <label
              htmlFor="user_email"
              className="block text-lg font-semibold text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="mt-1 block w-full shadow-sm sm:text-sm rounded-full bg-neutral-600 border-none placeholder-neutral-400 p-3 text-white"
              placeholder="Informe seu e-mail..."
            />
          </div>

          <div className="m-5">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="w-40 m-auto">
            <input
              className="w-28 sm:w-36 m-auto bg-indigo-600 rounded-full p-5 text-white text-center font-bold text-xl hover:bg-indigo-500 cursor-pointer transition-all duration-100 hover:scale-105"
              type="submit"
              value="Enviar"
              id="buttonEnviar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
