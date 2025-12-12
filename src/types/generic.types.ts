export async function fetchFromSpotify<T>(
	endpoint: string,
	params?: Record<string, string>
): Promise<T> {
	const url = new URL(`/api/${endpoint}`);
	if (params) {
		Object.entries(params).forEach(([key, value]) => {
			url.searchParams.append(key, value);
		});
	}

	const response = await fetch(url.toString());

	const data = (await response.json()) as { data: T };
	return data.data;
}
//  eslatma bu dastur ozim tomonimdan typescript amalyot qilib RedGroup kanali darsligidan korib yasadim
// bu yerda yozgan har bir code Kabirjonov Oxunjonning qoli bilan yozilgan
