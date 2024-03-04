/**
 * Delay a function by only calling it every x seconds
 * @param func - Function to be delayed
 * @param delay - Delay in milliseconds
 * @returns - None
 */
export const debounce = (func: (...args: any[]) => void, delay: number) => {
	let timeout: NodeJS.Timeout;

	return (...args: any[]) => {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			clearTimeout(timeout);

			func(...args);
		}, delay);
	};
};
