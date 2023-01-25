# Twitter Clone

Project created to check what is the best way to integrate a pattern library with a website created in [independent modules](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

## Basic Overview

### Pattern Library project

The pattern library project is a group of reusable components that you can interact with in isolation thanks to [Storybook](https://storybook.js.org/).\
All components are organized using the [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) methodology and [Tailwind CSS](https://tailwindcss.com/) is used for styling.

[twitter-clone-storybook-720.webm](https://user-images.githubusercontent.com/978229/214545983-d45104ec-8019-44b5-9fa8-dc898f7ecf4c.webm)

### Website project

The website project uses the [NextJS](https://nextjs.org/) framework and integrates the components that exist in the pattern library.\
The data is included statically to facilitate this demo.

[twitter-clone-website-720.webm](https://user-images.githubusercontent.com/978229/214546173-a49753f2-be53-444d-9e5c-77329fba41d7.webm)

## Installation

Clone this repository and, from the root folder, install all the dependencies:

```bash
npm install
```

Now, if you want to run the **pattern library** project, execute this command:

```bash
npm run storybook --workspace pattern-library
```

You can access your local Storybook via `http://localhost:6006/`.

If you want to run the **website** project, run:

```bash
npm run dev --workspace website
```

You can visit the website through the url `http://localhost:3000`.

## Notes

One of the best ways to learn and improve is by sharing knowledge, so you can use this project to study and improve. I hope you find it useful!
