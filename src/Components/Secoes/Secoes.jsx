import { Navbar } from '../Navbar/Navbar'

export function Main(props) {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      {props.children}
    </main>
  )
}
