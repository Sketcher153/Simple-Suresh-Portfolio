import FormSubmission from '../assets/login_image.jpg'
import QuizApplication from '../assets/quiz_image.jpg'
import DiceApplication from '../assets/dice_image.jpg'

export default function Project() {
    const config = {
        projects : [
            {
                image: FormSubmission,
                description: 'This project is built by using React.js, Tailwind CSS, Express.js, Node.js, MongoDB',
                link: 'https://github.com/Sketcher153/StartupTN-Clone'
            },
            {
                image: QuizApplication,
                description: 'This project is built by using Core Java and OOPs',
                link: 'https://github.com/Sketcher153/QuizApplication'
            },
            {
                image: DiceApplication,
                description: 'This project is built by using HTML, CSS, Bootstrap',
                link: 'https://github.com/Sketcher153/Dice-Application'
            }
        ]
    }

    return (
        <section className="flex flex-col px-20 py-10 justify-center bg-white border-b-8 border-slate-200" id='Projects'>
            <div className="w-1/2">
                <div className='flex flex-col justify-center py-3'>
                    <h1 className='text-4xl font-extrabold text-black border-b-4 border-black w-fit'> Projects </h1>
                </div>
                <div className="text-black">
                    <p className="px-8 font-semibold"> Let's plunge into my projects </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row p-10 gap-5 justify-around'>
                    {config.projects.map((project) => (
                        <a href={project.link} target='_blank' rel="noreferrer">
                            <div className='relative hover:text-white hover:shadow-lg hover:shadow-cyan-600 hover:scale-90 hover:gap-10 '>
                                <img className='h-[300px] w-[600px]' src={project.image} alt='FormSubmission-Image'/>
                                <div className='project-feature'>
                                    <p className='text-white text-center py-3'> {project.description} </p>
                                    <div className=' flex justify-center'>
                                        <a href={project.link} target="_blank" className='download-btn' rel="noreferrer"> View Project </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}