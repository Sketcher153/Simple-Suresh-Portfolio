import ResumeImage from '../assets/resume_image.jpg'

export default function Resume() {
    const resume = {
        link: '/Suresh-Resume.pdf'
    };

    return (
        <section className='flex flex-col md:flex-row bg-white text-black px-20 py-10 justify-evenly border-b-8 border-slate-200' id='Resume'>
            <div className='md:w-1/2'>
            <h1 className='text-4xl font-extrabold border-b-4 border-black w-fit'> Resume </h1>
                <img className='py-10 w-[600px] h-[500px] hover:scale-90 hover:shadow-lg hover:shadow-cyan-600' src={ResumeImage} alt='Resume'/>
            </div>
            <div className='md:w-1/2 px-10 py-5 flex'>
                <div className='flex flex-col justify-center'>
                    <p className='px-8 py-3 text-2xl font-semibold'> To view my Resume, Click Below <div className='px-16 py-8'> <a href={resume.link} className='download-btn px-2 py-2 hover:shadow-lg hover:shadow-cyan-600 opacity:90 hover:animate-pulse' download="Suresh-Resume"> Download </a> </div> </p>
                </div>
            </div>
        </section>
    );
}
