function About() {
    return (
        <div class=" angledBgSmRv sm:angledBgRv ">
            <div class="flex flex-col justify-center h-full py-16">
                <div class="mx-4 sm:w-3/4 md:w-1/2 xl:w-1/3 self-center">
                    <p class="text-fullbright text-md lg:text-xl xl:text-2xl text-center pb-8">
                        if debugging is the process of removing software bugs, then programming must be the process of putting them in
                    </p>
                    <p class="text-lightness text-md lg:text-xl xl:text-2xl text-center pb-16">
                        - Edsger Dijkstra
                    </p>
                </div>

                <div class="flex flex-col-reverse lg:flex-row lg:justify-evenly h-full p-8 lg:p-16 bg-darkness mx-4 md:mx-16 2xl:mx-32 rounded-2xl border-4 border-prime gap-4 sm:gap-8 lg:gap-16" id="about">
                    <div class="flex flex-col justify-between lowercase lg:w-[700px] lg:h-[400px] text-lightness lg:leading-loose self-center rounded-2xl">
                        <p class='font-extrabold text-fullbright text-xl md:text-3xl pb-4 lg:pb-0'>
                            about me
                        </p>
                        <p class='text-md lg:text-xl xl:text-2xl pb-4 lg:pb-0'>
                            a passionate software developer
                            and university student
                            pursuing my Bachelor in
                            Computer Science.
                        </p>
                        <p class='text-md lg:text-xl xl:text-2xl pb-8 lg:pb-0'>
                            With a keen
                            interest in crafting elegant solutions
                            to complex problems, I thrive in the
                            dynamic and evolving world of technology.
                        </p>
                        <a href="#contact" class="py-2 px-4 bg-prime rounded-lg w-min whitespace-nowrap text-md lg:text-xl xl:text-2xl text-fullbright transition-all duration-200 ease-in-out md:hover:scale-125"> contact me</a>
                    </div>
                    <img class="h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] object-cover rounded-full lg:rounded-2xl 2xl:rounded-full self-center" src="/images/profile.jpg" alt="Image of me" />
                </div>
            </div>
        </div>
    )
}

export default About