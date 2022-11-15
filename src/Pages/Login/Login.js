import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from 'react-hot-toast';

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const {userSignIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState();
    const location = useLocation();
    const Navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        userSignIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user)
          toast.success('YAY! Login successful');
          Navigate(from, {replace: true})
          
        })
        .catch(error => {
          console.error(error);
          setLoginError(error.message)
        })

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
                <input type="email"  
                {...register("email", {required: "Email Address is required"})} 
                 className="input input-bordered w-full max-w-xs"/>
                 {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password"  
                {...register("password", 
                {required: "Password is required", 
                  minLength: {value: 6, message: "password should be at least 6 characters"}
              })} 
                className="input input-bordered w-full max-w-xs"/>
                {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                <label className="label">
                    <span className="label-text">Forget Password</span>
                </label>
            </div>
          <input className="btn btn-accent w-full" value='Login' type="submit" />
          <div>
            {loginError && <p>{loginError}</p>}
          </div>
        </form>
        <p>New to Doctors portal? <Link to='/signup' className="text-secondary">Create a new account</Link> </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
