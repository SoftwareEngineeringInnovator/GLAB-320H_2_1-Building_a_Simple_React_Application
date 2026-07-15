function Header() {
  return <h1>Simple React Application</h1>
}

function Content() {
  return <p>This is my first React Application, wish me luck!</p>
}

export default function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}