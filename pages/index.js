import Image from "next/image";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { ButtonLink, PrimaryButton } from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<main className="container home">
				<section className="section1 pb-5">
					<h1 className="text-center">
						We Help People To <br />
						Shine <span className="text-secondary">Online</span>
					</h1>
					<p className="text-center my-1">
						We are here to help{" "}
						<span className="text-secondary is-bold">YOU</span> and{" "}
						<span className="text-secondary is-bold">YOUR</span> buisenss to
						grow and shine online.
					</p>
					<p className="text-center pt-3">
						<PrimaryButton>See How</PrimaryButton>
						<ButtonLink className="p-2 text-secondary ml-2 is-bold is-inline-flex lets-connect">
							<span>{"Let's connect"}</span>
							<span>→</span>
						</ButtonLink>
					</p>
					<div className="flex center">
						<div className="is-relative">
							<Image
								src="/images/Saly-1 1.svg"
								width={721}
								height={669}
								alt=""
							/>
						</div>
					</div>
				</section>
				<section className="section2 pb-5">
					<h1 className="mb-3">
						Services that will help <br />
						<span className="text-secondary">Your Buiseness</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
						<br />
						nobis ducimus voluptates optio earum repellat!
					</p>
					<div className="grid">
						{services.map((service, index) => (
							<Card key={index}>
								<Image src={service.image} alt="" width={145} height={145} />
								<h3 className="h4">{service.title}</h3>
							</Card>
						))}
					</div>
				</section>
				<section className="section3">
					<h1 className="mb-3">
						{"Let's"} see <span className="text-secondary">What</span> {"we've"}{" "}
						been <br />
						working on
					</h1>
					<p className="mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						eius laborum blanditiis qui voluptatem, iure beatae voluptates
						inventore saepe earum minus enim sequi, natus nobis veritatis?
						Reiciendis autem ducimus alias.
					</p>
					<Tabs className="tabs">
						<TabList className="tabs__tab-list">
							{["Website", "UI UX", "PWA's"].map((tab, index) => (
								<Tab className="tabs__tab" key={index}>
									<button>{tab}</button>
								</Tab>
							))}
						</TabList>
						<TabPanel className="tabs__tab-panel">
							<div className="cards">
								<div className="cards__grid">
									{featuredProjects.slice(0, 2).map((project, index) => (
										<FeaturedProjectCard key={index} {...project} />
									))}
								</div>

								<div className="cards__grid">
									{featuredProjects.slice(2, 4).map((project, index) => (
										<FeaturedProjectCard key={index} {...project} />
									))}
								</div>
							</div>
						</TabPanel>
						<TabPanel className="tabs__tab-panel">
							<h1>UI UX</h1>
						</TabPanel>
						<TabPanel className="tabs__tab-panel">
							<h1>{"PWA's"}</h1>
						</TabPanel>
					</Tabs>
					<div className="flex center">
						<PrimaryButton>More</PrimaryButton>
					</div>
				</section>
				<section className="section4">
					<h1 className="is-bold text-center mb-5">
						We {"can't"} wait to work <br />
						with <span className="text-secondary">You</span>
					</h1>
					<PrimaryButton>Lets connect</PrimaryButton>
				</section>
			</main>
		</Layout>
	);
}

const services = [
	{
		title: "UI/UX Design",
		image: "/images/╨íube 1.png",
	},
	{
		title: "Web Development",
		image: "/images/iMac 1.png",
	},
	{
		title: "Progressive Web Apps",
		image: "/images/Phone 1.png",
	},
];

const featuredProjects = [
	{
		title: "SnapChat Clone",
		image: "/images/Rectangle 22.png",
	},
	{
		title: "Pagoda Partners",
		image: "/images/Rectangle 24.png",
	},
	{
		title: "Drumlotion Production",
		image: "/images/Rectangle 23.png",
		imageHeight: 362,
	},
	{
		title: "E-learning App",
		image: "/images/Rectangle 19.png",
		imageHeight: 308,
	},
];

const FeaturedProjectCard = ({ image, title, imageHeight = 275 }) => {
	return (
		<Card>
			<div className="card__image" style={{ height: `${imageHeight}px` }}>
				<Image src={image} layout="fill" objectFit="cover" alt="" />
			</div>
			<div className="p-2">
				<h3>{title}</h3>
				<a href="#" className="text-secondary" style={{ fontSize: "16px" }}>
					View project
				</a>
			</div>
		</Card>
	);
};
