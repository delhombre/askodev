/**
 * Generate a class name for a DOM element based on the given class names.
 *
 * @param  {...string|null} classNames
 */
export function classNames(...classNames) {
	return classNames
		.filter((className) => className !== null && className !== false)
		.join(" ");
}
