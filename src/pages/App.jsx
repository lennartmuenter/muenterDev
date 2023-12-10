import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Tiles from "../components/Tiles"
import Projects from "../components/Projects"
import About from "../components/About"

function App() {
	return (
		<div class="bg-[url('/svg/bg.svg')] bg-cover">
			<Header />
			<div class="flex flex-col justify-center 2xl:h-screen">
				<Hero />
			</div>
			<Tiles />
			<About />
			<Projects />
			<Footer />
		</div>
	)
}

export default App