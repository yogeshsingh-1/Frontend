// import Appbar from "../components/Appbar"
import Auth from "../components/Auth"
import Quote from "../components/Quote"

const Signin = () => {
  return (
    <>
    {/* <Appbar/> */}
    <div className="w-full  h-[calc(100vh-58px)] grid grid-cols-1 lg:grid-cols-2">
      <Quote/>
      <Auth type="signin"/>
     </div>
    </>
  )
}

export default Signin