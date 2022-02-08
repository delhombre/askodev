import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useAutofocus } from "../functions/hooks";

/**
 * Represents a form field.
 *
 * @param {string} type
 * @param {string} name
 * @param {function} onInput
 * @param {string} value
 * @param {string} error
 * @param {boolean} autofocus
 * @param {function} component
 * @param {React.Children} children
 * @param {string} className
 * @param {string} wrapperClass
 * @param props
 */
export function Field({
	name,
	onInput,
	value,
	error,
	children,
	type = "text",
	className = "",
	wrapperClass = "",
	component = null,
	...props
}) {
	// Hooks
	const [dirty, setDirty] = useState(false);
	const ref = useRef(null);
	useAutofocus(ref, props.autofocus);
	const showError = error && !dirty;

	function handleInput(e) {
		if (dirty === false) {
			setDirty(true);
		}

		if (e.target.value !== "") {
			e.target.parentNode.classList.add("has-value");
		} else if (e.target.value === "") {
			e.target.parentNode.classList.remove("has-value");
		}

		if (onInput) {
			onInput(e);
		}
	}

	// If the field has an error and not changed, show the error
	if (showError) {
		className += " is-invalid";
	}

	// Attribut to pass to the field
	const attr = {
		name,
		id: name,
		className,
		onInput: handleInput,
		type,
		...(value === undefined ? {} : { value }),
		...props,
	};

	// Find the field to render
	const FieldComponent = useMemo(() => {
		if (component) {
			return component;
		}

		switch (type) {
			case "textarea":
				return FieldTextarea;
			case "checkbox":
				return FieldCheckbox;
			default:
				return FieldInput;
		}
	}, [component, type]);

	// If the error changed, we consider the field as "clean"
	useLayoutEffect(() => {
		setDirty(false);
	}, [error]);

	if (FieldComponent === FieldCheckbox) {
		return (
			<div className={`form-check ${wrapperClass}`} ref={ref}>
				<FieldComponent {...attr} />
				{children && (
					<label htmlFor={name} className="form-check-label">
						{children}
					</label>
				)}
				{showError && <div className="invalid-feedback">{error}</div>}
			</div>
		);
	}

	return (
		<div className={`form-group ${wrapperClass}`} ref={ref}>
			{children && <label htmlFor={name}>{children}</label>}
			<FieldComponent {...attr} />
			{showError && <div className="invalid-feedback">{error}</div>}
		</div>
	);
}

function FieldTextarea(props) {
	return <textarea {...props} />;
}

function FieldInput(props) {
	return <input {...props} />;
}

function FieldCheckbox(props) {
	return <input {...props} />;
}
