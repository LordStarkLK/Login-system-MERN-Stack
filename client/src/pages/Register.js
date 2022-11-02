import { useForm } from "react-hook-form";
import "./../style/form-pages.css";
import axios from "axios";
import { useState } from "react";
import 'animate.css';

function Register() {

  const [usernameError,setUsernameError] = useState(false);

  const { register, handleSubmit, setError, formState :{errors} } = useForm({
    defaultValues: {
      username :'',
      password: '',
      email: ''
    }
  });
  const registerSubmit = async (data) => {
    const username = data.username;
    const password = data.password;
    const email = data.email;

    const inputData = {
      username,
      password,
      email,
    };

    await axios
      .post("http://localhost:5000/api/v1/settings/register", inputData)
      .then((response) => {
        if (response.data.error === "duplicate") {
          console.log(usernameError);
          setUsernameError(true);
          setTimeout(()=>setUsernameError(false), 5000);
        } else {
          console.log("Posting data", response);
          alert("Successfully Registered");
          refreshPage();
        }
      })
      .catch((err) => console.log(err));
  };

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <content>
        <div className="register-form">
          <h1>Register</h1>
          <form className="form" onSubmit={handleSubmit(registerSubmit)}>
            <input
              placeholder="Username"
              {...register("username", { required: true })}
            />
            <input
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            <input
              placeholder="email"
              {...register("email", { required: true })}
            />
            <button type="submit" className="btn" id="register-btn-form">
              Register
            </button>
          </form>
          {(usernameError)&&<label className="animate__animated animate__shakeX animate__faster" id="error">Username already exists</label>}
        </div>
      </content>
    </div>
  );
}

export default Register;
