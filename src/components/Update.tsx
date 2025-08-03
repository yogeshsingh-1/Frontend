import { useState } from "react";
import axios from "axios";
import { backend_url } from "../config";
import { useNavigate } from "react-router-dom";
interface UpdateProps {
  id: number;
  onClose: () => void;
}

const Update = ({ id, onClose }: UpdateProps) => {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${backend_url}/api/v1/blog/${id}`,
        { ...form },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        navigate(`/user/blog/${id}`);
      }
    } catch (err) {
      console.log("hello");
      navigate(`/user/blogs`);
      onClose();
    }
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm text-gray-700 font-medium mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            placeholder="Write your content here..."
            className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            required
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
