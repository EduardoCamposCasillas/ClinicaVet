import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
        <div className='relative z-0 filter'>
          <img src='/images/banner.jpg' className='w-full h-auto '></img>
          <h2 className='text-4xl font-bold text-center text-[#004f6f]'>La clínica</h2>
          
      </div>
    </div>
  );
};

export default About;
