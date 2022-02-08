import Image from "next/image";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { PrimaryButton } from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Work() {
	return (
		<Layout>
			<main className="container work">
				<section className="section1 pb-5">
					<h1 className="text-center">
						What <span className="text-secondary">we’ve</span> been working on
					</h1>
					<p className="text-center my-1">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
						asperiores repellendus sequi, nemo libero unde! Nobis illo ad vel.
					</p>
					<div className="center">
						<div className="is-relative image-container">
							<Image
								src="/images/work 1.svg"
								width={512}
								height={522}
								alt="work"
							/>
						</div>
					</div>
				</section>
				<section className="section2">
					<h1>Our recent work</h1>
					<p className="mb-5">Check out our recent work</p>
					<Tabs className="tabs">
						<TabList className="tabs__tab-list">
							{["Web", "UI/UX", "PWA"].map((tab, index) => (
								<Tab className="tabs__tab" key={index}>
									<button>{tab}</button>
								</Tab>
							))}
						</TabList>
						<TabPanel>
							<div className="cards">
								<div className="cards__grid">
									{recentWorks.slice(0, 2).map((work, index) => (
										<RecentWorkCard key={index} {...work} />
									))}
								</div>
								<div className="cards__grid">
									{recentWorks.slice(2, 4).map((work, index) => (
										<RecentWorkCard key={index} {...work} />
									))}
								</div>
							</div>
						</TabPanel>
						<TabPanel className="tabs__tab-panel">
							<h1>UI/UX</h1>
						</TabPanel>
						<TabPanel className="tabs__tab-panel">
							<h1>PWA</h1>
						</TabPanel>
					</Tabs>
				</section>
				<section className="section3">
					<h3 className="h1 text-center">
						Got a <span className="text-secondary">Project</span> for us ? Let’s
						Connect
					</h3>
					<PrimaryButton>Contact us</PrimaryButton>
				</section>
			</main>
		</Layout>
	);
}

const recentWorks = [
	{
		title: "Testcovid",
		description: "Crossplatform app for Covid testing.",
		image: "/images/Rectangle 27.png",
		link: "#",
	},
	{
		title: "Robert Berski",
		description: "Portfolio for UI designer.",
		image: "/images/Rectangle 29.png",
		link: "#",
		imageHeight: 337,
	},
	{
		title: "Edubin",
		description: "Online E-learning mobile app.",
		image: "/images/Rectangle 28.png",
		link: "#",
	},
	{
		title: "Fastcart",
		description: "Crossplatform E-commerce Platform.",
		image: "/images/Rectangle 30.png",
		link: "#",
		imageHeight: 337,
	},
];

const RecentWorkCard = ({
	title,
	description,
	image,
	link,
	imageHeight = 348,
}) => {
	return (
		<Card>
			<div className="card__image" style={{ height: `${imageHeight}px` }}>
				<Image src={image} layout="fill" objectFit="cover" alt="" />
			</div>
			<div className="p-2">
				<h3 className="h3">{title}</h3>
				<p style={{ fontSize: "15px" }}>{description}</p>
				<a href={link} className="btn-small btn-secondary mt-2">
					View Project
				</a>
			</div>
		</Card>
	);
};
