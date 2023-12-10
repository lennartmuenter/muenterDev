function SmCard(props) {
    return (
        <a href={props.link} target="_blank" class="rounded-2xl bg-prime w-full h-[240px] md:h-[320px]">
            <div class="h-full w-full p-4 md:p-8">
                <div class="flex flex-col h-full justify-between">
                    <div class="flex flex-row text-fullbright text-xl md:text-3xl text-left items-center font-extrabold whitespace-pre-line">
                        {props.title}
                    </div>
                    <div class="flex flex-row text-fullbright text-md xl:text-xl">
                        {props.text}
                    </div>
                    <div class=" w-min whitespace-nowrap text-md xl:text-xl text-lightness">
                        {props.lang}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default SmCard