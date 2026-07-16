# GLAB 320H.2.1 - Building a Simple React Application

A beginner-friendly React application built with **Vite** and **JavaScript**. This project was created to practice the basic structure of a React application, reusable components, JSX, props, inline styling, and rendering components in the browser.

## Project Overview

This application displays:

- A header with the application title
- Three reusable content components
- Different text and color values passed through props
- A footer with the author's name

The project started with the default Vite React template. The original boilerplate code and CSS were removed so the React components could be created step by step.

## Learning Objectives

This lab demonstrates how to:

- Create a React application with Vite
- Understand the basic React and Vite project structure
- Create functional React components
- Render components inside the main `App` component
- Reuse the same component multiple times
- Pass information to components using props
- Use JavaScript values inside JSX
- Apply inline styles in React
- Run lint and production build checks

## Technologies Used

- React
- JavaScript
- JSX
- Vite
- React DOM
- Oxlint
- HTML
- CSS
- Git and GitHub
- Visual Studio Code

## Main React Components

### Header

The `Header` component displays the main title of the application.

```jsx
function Header() {
  return <h1>Simple React Application</h1>
}
```

### Content

The `Content` component receives `text` and `color` props. This allows the same component to display different messages and text colors.

```jsx
function Content(props) {
  return (
    <p style={{ color: props.color }}>
      {props.text}
    </p>
  )
}
```

### Footer

The `Footer` component displays the author information at the bottom of the page.

```jsx
function Footer() {
  return <h2>Created by Fredy Chilito</h2>
}
```

## How Props Are Used

The `App` component renders the reusable `Content` component three times:

```jsx
<Content
  color="blue"
  text="This is my first React Application!"
/>

<Content
  color="red"
  text="Wish me luck..."
/>

<Content
  color="green"
  text="I think I've got it!"
/>
```

Each component receives different values, but all three use the same `Content` component structure.

## Project Structure

```text
GLAB-320H_2_1-Building_a_Simple_React_Application/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/SoftwareEngineeringInnovator/GLAB-320H_2_1-Building_a_Simple_React_Application.git
```

### 2. Navigate into the project folder

```bash
cd GLAB-320H_2_1-Building_a_Simple_React_Application
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the Vite development server

```bash
npm run dev
```

Open the local address displayed in the terminal. Vite normally uses an address such as:

```text
http://localhost:5173/
```

The exact port may be different if that port is already being used.

## Available npm Commands

### Start the development server

```bash
npm run dev
```

### Check the code with Oxlint

```bash
npm run lint
```

The completed project passed the lint check with:

```text
Found 0 warnings and 0 errors.
```

### Create the production build

```bash
npm run build
```

The production files are created inside the `dist` folder.

### Preview the production build

```bash
npm run preview
```

Vite normally previews the production build at an address such as:

```text
http://localhost:4173/
```

## Application Output

The completed application displays:

```text
Simple React Application

This is my first React Application!

Wish me luck...

I think I've got it!

Created by Fredy Chilito
```

The three content messages appear in blue, red, and green.

## Key React Concepts Practiced

### Components

Components are reusable JavaScript functions that return JSX.

### JSX

JSX allows HTML-like elements to be written inside JavaScript.

### Props

Props allow a parent component to send information to a child component.

### React Fragments

The empty fragment tags below group multiple components without adding an extra HTML element:

```jsx
<>
  <Header />
  <Content />
  <Footer />
</>
```

### Inline Styling

React inline styles use a JavaScript object:

```jsx
style={{ color: props.color }}
```

## Repository

[View the project on GitHub](https://github.com/SoftwareEngineeringInnovator/GLAB-320H_2_1-Building_a_Simple_React_Application)

## Author

Fredy Chilito  
Software Engineering Student  
Created as part of the Per Scholas Software Engineering Program.  
Project: GLAB 320H.2.1 - Building a Simple React Application