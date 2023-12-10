import SmCard from "./parts/SmCard"

function Projects() {
    return (
        <div class="flex justify-center pb-16" id="projects">
            <div class="w-full md:w-[750px] xl:w-[1200px]">
                <p class="mb-4 text-fullbright text-xl md:text-3xl font-extrabold px-8 py-4 w-min whitespace-nowrap bg-gradient-to-l from-prime from-20% to-darkness rounded-r-xl md:ml-8">projects</p>
                <div class="flex flex-col w-full px-4 md:px-8">
                    <div class="flex flex-col md:flex-row w-full gap-4 xl:gap-8 md:mt-6">
                        <div class="flex flex-col md:w-1/2 gap-4 xl:gap-8">
                            <SmCard title="aoc2023" text="my participation in advent of code. calendar of programming puzzles for a variety of skill sets and levels" lang="php, python" link="https://github.com/lennartmuenter/AdventOfCode2023" />
                            <SmCard title="equibirth" text="mobile app for horse breeders to record and monitor foal births. made with expo to work on android and ios" lang="reactnative, tailwind" link="https://github.com/lennartmuenter/EquiBirth" />
                        </div>
                        <div class="flex flex-col md:w-1/2 gap-4 xl:gap-8 md:-translate-y-[6.5rem]">
                            <SmCard title="muenterdev" text="repository houses the source code for my personal website, showcasing a blend of design, code, and passion" lang="solidjs, tailwind" link="https://github.com/lennartmuenter/muenterDev" />
                            <SmCard title="pruvia" text="project for university. a system for room booking with specific workspaces and available equipment." lang="springboot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects