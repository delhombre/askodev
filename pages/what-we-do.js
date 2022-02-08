import Image from "next/image";
import { PrimaryButton } from "../components/Button";
import Layout from "../components/Layout";

const WhatWeDo = () => {
	return (
		<Layout>
			<main className="container what-we-do">
				<section className="section1 pb-5 mb-5">
					<h1 className="text-center">
						A Great user experience <br /> is{" "}
						<span className="text-secondary">Our Priority</span>
					</h1>
					<p className="text-center my-1">
						We create user experience with accessibility in mind. <br /> We are
						here to give modern solutions to the modern problems.
					</p>
					<div className="center mt-5">
						<PrimaryButton>Our Work</PrimaryButton>
					</div>
					<div className="center">
						<div className="is-relative image-container">
							<Image
								src="/images/Saly-19 1.png"
								width={558}
								height={612}
								alt=""
							/>
						</div>
					</div>
				</section>
				<section className="section2 py-5 mt-5">
					<div className="grid2">
						<div>
							<h1>Web Development</h1>
							<h2 className="text-secondary my-3">
								Website and Web App Development
							</h2>
							<p className="mb-5">
								A website is something that gives you and your buisness a Web
								presence. Here at Syntrax, We exactly take care of that.
							</p>
							<PrimaryButton>More</PrimaryButton>
						</div>
						<div className="image-container">
							<Image src="/images/mac 1.png" width={525} height={447} alt="" />
						</div>
					</div>
				</section>
				<section className="section3">
					<div className="grid2">
						<div className="image-container">
							<Image src="/images/pwa 1.png" width={636} height={636} alt="" />
						</div>
						<div className="text-container">
							<h1>Progressive web Apps</h1>
							<h2 className="text-secondary my-2">
								Progressive web app development
							</h2>
							<p className="mb-5">
								Progressive web apps are the futre of Modern web and We
								understand that as We’ve been working with those.
							</p>
							<PrimaryButton>More</PrimaryButton>
						</div>
					</div>
				</section>
				<section className="section4">
					<div className="grid2">
						<div>
							<h1>User interface Design</h1>
							<h2 className="text-secondary my-2">
								User interface and User experience design
							</h2>
							<p className="mb-5">
								As a Design focused digital agency we are highly concerned about
								the overall product design.
							</p>
							<PrimaryButton>More</PrimaryButton>
						</div>
						<div className="image-container">
							<Image
								src="/images/sketch 1.png"
								width={603}
								height={612}
								alt=""
							/>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default WhatWeDo;
