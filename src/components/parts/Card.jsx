function Card(props) {
    return (
        <div class="border-prime border-4 rounded-2xl bg-darkness transition-all duration-200 ease-in-out lg:hover:scale-110 hover:z-10">
            <div class="h-full w-full p-4 xl:p-6">
                <div class="flex flex-col h-full">
                    <div class="flex flex-row text-fullbright text-xl md:text-3xl text-left items-center font-extrabold whitespace-pre-line">
                        <div class="text-[28px] md:text-[36px] xl:text-[48px] mr-4 xl:mr-6 text-prime">
                            {props.icon || <div></div>}
                        </div>
                        {props.title}
                    </div>
                    <div class="mt-4 text-prime">
                        <div class="">&lth3&gt</div>
                        <div class="flex flex-row text-fullbright text-md xl:text-xl md:border-l border-prime md:pl-4 md:mx-4 md:my-1">
                            {props.text}
                        </div>
                        <div class="">&lt/h3&gt</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card