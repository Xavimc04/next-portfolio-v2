export default function ContactForm() {
    return <div className="w-[90%] md:w-11/12 flex flex-col md:flex-row mt-40">
        <div className="flex flex-col md:w-6/12">
            <div className="text-2xl font-serif flex items-center">
                <span className="material-symbols-outlined mr-5">mail</span> Contact form
            </div>

            <form className="mt-10 flex flex-row flex-wrap gap-7 justify-between mt-10">
                <input type="text" placeholder="Describe contact reason... (30 chars)" className="bg-gray-100 p-3 rounded-sm border focus:rounded-none border-1 focus:border-black transition-all w-full md:w-[60%]" maxLength={ 30 } />
                <input type="text" placeholder="Type your email" className="bg-gray-100 p-3 rounded-sm border focus:rounded-none border-1 focus:border-black transition-all flex-1" maxLength={ 60 } /> 

                {/* Poner algo rollo usa mi dirección de correo en caso de que esté logeado */}

                <textarea placeholder="Please complete this field with your contact reason..." className="bg-gray-100 max-h-[450px] min-h-[200px] p-3 rounded-sm border focus:rounded-none border-1 focus:border-black transition-all w-full"></textarea>

                <button className="bg-zinc-700 text-white font-serif uppercase tracking-[.15em] text-xl w-full py-3 rounded-sm flex items-center justify-center">
                    Submit form

                    <span className="material-symbols-outlined ml-5">forward_to_inbox</span>
                </button>
            </form>
        </div>

        <div className="m-10 flex-1 dotted flex items-center justify-center mt-20 md:mt-0">
            <img width={ 550 } className="grayscale" src="https://www.fourmarketing360.com/wp-content/uploads/2022/01/pagina-web.png" alt="contact_form_image" />
        </div>
    </div>
} 