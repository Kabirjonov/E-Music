import type { ChangeEvent } from "react";

export function SearchBar() {
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value;
		// send logic to backend
	};
	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	const handleKeyDown = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e);
		if (e.code === "a") {
			console.log("A");
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				onChange={handleSearch}
				onKeyDown={handleKeyDown}
				placeholder='Search track...'
				id=''
			/>
		</form>
	);
}
