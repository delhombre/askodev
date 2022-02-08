import { classNames } from "../functions/dom";

export function PrimaryButton({ children, ...props }) {
	return (
		<Button className="btn-primary" {...props}>
			{children}
		</Button>
	);
}

export function ButtonLink({ children, className = "", ...props }) {
	return (
		<button className={classNames(className)} {...props}>
			{children}
		</button>
	);
}

export function SecondaryButton({ children, ...props }) {
	return (
		<Button className="btn-secondary" {...props}>
			{children}
		</Button>
	);
}

/**
 *
 * @param {*} children
 * @param {string} className
 * @param {string} size
 * @param {Object} props
 * @return {*}
 */
export function Button({ children, className = "", size, ...props }) {
	className = ["btn", className, size && `btn-${size}`].join(" ");
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
}
