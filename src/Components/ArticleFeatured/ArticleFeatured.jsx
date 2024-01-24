import React, { useState } from "react";
import styles from "./ArticleFeatured.module.scss";

const ArticleFeatured = () => {
	//set state to select news article

	const [articleIndex, setArticleIndex] = useState(0);

	const articles = [
		{
			heading: "नेपालमा चन्दनको ऐतिहासिक महत्व",
			text: `नेपालको सांस्कृतिक सम्पदाको टेपेस्ट्रीमा चन्दन र रातो चन्दनको गहिरो ऐतिहासिक महत्त्व छ। शताब्दीयौंदेखि, यी सुगन्धित रूखहरू धार्मिक अनुष्ठान, सांस्कृतिक अभ्यासहरू र परम्परागत औषधिहरूसँग जोडिएका छन्। नेपालको शान्त उपत्यका र पवित्र स्थानहरूमा, चन्दनको सुगन्धित काठ पवित्रता र दिव्यताको प्रतीक भएको छ। यसका अनुप्रयोगहरू मन्दिरहरूका लागि जटिल मूर्तिकलाहरू बनाउनेदेखि लिएर परम्परागत आयुर्वेदिक अभ्यासहरूमा एक आवश्यक तत्वको रूपमा छन्। नेपाली इतिहासमा यी रूखहरूको गहिरो जरा बुझ्दा तिनीहरूको सांस्कृतिक महत्त्वको लागि प्रशंसाको तह थपिन्छ।`,
		},
		{
			heading: "चन्दनको औषधीय महत्व",
			text: `नेपाली परम्परागत चिकित्सामा गहिरो रूपमा निहित चन्दन र रातो चन्दनको औषधीय चमत्कारहरू छन्।  चन्दनको चिकित्सीय गुणहरू, यसको एन्टी-इन्फ्लेमेटरी र एन्टिसेप्टिक गुणहरू सहित, विभिन्न स्वास्थ्य समस्याहरूलाई सम्बोधन गर्न प्रयोग गरिएको छ। रातो चन्दन, यसको छाला निको पार्ने गुणहरूका लागि सम्मानित, पुस्ताहरूबाट पारित उपचारहरूमा यसको स्थान पाउँछ। सुखदायक छालाका रोगहरूदेखि समग्र कल्याणलाई बढावा दिन, यी औषधीय चमत्कारहरू नेपाली समुदायहरूको स्वास्थ्य अभ्यासहरूको अभिन्न अंग भएका छन्।
			`,
		},
		{
			heading: "चन्दनको सांस्कृतिक र धार्मिक प्रयोगहरू",
			text: `Tनेपालमा चन्दन र रातो चन्दनको साँस्कृतिक र परम्परागत प्रयोग छ। यी रूखहरू केवल वनस्पति निकायहरू होइनन् तर धार्मिक समारोह र रीतिथितिहरूको सम्मानित घटक हुन्। परम्परागत हस्तकलाको सृजनादेखि लिएर चाडपर्वमा भक्तजनहरूमा लगाइने पवित्र चिन्हसम्म तिनीहरूको सांस्कृतिक महत्त्व प्रस्ट हुन्छ। यी चलनहरू बुझ्दा यी रूखहरूले उनीहरूको व्यावहारिक अनुप्रयोगहरू भन्दा बाहिर खेल्ने भूमिकाको समग्र दृष्टिकोण प्रदान गर्दछ, नेपालको सांस्कृतिक बनावटसँग गहिरो सम्बन्धलाई बढावा दिन्छ।
			`,
		},
		{
			heading: "आर्थिक लाभ र अवसरहरू",
			text: `नेपालमा चन्दनको खेतीमा ठूलो आर्थिक सम्भावना रहेको छ । तिनीहरूको सांस्कृतिक र पारिस्थितिक भूमिकाहरू बाहिर, यी रूखहरूले आय उत्पादन र रोजगारीको अवसरहरू प्रस्तुत गर्छन्। चन्दन नर्सरीहरूलाई समर्थन गर्ने पहलहरूले स्थानीय अर्थतन्त्रमा मात्र योगदान गर्दैन तर दिगो जीविकोपार्जन प्रदान गरेर समुदायहरूलाई सशक्त बनाउँछ। आर्थिक आयामहरू बुझ्दा व्यक्ति र बृहत् समुदाय दुवैका लागि सम्भावित फाइदाहरूमा प्रकाश पार्छ।
			`,
		},
		{
			heading: "Jannus Srikanda ani Raktachandan Ko barema - 5",
			text: `FIVE - Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sapiente dolorum commodi rem
        laudantium voluptatum nemo? Labore unde esse
        quidem voluptatibus nisi saepe facilis, ad
        corrupti id nobis iure laboriosam error
        accusamus necessitatibus, neque magni. Explicabo
        totam rem asperiores impedit sunt laudantium
        quibusdam corrupti provident, eius aspernatur!
        Omnis laudantium assumenda nam quae, hic id
        voluptas vitae dolorem aut, consectetur
        repellendus porro fugit quasi cupiditate esse
        suscipit nam hic commodi non harum quis,
        eligendi soluta facilis corrupti repellat
        similique at nostrum. Voluptatum incidunt totam
        e eligendi sunt molestias eos.`,
		},
	];

	return (
		<>
			<section className={`${styles.articleSection} componentSection`}>
				<div className={`${styles.container} container`}>
					<h2 className={`${styles.sectionHeading} sectionHeading`}>
						चन्दन र रातो चन्दनको महत्व बुझ्नुहोस्
					</h2>
					<p
						className={`${styles.sectionSubHeading} sectionSubHeading`}
					>
						चन्दन र रातो चन्दनको बारेमा जान्न आवश्यक सबै कुरा
						पढ्नुहोस् यी के हुन्, नेपालको इतिहास, औषधीय र सांस्कृतिक
						महत्त्व।
					</p>

					<div className={styles.articleContainer}>
						<div className={styles.article}>
							<h2 className={styles.articleHeading}>
								{articles[articleIndex].heading}
							</h2>

							<p>{articles[articleIndex].text}</p>
							<button href="#">थप पढ्नुहोस्...</button>
						</div>

						<div className={styles.sidebar}>
							<h3>चन्दनको बारेमा पढ्नुहोस्</h3>
							<ul className={styles.articleHeadingWrapper}>
								<li>
									<span onClick={() => setArticleIndex(0)}>
										नेपालमा चन्दनको ऐतिहासिक महत्व
									</span>
								</li>
								<li>
									<span onClick={() => setArticleIndex(1)}>
										चन्दनको औषधीय महत्व
									</span>
								</li>
								<li>
									<span onClick={() => setArticleIndex(2)}>
										चन्दनको सांस्कृतिक र धार्मिक प्रयोगहरू
									</span>
								</li>
								<li>
									<span onClick={() => setArticleIndex(3)}>
										आर्थिक लाभ र अवसरहरू
									</span>
								</li>
								<li>
									<span onClick={() => setArticleIndex(4)}>
										आर्थिक लाभ र अवसरहरू
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ArticleFeatured;
