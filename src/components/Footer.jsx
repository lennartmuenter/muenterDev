import Contact from "../components/Contact"

function Footer() {
    return (
        <div class="w-full text-fullbright bg-prime pt-8">
            <Contact />

            <div class="flex flex-row justify-center p-8">
                <a href="/impressum" class="text-sm text-lightness transition-all duration-200 ease-in-out hover:scale-125 hover:text-fullbright">impressum</a>
            </div>
        </div>
    )
}

export default Footer