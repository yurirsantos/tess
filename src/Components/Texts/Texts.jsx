export function Title(props) {
  return (
    <h1 className="font-bold text-white text-center text-4xl">
      {props.title}
      <code className="text-violet-500"> {props.enface}</code>
    </h1>
  )
}
