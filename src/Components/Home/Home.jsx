import React from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import ArticleFeatured from "../ArticleFeatured/ArticleFeatured";
import NurseryFeatured from "../NurseryFeatured/NurseryFeatured";
import Services from "../Services/Services";
import NewsFeatured from "../NewsFeatured/NewsFeatured";
import Contact from "../Contact/Contact";
import Author from "../Author/Author";
import Footer from "../Footer/Footer";
import Map from "../Map/Map";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestions/FrequentlyAskedQuestion";

const Home = () => {
	return (
		<>
			<Header></Header>
			<Slider></Slider>

			<ArticleFeatured></ArticleFeatured>
			<NurseryFeatured></NurseryFeatured>
			<Services></Services>
			<NewsFeatured></NewsFeatured>
			<Author></Author>
			<FrequentlyAskedQuestion></FrequentlyAskedQuestion>
			<Contact></Contact>
			<Map></Map>
			<Footer></Footer>
		</>
	);
};

export default Home;
