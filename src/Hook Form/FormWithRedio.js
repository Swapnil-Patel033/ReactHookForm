import * as React from "react";
import { useForm } from "react-hook-form";

export default function FormWithRedio() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const FormHandal = Data => {
    console.log(Data)
  }
  console.log()

  return (
    <div className="container py-2" >
      <div className="card boder-0 shadow w-100 p-3 mx-auto" style={{ height: 'auto' }} >
        <form onSubmit={handleSubmit(FormHandal)}>

          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Enter Your Full Name"
              {...register("FullName", { required: true,minLength:4 })}
            />
            <div>
            {errors.FullName && errors.FullName.type === "required" && 
            <span className=" text-danger">Enter Your Full Name</span>
          }
          </div>
              
            {errors.FullName && errors.FullName.type === "minLength" && (
            <span className=" text-danger">Your Full Name minLength 4 Char</span>
            )}
          </div>



          <div className="form-grouppy-1">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Your E-mail Address"
              {...register("Email", { required: true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
            />
            {errors.Email && errors.Email.type === "required" && 
            <span className=" text-danger">Enter Your Email</span>
              }
              
            {errors.Email && errors.Email.type === "pattern" && (
            <span className=" text-danger">Enter Your Valid Email</span>
            )}
          </div>




          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter Your Phone Number"
              {...register("Phone", { required: true,pattern:/^[0-9+-]+$/, minLength:10,maxLength:10 })}
            />
            {errors.Phone && errors.Phone.type === "required" && 
            <span className=" text-danger">Enter Your PhoneNo</span>
              }
            {errors.Phone && errors.Phone.type === "pattern" && (
            <span className=" text-danger">Enter Number</span>
            )}
            {errors.Phone && errors.Phone.type === "minLength" && (
              <span className=" text-danger">Enter minLength 10 Char</span>
              )}
              {errors.Phone && errors.Phone.type === "maxLength" && (
                <span className=" text-danger">Enter maxLength 10 Char</span>
                )}
            
          </div>



          <div className="form-grouppy-1">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              {...register("Password", { required: true,pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/ })}
            />
            {errors.Password && errors.Password.type === "required" && 
            <span className=" text-danger">Password is required</span>
              }
            {errors.Password && errors.Password.type === "pattern" && (
            <span className=" text-danger">Your Password Most be 1 uppercase,1 lowercase, 1 digit, 1 special character, 8 characters</span>
            )}
          </div>


          <div className="form-group">
            <label htmlFor="state">Choose Your State</label>
            <select className="form-control" id="state" {...register("State", { required: true })}>
              <option value="">--- Select Your State ---</option>
              <option value="Jharkhand" >Jharkhand</option>
              <option value="Assam">Assam</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Punjab">Punjab</option>
            </select>
            <span className=" text-danger"> {errors.State && "choose your state"} </span>
          </div>


          <div className="form-grouppy-1 text-center">
          <div>
          <label htmlFor="gender" className="mr-4">Choose Your Gender </label>
          </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                value="male"
                name="Gender"
                {...register("Gender", { required: true })}
              />
              <label className="form-check-label" htmlFor="male">male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                value="female"
                name="gender"
                {...register("Gender")}
              />
              <label className="form-check-label" htmlFor="female">female</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="other"
                value="other"
                name="gender"
                {...register("Gender")}
              />
              <label className="form-check-label" htmlFor="other">other</label>
            </div>
            <div className="text-center">
            <span className="text-danger">{errors.Gender && "choose your Gender"} </span>
            </div>
          </div>


          <div className="form-group text-center" >
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="tnc" {...register("TMC", { required: true })} />
              <label className="form-check-label" htmlFor="tnc">I agree all terms & conditions</label>
            </div>
            <div className="text-center">
            <span className="text-danger" >{errors.TMC && "You Agree With T&C"} </span>
            </div>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <button className="btn btn-primary">Create New Account</button>
          </div>

        </form>
      </div>

    </div>

  );
}