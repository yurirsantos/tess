import Swal from 'sweetalert2'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export function Form(props) {
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
          {props.children}
        </form>
      </div>
    </div>
  )
}
