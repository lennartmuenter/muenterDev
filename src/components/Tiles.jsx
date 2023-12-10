import Card from "./parts/Card"
import { SiTailwindcss } from 'solid-icons/si'
import { TbServer } from 'solid-icons/tb'

function Tiles() {
    return (
        <div class="flex justify-center pt-8 md:pt-24 angledBgSm sm:angledBg">
            <div class="w-full md:w-[750px] xl:w-[1200px] gap-4">
                <div class="flex flex-col sm:flex-row mx-4 md:mx-8 gap-4">
                    <Card
                        icon={(<SiTailwindcss />)}
                        title="frontend
                        designing"
                        text="passionate about pixel perfection. skilled in html, css, tailwind, react and solidjs frameworks. adept at crafting visually appealing and interactive web experiences."
                    />
                    <Card
                        icon={(<TbServer />)}
                        title="backend, api 
                        and mobile"
                        text="proficient in developing hybrid mobile apps and cross-platform solutions with react native and php, ensuring versatile, seamless and user-friendly implementations."
                    />
                </div>
            </div>
        </div>
    )
}

export default Tiles