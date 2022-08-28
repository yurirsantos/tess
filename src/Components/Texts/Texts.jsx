export function Title(props) {
  return (
    <h1 className="font-normal text-white text-center text-2xl sm:text-4xl">
      {props.title}
      <span className="text-violet-500 font-bold"> {props.enface}</span>
    </h1>
  )
}
