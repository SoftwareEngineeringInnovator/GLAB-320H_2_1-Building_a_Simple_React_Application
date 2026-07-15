function Header() {
  return <h1>Simple React Application</h1>
}

function Content(props) {
  return <p>{props.text}</p>
}

function Footer() {
  return <h2>Created by Fredy Chilito</h2>
}

export default function App() {
  return (
    <>
      <Header />

      <Content text="This is my first React Application!" />
      <Content text="Wish me luck..." />
      <Content text="I think I've got it!" />

      <Footer />
    </>
  )
}