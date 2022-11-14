import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleSignUp = data => {
        console.log(data )

    }
    return (
        <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-2xl rounded">
        <h2 className="text-2xl font-bold text-center">SignUp!!</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs"/>
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {required: "password is required", 
                minLength: {value: 6, message: "password should be at least 6 characters"}})} className="input input-bordered w-full max-w-xs"/>
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div>
          <input className="btn btn-accent w-full mt-3" value='SignUp' type="submit" />
        </form>
        <p>Already have an account?<Link to='/login' className="text-secondary">Please login</Link> </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default SignUp;