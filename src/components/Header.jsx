import { FiGitPullRequest } from 'solid-icons/fi'

function Header() {
    return (
        <div class="w-full text-fullbright py-6 md:py-12 px-4 md:px-8 header backdrop-blur-sm z-10 2xl:absolute">
            <div class="flex flex-row justify-between">
                <a href="/" class="text-2xl text-lightness md:text-3xl transition-all duration-200 ease-in-out md:hover:scale-125"><FiGitPullRequest /></a>
                <div class="flex flex-row gap-4 md:gap-8">
                    <a href="/#about" class="text-lg md:text-2xl text-lightness transition-all duration-200 ease-in-out md:hover:scale-125 hover:text-fullbright">about</a>
                    <a href="/#projects" class="text-lg md:text-2xl text-lightness transition-all duration-200 ease-in-out md:hover:scale-125 hover:text-fullbright">projects</a>
                    <a href="/#contact" class="text-lg md:text-2xl text-lightness transition-all duration-200 ease-in-out md:hover:scale-125 hover:text-fullbright">contact</a>
                </div>
            </div>
        </div>
    )
}

export default Header