// Header component displays the main title at the top of the page
function Header() {
  return <h1>Simple React Application</h1>
}

// Content component receives information through props, so props.text controls the message and props.color controls the text color
function Content(props) {
  return (
    <p style={{ color: props.color }}>
      {props.text}
    </p>
  )
}

// Footer component displays the author information at the bottom
function Footer() {
  return <h2>Created by Fredy Chilito</h2>
}

// App is the main component of the React application
export default function App() {
  return (
    <>
      {/* Displays the Header component */}
      <Header />

      {/* Reuses the Content component with blue text */}
      <Content
        color="blue"
        text="This is my first React Application!"
      />

      {/* Reuses the Content component with red text */}
      <Content
        color="red"
        text="Wish me luck..."
      />

      {/* Reuses the Content component with green text */}
      <Content
        color="green"
        text="I think I've got it!"
      />

      {/* Displays the Footer component */}
      <Footer />
    </>
  )
}