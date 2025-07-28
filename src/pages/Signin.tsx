import Auth from "../components/Auth"
import Quote from "../components/Quote"

const Signin = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      <Quote/>
      <Auth type="signin"/>
     </div>
  )
}

export default Signin