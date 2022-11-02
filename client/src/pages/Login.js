import { useForm } from "react-hook-form";
import axios from "axios";
import "./../style/form-pages.css";
import { useState } from "react";
import 'animate.css';

function Register() {
  const [usernameError,setUsernameError] = useState(null);

  const { register, handleSubmit } = useForm();
  const loginSubmit = async (data) => {
    const username = data.username;
    const password = data.password;

    const inputData = {
      username,
      password
    };

    await axios
      .post("http://localhost:5000/api/v1/settings/login", inputData)
      .then((response) => {
        if(response.data.status === "error"){
          setUsernameError(response.data.message);
          setTimeout(()=>setUsernameError(null), 5000);
        }else{
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <content>
        <div className="login-form">
          <h1>Login</h1>
          <form className="form" onSubmit={handleSubmit(loginSubmit)}>
            <input placeholder="Username" {...register("username", { required: true })} />
            <input placeholder="Password" type="password" {...register("password", { required: true })} />
            <button type="submit" className="btn" id="register-btn-form">Login</button>
          </form>
          {(usernameError)&&<label className="animate__animated animate__shakeX animate__faster" id="error">{usernameError}</label>}
        </div>
        
      </content>
    </div>
  );
}

export default Register;
