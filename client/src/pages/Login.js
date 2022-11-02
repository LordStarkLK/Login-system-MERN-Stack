import { useForm } from "react-hook-form";
import "./../style/form-pages.css";

function Register() {
  const { register, handleSubmit } = useForm();
  const loginSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <content>
        <div className="login-form">
          <h1>Login</h1>
          <form className="form" onSubmit={handleSubmit(loginSubmit)}>
            <input placeholder="Username" {...register("Username", { required: true })} />
            <input placeholder="Password" type="password" {...register("password", { required: true })} />
            <button type="submit" className="btn" id="register-btn-form">Login</button>
          </form>
        </div>
        
      </content>
    </div>
  );
}

export default Register;
