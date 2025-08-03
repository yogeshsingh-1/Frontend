import { useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { backend_url } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [data, setData] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const onChangeHandler = (e: React.FormEvent) => {
    const { name, value } = e.target;
    // if (name === "content") {
    //   const regex = /\n/g;
    //   setData((prev) => ({ ...prev, [name]: value.replace(regex, ) }));
    // } else {
      setData((prev) => ({ ...prev, [name]: value }));
    // }
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(
        `${backend_url}/api/v1/blog`,
        { ...data },
        {
          withCredentials: true,
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          const { id } = res.data;
          console.log(res.data);
          navigate(`/user/blog/${id}`);
        } else {
          navigate("/signin", { state: { ...e.response.data } });
        }
      })
      .catch((e) => {
        // console.log(e);
        navigate("/signin", { state: { ...e.response.data } });
      });
  };

  return (
    <div className="min-h-screen ">
      <Appbar />
      <div className="mt-12 max-w-2xl w-full mx-auto px-4 sm:px-6 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Create a New Blog
        </h1>

        <form action="" onSubmit={onSubmit}>
          <div className="flex flex-col gap-5">
            <div>
              <input
                type="text"
                className=" border border-gray-300 text-gray-800 bg-gray-50 text-lg rounded-md outline-none  block w-full p-3 shadow-sm"
                placeholder="Enter blog title"
                name="title"
                onChange={onChangeHandler}
                required
              />
            </div>
            <TextEditor onChangeHandler={onChangeHandler} />
          </div>
        </form>
      </div>
    </div>
  );
};
function TextEditor({
  onChangeHandler,
}: {
  onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="w-full border border-gray-300 rounded-lg bg-white shadow-sm">
      <div className="px-4 py-2 bg-gray-50 rounded-t-lg">
        {/* <label htmlFor="conntentent" className="sr-only">
                    Your content
                </label> */}
        <textarea
          id="content"
          name="content"
          rows={6}
          className="w-full px-0 text-base text-gray-800 bg-gray-50 border-0 focus:ring-0 outline-none"
          placeholder="Write your blog content here..."
          onChange={onChangeHandler}
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-end px-4 py-3 border-t border-gray-200">
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        >
          Publish Blog
        </button>
      </div>
    </div>
  );
}

export default Publish;
