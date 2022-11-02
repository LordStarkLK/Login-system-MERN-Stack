import Header from "./../components/Header";
import { useForm } from "react-hook-form";
import "./../style/form-pages.css";

function Register() {
  const { register, handleSubmit } = useForm();
  const registerSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <content>
        <div className="register-form">
          <h1>Register</h1>
          <form className="form" onSubmit={handleSubmit(registerSubmit)}>
            <input placeholder="Username" {...register("Username", { required: true })} />
            <input placeholder="Password" type="password" {...register("password", { required: true })} />
            <input placeholder="email" {...register("Username", { required: true })} />
            <button type="submit" className="btn" id="register-btn-form">Register</button>
          </form>
        </div>
        
      </content>
    </div>
  );
}

export default Register;
