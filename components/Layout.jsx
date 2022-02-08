import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const footerMediaIcons = [
	{ path: "/images/facebook 1.svg", alt: "link to facebook" },
	{ path: "/images/twitter 1.svg", alt: "link to twitter" },
	{ path: "/images/instagram 1.svg", alt: "link to instagram" },
	{ path: "/images/dribbble 1.svg", alt: "link to dribbble" },
	{ path: "/images/LinkedIn 1.svg", alt: "link to linkedin" },
];

const navLinks = [
	{ path: "/", text: "Home" },
	{ path: "/work", text: "Work" },
	{ path: "/what-we-do", text: "What we do" },
	{ path: "/about", text: "About" },
	{ path: "/contact", text: "Contact" },
];

const Layout = ({ children }) => {
	const { pathname } = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const headerNavRef = useRef(null);

	const handleBurgerClick = (e) => {
		e.preventDefault();

		if (headerNavRef) {
			const headerNav = headerNavRef.current;

			headerNav.parentNode.classList.toggle("is-open");

			isOpen ? enableBodyScroll(headerNav) : disableBodyScroll(headerNav);

			setIsOpen(!isOpen);
		}
	};

	return (
		<div className="page-wrapper">
			<nav className="header">
				<div className="header__home">
					<Link href="/">
						<a>Syntrax</a>
					</Link>
				</div>
				<ul className="header-nav" ref={headerNavRef}>
					{navLinks.map((link) => (
						<li key={link.text}>
							<Link href={link.path}>
								{pathname === link.path ? (
									<a aria-current>{link.text}</a>
								) : (
									<a>{link.text}</a>
								)}
							</Link>
						</li>
					))}
				</ul>
				<ul className="header-side">
					<li className="header__burger">
						<button onClick={handleBurgerClick}>
							<span>Afficher le menu</span>
						</button>
					</li>
				</ul>
			</nav>
			{children}
			<footer className="footer">
				<div>
					<div className="footer-title">Syntrax</div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
						labore, Lorem, ipsum. amet doloremque?
					</p>
				</div>
				<div>
					<div className="footer-title">Contact</div>
					<p>
						<a
							href="mailto:contactatsyntrax@gmail.com"
							style={{ display: "flex", alignItems: "center" }}
						>
							<Image
								src="/images/mail 1.svg"
								alt="mail icon"
								width={30}
								height={30}
							/>
							<span className="ml-1">contactatsyntrax@gmail.com</span>
						</a>
					</p>
					<p className="mt-2">
						<a
							href="tel:+91 6266625558"
							style={{ display: "flex", alignItems: "center" }}
						>
							<Image
								src="/images/phone 1.svg"
								alt="mail icon"
								width={30}
								height={30}
							/>
							<span className="ml-1">+91 6266625558</span>
						</a>
					</p>
				</div>
				<div>
					<div className="footer-title">About</div>
					<p>
						<a href="#">About Us</a>
					</p>
					<p>
						<a href="#">Contact Us</a>
					</p>
				</div>
				<div className="footer__medias">
					{footerMediaIcons.map((icon, index) => (
						<a href="#" key={index}>
							<Image src={icon.path} alt={icon.alt} width={30} height={30} />
						</a>
					))}
				</div>
				<div className="footer__copyright">
					<Image src="/images/Vector.svg" width={25} height={25} alt="" />
					<span className="ml-2">
						{new Date().getFullYear()} Syntrax.in All Rights Reserved.
					</span>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
