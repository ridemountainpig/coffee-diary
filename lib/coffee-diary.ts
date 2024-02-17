export async function getCoffeeDiaryJson(githubName: string) {
    try {
        const response = await fetch(
            `https://raw.githubusercontent.com/${githubName}/${githubName}/main/coffee-diary.json`,
        );

        if (!response.ok) {
            throw new Error("Failed to fetch coffee diary json");
        }

        try {
            const coffeeDiaryJson = await response.json();
            return coffeeDiaryJson;
        } catch (jsonError) {
            throw new Error("Failed to parse JSON");
        }
    } catch (error) {
        throw error;
    }
}
