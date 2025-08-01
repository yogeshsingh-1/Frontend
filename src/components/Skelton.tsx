

const Skelton = () => {
  return (
     <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-md w-full bg-white rounded-xl shadow-md space-y-4 animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    </div>

  )
}

export default Skelton