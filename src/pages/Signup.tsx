
import Quote from '../components/Quote'
import Auth from '../components/Auth'
import Appbar from '../components/Appbar'

const Signup = () => {
  return (
        <>
        <Appbar/>
     <div className="w-full h-[calc(100vh-69px)] grid grid-cols-1 lg:grid-cols-2 font-sans">
      <Quote />
      <Auth type="signup"/>
     </div>
        </>
  )
}

export default Signup