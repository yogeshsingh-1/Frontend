/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useState } from "react";
import { backend_url } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const location = useLocation() ;
  const message = location.state ?? "";

  console.log(message);
  async function sendRequest() {
    try {
      const url = `${backend_url}/api/v1/user/${type === "signup" ? "signup" : "signin"}`

      const res = await axios.post(url, { ...postInputs });
      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate('/blogs');
    } catch (e) {
      console.log(e);
    }
  }

  // onchange
  function onChangeHandler(e: any) {
    const { name, value } = e.target;
    setPostInputs((prev: any) => ({ ...prev, [name]: value }));
  }
  // onSubmit
  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(postInputs);
    await sendRequest();
    setPostInputs({
      username: "",
      email: "",
      password: "",
    });
  }
  return (
    <div className="h-full flex justify-center items-center">

      <div className="w-80">
        <h3 className="text-2xl font-bold text-center">
          {type === "signup" ? "Create an account" : "Sign IN"}
        </h3>
        <p className="text-gray-700 text-sm font-normal text-center">
          {type === "signin"
            ? "Create an account? "
            : "Already have an account?"}
          <Link
            to={type === "signup" ? "/signin" : "/signup"}
            className="ml-1 text-black hover:underline text-md font-semibold"
          >
            {type === "signup" ? "Sign IN" : "Sign UP"}
          </Link>
        </p>
        <p> {message.message && <div className="text-red-500 text-sm text-center my-2 ">{message.message}!</div>}</p>

        <form action="" onSubmit={handleSubmit}>
          <div className="my-2 ">
            {type === "signup" && (
              <LabelInput
                onChange={onChangeHandler}
                labelName="Username"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={postInputs.username}
              />
            )}
          </div>
          <div className="my-2">
            <LabelInput
              onChange={onChangeHandler}
              labelName="Email"
              type="text"
              name="email"
              placeholder="test@gmail.com"
              value={postInputs.email}
            />
          </div>
          <div className="my-2">
            <LabelInput
              onChange={onChangeHandler}
              labelName="Password"
              type="password"
              name="password"
              placeholder="*******"
              value={postInputs.password}
            />
          </div>
          <button className="w-full my-2 text-white px-6 py-1 opacity-85 bg-black hover:opacity-100 rounded border">
            {type === "signup" ? "Sign UP" : "Sign IN"}
          </button>
        </form>
      </div>
    </div>
  );
};
function LabelInput(props: any) {
  const { labelName, type, name, placeholder, onChange, value } = props;
  return (
    <>
      <label className="block my-1 font-semibold text-sm" htmlFor="">
        {labelName}
      </label>
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
  );
}
export default Auth;
