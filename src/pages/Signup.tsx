
import Quote from '../components/Quote'
import Auth from '../components/Auth'

const Signup = () => {
  return (
     <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 font-sans">
      <Quote/>
      <Auth type="signup"/>
     </div>
  )
}

export default Signup