export default function Contact() {
    const email_statement = {
        subtitle: ' sureshsrh05@gmail.com  '
    }; 

    const phone_statement = {
        subtitle: ' +91 636_901_8233 '
    };
    
    return (
        <section className='flex flex-col bg-white px-20 py-10' id="ContactMe">
            <div className='md:w-full text-black flex'>
                <div className='flex flex-col justify-center'>
                    <div>
                        <h1 className='text-4xl font-extrabold border-b-4 border-black w-fit'> Contact </h1>
                    </div>
                    <p className='py-4 font-semibold'> <span className="px-28 py-3"> For futher information, Contact </span> </p>
                    <p className="px-20"> <span className="text-amber-600 text-4xl font-extrabold px-5"> Email: </span> <a className=" font-semibold hover:shadow-lg hover:shadow-cyan-600" href="mailto:sureshsrh05@gmail.com" target="_blank" rel="noreferrer"> {email_statement.subtitle} </a> </p>
                    <p className="px-20"> <span className="text-amber-600 text-4xl font-extrabold px-5"> Phone: </span> <a className=" font-semibold hover:shadow-lg hover:shadow-cyan-600" href="tel:+91636-901-8233"> {phone_statement.subtitle} </a> </p>
                </div>
            </div>
        </section>
    );
}