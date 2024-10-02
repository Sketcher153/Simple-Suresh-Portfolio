import Home from '../assets/home.png';
import { AiOutlineLinkedin , AiOutlineInstagram , AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'Frontend Developer. '
    }
    return (
        <section className='flex flex-col md:flex-row px-20 py-16 bg-white text-black justify-center border-b-8 border-slate-200' id='Hero'>
            <div className='flex flex-col md:w-1/2'>
                <h1 className='md:px-10 text-4xl'> Hi, <p> I'm Suresh. </p>
                        I'm a <p> {config.subtitle} </p>
                    Let's <p> probe about myself. </p>
                </h1>
                <div className='md:px-10 py-10 flex text-'>
                    <a href='https://www.instagram.com/something_suresh_007/' target='_blank' className='social-media' rel="noreferrer"> <AiOutlineInstagram size={30} /> </a>
                    <a href='https://www.facebook.com/profile.php?id=100067028173049' target='_blank' className='social-media ' rel="noreferrer"> <AiOutlineFacebook size={30} /> </a>
                    <a href='https://www.linkedin.com/in/suresh3' target='_blank' className='social-media' rel="noreferrer"> <AiOutlineLinkedin size={30} /> </a>
                    <a href='mailto:sureshsrh05@gmail.com' target='_blank' className='social-media' rel="noreferrer"> <AiOutlineMail size={30} /> </a>
                </div>
            </div>
            <img src={Home} alt='Home' className='md:w-1/3 hover:scale-90 hover:shadow-lg hover:shadow-cyan-600'/>
        </section>
    );
}