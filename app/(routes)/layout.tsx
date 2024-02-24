export default function Layout({
	children,
	recipeModal,
}: {
	children: React.ReactNode;
	recipeModal: React.ReactNode;
}) {
	return (
		<>
			{recipeModal}
			{children}
		</>
	);
}
