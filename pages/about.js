import Image from "next/image";
import { useRouter } from "next/router";
import { PrimaryButton } from "../components/Button";
import Layout from "../components/Layout";

export default function About() {
	const router = useRouter();

	return (
		<Layout>
			<main className="container about">
				<section className="section1 pb-5">
					<h1 className="text-center">
						We are helping <span className="text-primary">people</span> with{" "}
						<br />
						building their <span className="text-primary">brands</span>.
					</h1>
					<p className="text-center my-1">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
						asperiores repellendus sequi, nemo libero unde! Nobis illo ad vel.
					</p>
					<div className="center">
						<div className="is-relative image-container">
							<Image
								src="/images/hand 1.svg"
								width={615}
								height={595}
								alt="about"
							/>
						</div>
					</div>
					<div className="center mt-5">
						<PrimaryButton>Our Story</PrimaryButton>
					</div>
				</section>
				<section className="section2">
					<div className="grid2">
						<div>
							<h1 className="mb-1">
								How we <span className="text-primary">started</span> doing{" "}
								<br /> what we <span className="text-primary">love</span>
							</h1>
							<p className="mb-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie blandit et maecenas pharetra, imperdiet mi rutrum.
							</p>
							<p className="mb-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie blandit et maecenas pharetra, imperdiet mi rutrum.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit
							</p>
							<PrimaryButton>Our work</PrimaryButton>
						</div>
						<div className="image-container">
							<Image
								src="/images/annie-spratt-MChSQHxGZrQ-unsplash 1.png"
								width={492}
								height={626}
								alt=""
							/>
						</div>
					</div>
				</section>
				<section className="section3">
					<div className="grid2">
						<div>
							<Image
								src="/images/Rectangle 33.png"
								width={492}
								height={627}
								alt=""
							/>
						</div>
						<div className="text-container">
							<h1 className="mb-1">
								We are Concerned about <br /> the{" "}
								<span className="text-primary">End Product</span>
							</h1>
							<p className="mb-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie blandit et maecenas pharetra, imperdiet mi rutrum.
							</p>
							<p className="mb-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie blandit et maecenas pharetra, imperdiet mi{" "}
							</p>
							<PrimaryButton>Our work</PrimaryButton>
						</div>
					</div>
				</section>
				<section className="section4">
					<h3 className="h1 text-center">
						Excited to work <span className="text-primary">with</span> us ?{" "}
						<br /> Lets Connect
					</h3>
					<PrimaryButton onClick={() => router.push("/contact")}>
						Contact us
					</PrimaryButton>
				</section>
			</main>
		</Layout>
	);
}
