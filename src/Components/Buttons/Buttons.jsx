export function Button(props) {
  return (
    <div className="w-64 m-auto ">
      <a href={props.href} target={props.target}>
        <button
          id={props.id}
          className="bg-indigo-600 rounded-md p-5 text-white text-center font-bold text-md hover:bg-indigo-500 cursor-pointer transition-all duration-100 hover:scale-105"
          type={props.type}
        >
          {props.value}
        </button>
      </a>
    </div>
  )
}
