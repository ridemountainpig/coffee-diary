# Coffee Diary

![coffee-diary-SVG](https://coffee-diary.com/api/coffeeDiarySvg)
![ridemountainpig-coffee-diary-SVG](https://coffee-diary.com/api/ridemountainpig)

Begin crafting your coffee diary, with a JSON file, chronicling the unique path you traverse with each cup.

Coffee Diary SVG can be seamlessly integrated into your `GitHub README` with
[Coffee Diary Github Action](https://github.com/marketplace/actions/coffee-diary), or displayed in any other desired location, allowing you to showcase your coffee journey.

Also you can visit your own Coffee Diary website at `coffee-diary.com/GITHUB_USERNAME`.

Like this: [coffee-diary.com/ridemountainpig](https://coffee-diary.com/ridemountainpig)

## What is Coffee Diary

#### `Coffee Diary: Your Personalized Coffee Journal, Visualized with SVG`

Coffee Diary is an innovative project that transforms your coffee experiences into visually appealing SVG graphics, all managed through a simple JSON file on GitHub. This project offers coffee enthusiasts a unique way to document their coffee journey without the hassle of traditional journaling methods.

## How to use Coffee Diary

To use Coffee Diary, follow these steps:

1. Add a `coffee-diary.json` file to your Github special repository root. `(the repo with your username)`
2. Configure coffee-diary.json with the following format:

    In this JSON configuration, each coffee diary entry is encapsulated as an object keyed by the date in a `year-month-day` format, allowing you to document your coffee experiences on a daily basis. The entries for `bean-type`, `origin`, and `flavor` enable you to capture specific details about each coffee you enjoy.

```
{
  "2024-1-24": {
      "bean-type": "GEISHA",
      "origin": "JAPAN",
      "flavor": "This exquisite Geisha
      coffee offers a delicate balance of
      floral aromas and fruity notes."
  },
  "year-month-day": {
      "bean-type": "bean type",
      "origin": "coffee origin",
      "flavor": "coffee flavor you tasted"
  }
}
```

3. Done! Visit your own Coffee Diary website at `coffee-diary.com/GITHUB_USERNAME`.

## How to use Coffee Diary github action

Coffee Diary github action marketplace link: [Coffee Diary Github Action](https://github.com/marketplace/actions/coffee-diary)

1. Add a `coffee-diary.yml` file in your repository's `.github/workflows/` path.
2. Configure `coffee-diary.yml` with the following format:

    - **Username**: Change `GITHUB_USERNAME` to your github username.

    - **Target Branch**: Change `BRANCH_NAME` to the branch you want to put Coffee Diary.

```yml
name: generate coffee diary svg

on:
    schedule:
        - cron: "0 */12 * * *"
    workflow_dispatch:

jobs:
    download-svg:
        runs-on: ubuntu-latest

        steps:
            - name: Checkout code
              uses: actions/checkout@v4

            - name: Set up Node.js
              uses: actions/setup-node@v3
              with:
                  node-version: "16.x"

            - name: Generate Coffee Diary SVG
              uses: ridemountainpig/coffee-diary@v1.0.0
              with:
                  username: GITHUB_USERNAME
                  target-branch: BRANCH_NAME
                  github-token: ${{ secrets.GITHUB_TOKEN }}
```

3. Go to actions and run `generate coffee diary svg` workflow.

4. Done! Now, navigate to your target branch and you'll find the Coffee Diary SVG. You can also integrate it into your GitHub README.
