import AboutMe from '../assets/about_me.jpg'

export default function About() {
    const statement2 = {
        subtitle: " I'm proficient at Core Java, OOPs, HTML, CSS, React.js, Tailwind CSS, React Bootstrap. "
    };

    const statement3 = {
        subtitle: 'My Short Term Goal is to secure a position at Frontend and My Long Term Goal is to become a Mobile Developer. '
    }; 

    return (
        <section className='flex flex-col md:flex-row bg-white px-20 py-10 border-b-8 border-slate-200' id='About'>
            <div className='md:w-1/2'>
                <h1 className='text-4xl font-extrabold text-black border-b-4 border-black w-fit'> About Me </h1>
                <img className='py-16 hover:scale-90  hover:shadow-lg hover:shadow-cyan-600' src={AboutMe} alt='About-Me'/>
            </div>
            <div className='md:w-1/2 text-black flex'>
                <div className='flex flex-col justify-center'>
                    <p className='px-8 py-3 font-semibold'> I am <span className='text-amber-600 font-semibold leading-none hover:leading-loose hover:text-xl hover:shadow-lg hover:shadow-cyan-600'> D. Suresh </span> who is currently pursuing as a Final Year Student in the domain of Computer Science and Engineering in GRT Institute of Engineering and Technology at Tiruttani. </p>
                    <p className='px-8 font-semibold'> {statement2.subtitle} </p>
                    <p className='px-8 py-3 font-semibold'> {statement3.subtitle} </p>
                    <ul>
                        <h2 className='text-4xl font-extrabold text-black border-b-4 border-black w-fit'> Frontend tools used for Portfolio </h2>
                        <ol type='i' className='px-10 py-3 font-semibold list-disc'>
                            <li> React Js </li>
                            <li> Tailwind CSS </li>
                            <li> CSS </li>
                            <li> React Icons </li>
                            <li> Heroicons/React </li>
                        </ol>
                    </ul>
                </div>
            </div>
        </section>
    );
}
