import { FaSolidAngleDown } from 'solid-icons/fa'

function Hero(props) {
    return (
        <div class="hero">
            <div class="flex flex-row justify-start">
                <p class="text-[13vw] sm:text-[10vw] md:text-[7vw] text-fullbright bg-gradient-to-l from-prime from-20% to-darkness rounded-r-lg md:rounded-r-xl px-8 py-4 md:py-1 w-min md:min-w-max leading-none md:leading-normal">Lennart M&uuml;nter</p>
            </div>
            <div class="flex flex-row justify-between -my-4 md:my-4 invisible md:visible">
                <p class="md:text-[5vw] text-lightness backdrop-blur-sm px-4 md:px-8 py-4 rounded-2xl">crafts</p>
                <p class="md:text-[5vw] text-lightness backdrop-blur-sm px-4 md:px-8 py-4 rounded-2xl">solutions</p>
            </div>
            <div class="flex flex-row justify-end">
                <p class="text-[13vw] sm:text-[10vw] md:text-[7vw] text-fullbright bg-gradient-to-r from-prime from-20% to-darkness rounded-l-lg md:rounded-l-xl px-8 py-4 md:py-1 w-min md:min-w-max text-right leading-none md:leading-normal">Software Developer</p>
            </div>
        </div>
    )
}

export default Hero