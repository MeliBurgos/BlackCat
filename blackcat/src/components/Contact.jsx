import React from 'react'

const Contact = () => {
  return (
    <>
    <div class="column my-6"></div>
    <div className="layout m-5" color="color2">
        <form>
        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
            <input class="input" type="text" />
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
            <input class="input" type="email"/>
            </div>
        </div>
        <div class="field">
            <label class="label">Teléfono</label>
            <div class="control">
            <input class="input" type="text" />
            </div>
        </div>
        <div class="field">
            <label class="label">Mensaje</label>
            <div class="control">
            <textarea class="textarea" placeholder="Escriba aquí su mensaje o consulta"></textarea>
        </div>
        </div>
        <button class="button is-link is-focused">ENVIAR</button>
        </form>
    </div>
    </>
  )
}

export default Contact