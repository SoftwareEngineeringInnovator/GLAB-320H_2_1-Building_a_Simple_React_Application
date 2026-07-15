function Header() {
  return <h1>Simple React Application</h1>
}

function Content() {
  return <p>This is my first React Application, wish me luck!</p>
}

function Footer() {
  return <h5>Created by Fredy Chilito</h5>
}

export default function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}