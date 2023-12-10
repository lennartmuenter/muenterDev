import { createSignal } from "solid-js"

const [email, setEmail] = createSignal(
    <a onClick={showEmail} class="text-lightness transition-all duration-200 ease-in-out md:hover:scale-110 hover:text-fullbright text-sm xl:text-lg w-min">show@email</a>
)

function Contact() {
    return (
        <div class="flex justify-center">
            <div class="w-full md:w-[750px] xl:w-[1200px]">
                <div class="flex flex-col sm:flex-row px-8 rounded-2xl gap-8">
                    <div class="flex flex-col sm:items-start sm:w-1/2">
                        <p class="mb-8 text-fullbright text-xl md:text-3xl font-extrabold" id="contact">start a project</p>
                        <p class="text-lightness text-sm xl:text-lg">got a brilliant idea or a burning question? reach out to me via email or my social media channels. let's turn your vision into reality.</p>
                    </div>

                    <div class="flex flex-col sm:items-end justify-end sm:w-1/2">
                        {email}
                        <a href="https://www.linkedin.com/in/münter/" class="text-lightness transition-all duration-200 ease-in-out md:hover:scale-110 hover:text-fullbright text-sm xl:text-lg w-min">linkedin</a>
                        <a href="https://www.instagram.com/ylennart/" class="text-lightness transition-all duration-200 ease-in-out md:hover:scale-110 hover:text-fullbright text-sm xl:text-lg w-min">instagram</a>
                        <a href="https://github.com/lennartmuenter" class="text-lightness transition-all duration-200 ease-in-out md:hover:scale-110 hover:text-fullbright text-sm xl:text-lg w-min">github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function showEmail() {
    setEmail(
        <a href={'mailto:' + import.meta.env.VITE_EMAIL_ADRESS} class="text-lightness transition-all duration-200 ease-in-out md:hover:scale-110 hover:text-fullbright text-sm xl:text-lg w-min">{import.meta.env.VITE_EMAIL_ADRESS}</a>
    )
}

export default Contact