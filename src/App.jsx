import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Article from "./Routes/Article/Article";
import Buy from "./Routes/Buy/Buy";
import Contactus from "./Routes/ContactUs/Contactus";
import FAQ from "./Routes/FAQ/Faq";
import Gallery from "./Routes/Gallery/Gallery";
import News from "./Routes/News/News";
import Notice from "./Routes/Notice/Notice";
import Nursery from "./Routes/Nursery/Nursery";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/nursery" element={<Nursery />} />
				<Route path="/news" element={<News />} />
				<Route path="/article" element={<Article />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/contact" element={<Contactus />} />
				<Route path="/notice" element={<Notice />} />
				<Route path="/buy" element={<Buy />} />
			</Routes>
		</>
	);
}

export default App;
