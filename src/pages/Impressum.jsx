import Header from "../components/Header"

function Impressum() {
    return (
        <div>
            <Header />
            <div class="text-white flex flex-col justify-center text-center p-8">
                <h1 class="text-3xl pb-4">Impressum</h1>
                <h2 class="text-2xl pb-4">Diensteanbieter</h2>
                <div class="pb-8">
                    <p>{import.meta.env.VITE_NAME}</p>
                    <p>{import.meta.env.VITE_ADDR}</p>
                    <p>{import.meta.env.VITE_PLZ}</p>
                </div>
                <h2 class="text-2xl pb-4">Kontaktmöglichkeiten</h2>
                E-Mail-Adresse: <p><a href={'mailto:' + import.meta.env.VITE_EMAIL_ADRESS}>{import.meta.env.VITE_EMAIL_ADRESS}</a></p>
                Telefon: <p>{import.meta.env.VITE_TEL_NUM}</p>
            </div>
        </div>
    )
}

export default Impressum