import { useCallback, useEffect, useState } from "react";

/**
 * Focus the first input field in the form
 * @param {boolean} focus
 */
export function useAutofocus(ref, focus) {
	useEffect(() => {
		if (focus && ref.current) {
			const input = ref.current.querySelector("input, textarea");
			if (input) {
				input.focus();
			}
		}
	}, [focus, ref]);
}

/**
 * Alternate between two values
 */
export function useToggle(initialValue = null) {
	const [value, setValue] = useState(initialValue);
	return [value, useCallback(() => setValue((v) => !v), [])];
}
