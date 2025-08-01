import Appbar1 from "../components/Appbar1";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <>
      <div className="bg-[#F7F4ED] w-full h-screen ">
        <Appbar1 />
        <Menu />
        <Footer />
      </div>
    </>
  );
};

export default Home;
