import * as React from "react"
import CustomHelmet from "../components/CustomHelmet";
import Header from "../components/index-related/header/Header";
import Footer from "../components/footer/Footer";
import About from '../components/index-related/about/About';
import Portfolio from "../components/index-related/portfolio/Portfolio";
import Contact from "../components/index-related/contact/Contact";

const Index = () => {
	return(
		<>
			<CustomHelmet />
			<Header />
			<main>
				<About />
				<Portfolio />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default Index;