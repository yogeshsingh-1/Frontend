interface UpdateProps {
  onClose: () => void;
}

const Update = ({ onClose = () => {} }: UpdateProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
      <form>
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
