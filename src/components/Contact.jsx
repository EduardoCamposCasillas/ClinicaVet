import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='relative z-0 filter'>
          <img src='/images/banner.jpg' className='w-full h-auto '></img>
          <h2 className='text-4xl font-bold text-center text-[#004f6f]'>Contactanos</h2>
      </div>
    </div>
  );
};

export default Contact;