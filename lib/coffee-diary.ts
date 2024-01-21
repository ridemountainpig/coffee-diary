export async function getCoffeeDiaryJson(githubName: string) {
    try {
        const response = await fetch(
            `https://raw.githubusercontent.com/${githubName}/${githubName}/main/coffee-diary.json`,
        );

        if (!response.ok) {
            throw new Error(
                "Failed to fetch coffee diary json, github name not found",
            );
        }

        const coffeeDiaryJson = await response.json();
        return coffeeDiaryJson;
    } catch (error) {
        console.log("Failed to fetch coffee diary json, github name not found");
        return null;
    }
}
