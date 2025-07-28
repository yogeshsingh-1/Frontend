
import { Link } from "react-router-dom";
import { useState } from 'react';
const Signin = () => {
    const [postInputs, setPostInputs] = useState({
    email: "",
    password: ""
  })

  // onChange
  function onChangeHandler(e: any) {
    const { name, value } = e.target;
    setPostInputs((prev:any) => ({ ...prev, [name]: value }))
  }
  // onSubmit
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(postInputs);
    setPostInputs({
      
      email: "",
      password: ""
    })
  }
  return (
    <div className=" lg:w-[50%] h-screen flex  justify-center items-center">
        <div className="w-80">
          <h3 className="text-2xl font-bold text-center">Create an account</h3>
          <p className="text-gray-700 text-sm font-normal text-center">
            Create a new account? <Link to='/signup' className="text-black hover:border-b-2 hover:border-black text-md font-semibold" >Sign UP</Link>
          </p>

          <form action="" onSubmit={handleSubmit}>
            <div className="my-2">
              <LabelInput onChange={onChangeHandler} labelName="Email" type="text" name="email" placeholder="test@gmail.com" value={postInputs.email}/>
            </div>
            <div className="my-2">
              <LabelInput onChange={onChangeHandler} labelName="Password" type="password" name="password" placeholder="*******" value={postInputs.password}/>
            </div>
            <button className="w-full my-2 text-white px-6 py-1 opacity-85 bg-black hover:opacity-100 rounded border">Sign IN</button>
          </form>
        </div>
      </div>
  )
}
function LabelInput(props: any) {
  const { labelName, type, name, placeholder, onChange ,value} = props;
  return <>
    <label className="block my-1 font-semibold text-sm" htmlFor="">{labelName}</label>
    <input
      className="w-full border h-8 placeholder:text-gray-400 placeholder:text-xs placeholder:font-semibold px-2 py-1 rounded"
      type={type}
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      required
      placeholder={placeholder}
    />
  </>
}
export default Signin