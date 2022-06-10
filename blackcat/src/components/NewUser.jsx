import axios from "axios";
import useInput from "../hooks/useInputs";

import { useNavigate } from "react-router";

const NewUser = () => {
  const navigate = useNavigate();

  const name = useInput();
  const surname = useInput();
  const email = useInput();
  const password = useInput();
  const adress = useInput();
  const phone = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/users/register", {
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
      adress: adress.value,
      phone: phone.value,
    });
    navigate("/login");
    alert(`Hola ${name.value}`);
  };
  return (
    <>
      <div class="column my-6"></div>
      <div className="layout m-5" color="color2">
        <h3 className="title is-3">Registrate por Aca! es muy facil </h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label my-3">Nombre/s</label>
            <input
              onChange={name.onChange}
              className="input my-3"
              type="text"
              placeholder="Ingrese su nombre"
            />

            <label className="label my-3">Apellido/s</label>
            <input
              onChange={surname.onChange}
              className="input my-3"
              type="text"
              placeholder="Ingrese su apellido"
            />
          </div>
          <label className="label my-3">Email</label>
          <input
            onChange={email.onChange}
            className="input my-3"
            type="email"
            placeholder="Ej: mar1@hotmail.com"
          />
          <label className="label my-3">Password</label>
          <input
            onChange={password.onChange}
            className="input my-3"
            type="password"
            placeholder="Nueva contraseña"
          />

          <label className="label my-3">Adress</label>
          <input
            onChange={adress.onChange}
            className="input my-3"
            type="text"
            placeholder="Ej: av. siempre viva 666"
          />
          <label className="label my-3">Phone number</label>
          <input
            onChange={phone.onChange}
            className="input my-3"
            type="text"
            placeholder="Ej: 1122446688"
          />

          <button className="button is-link my-5" type="submit">
            Enviar y registrarme
          </button>
          {console.log("ya se envio pero a la nada")}
        </form>
      </div>
    </>
  );
};

export default NewUser;
