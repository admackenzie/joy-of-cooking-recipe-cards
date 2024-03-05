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

// Hide component when scrolling upward
/* 	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.scrollY;

		// Show nav at this distance in pixels from the top or bottom
		const threshold = 300;

		const maxY =
			document.body.scrollHeight - threshold <=
			currentScrollPos + window.innerHeight;

		const minY = currentScrollPos <= threshold;

		// Show nav when the user scrolls down and when the user is at the top or the bottom of the content
		currentScrollPos > prevScrollPos || maxY || minY
			? setVisible(true)
			: setVisible(false);

		setPrevScrollPos(currentScrollPos);
	}, 50);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}); */
