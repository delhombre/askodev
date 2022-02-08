import Image from "next/image";
import { Field } from "../components/Form";
import Layout from "../components/Layout";

export default function Contact() {
	return (
		<Layout>
			<main className="container contact">
				<h1>Let’s Get Connected</h1>
				<p>
					Let’s get Connected and Make that{" "}
					<span className="text-secondary" style={{ fontWeight: 600 }}>
						Dream
					</span>{" "}
					<span className="text-secondary" style={{ fontWeight: 600 }}>
						Project
					</span>{" "}
					of{" "}
					<span className="text-secondary" style={{ fontWeight: 600 }}>
						Your’s
					</span>
				</p>
				<div className="grid2">
					<form action="#">
						<Field name="name" type="text" required>
							Name
						</Field>
						<Field name="email" type="email" required>
							Email
						</Field>
						<Field name="message" type="textarea" required>
							Message
						</Field>
						<button className="btn-primary" type="submit">
							Send
						</button>
					</form>
					<div className="image-container">
						<Image src="/images/finaly 1.svg" width={599} height={599} alt="" />
					</div>
				</div>
			</main>
		</Layout>
	);
}
