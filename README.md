# Twitter Clone

Project created to check what is the best way to integrate a pattern library with a website created in independent modules.

## Basic Overview

### Pattern Library project

The pattern library project is a group of reusable components that you can interact with in isolation thanks to Storybook.\
All components are organized using the atomic design methodology and Tailwind CSS is used for styling.

### Website project

The website project uses the NextJS framework and integrates the components that exist in the pattern library.\
The data is included statically to facilitate this demo.

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
