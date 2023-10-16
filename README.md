# Medibank Coding Challenge

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [NPM Packages](#npm-packages)
- [Important Notes](#important-notes)

## Overview

This react(typescript) project is designed to meet the requirements of the Medibank Coding Challenge. The task involves fetching data from a specific web service and displaying the names of cats in alphabetical order, categorized by the gender of their owner.

**Live Demo**: [medibank.codesingh.dev](https://medibank.codesingh.dev)

## Prerequisites

Make sure you have `Node.js` and either `yarn` or `npm` installed on your machine.

## Installation

To get started, clone the repository and install the dependencies.

Using npm:

```bash
git  clone  https://github.com/Attinderkahlon/medibank-app.git
cd  medibank-app
npm  install
```

Or using Yarn:

```bash
git  clone  https://github.com/Attinderkahlon/medibank-app.git
cd  medibank-app
yarn  install
```

## Usage

After installation, you can run the app using the following command:

Using npm:

```bash
npm  run dev
```

Or using Yarn:

```bash
yarn  dev
```

## NPM packages

[Tailwind](https://tailwindui.com/) - CSS Utility classes to quickly build custom, responsive, and maintainable user interfaces.

[Redux Toolkit](https://redux-toolkit.js.org/) - Global state management solution to store cats/pets data

[Axios](https://axios-http.com/) - To make HTTP requests to APIs, handle responses, and manage asynchronous data flow more easily than with native `fetch` API.

[ESLint](https://eslint.org/) - To enforce code quality and maintain consistent coding styles across your project, helping to catch errors and potential issues during development.

[Vite](https://vitejs.dev/) - For faster development and builds, benefiting from features like native ES modules, efficient hot module replacement, and optimized production builds.

## Important Notes

- **Page Routing**: I have set up react-router-dom to manage the routing for this project, aiming to mimic a production-ready environment where multiple pages may be required.

- **Redux Store**: Even though it wasn't strictly necessary for this simple app, I've used a Redux store to manage the "cats" data. This serves to demonstrate how to manage large state data in a more complex, real-world application.

- **.env File**: I've included the .env file in the repository to make it easier for you to get started. However, I usually exclude this from version control as it's not considered best practice to expose sensitive information.
