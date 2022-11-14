import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const {register, handleSubmit} = useForm();

    const handleLogin = data => {
        console.log(data)
    }
    
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-2xl rounded">
        <h2 className="text-2xl font-bold text-center">Login!!</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email")}  className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password")}  className="input input-bordered w-full max-w-xs"/>
                <label className="label">
                    <span className="label-text">Forget Password</span>
                </label>
            </div>
          <input className="btn btn-accent w-full" value='Login' type="submit" />
        </form>
        <p>New to Doctors portal? <Link to='/signup' className="text-secondary">Create a new account</Link> </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
