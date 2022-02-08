/**
 * Icon based on the sprite in public folder
 *
 * @param {{name: string}} props
 */
const Icon = ({ name, size }) => {
	const className = `icon icon-${name}`;
	const href = `/sprite.svg#${name}`;

	return (
		<svg className={className} width={size} height={size}>
			<use xlinkHref={href} />
		</svg>
	);
};

export default Icon;
