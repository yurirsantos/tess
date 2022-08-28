export function Input(props) {
  return (
    <div className="col-span-6 sm:col-span-4 mt-5 mb-5 p-2">
      <label
        htmlFor={props.htmlFor}
        className="block text-lg font-semibold text-white"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className="mt-1 block w-full shadow-sm sm:text-sm rounded-md bg-neutral-600 border-none placeholder-neutral-400 p-3 text-white"
        placeholder={props.placeholder}
        required
      />
    </div>
  )
}

export function Textarea(props) {
  return (
    <div className="col-span-6 sm:col-span-4 mt-5 mb-5 p-2">
      <label
        htmlFor={props.htmlFor}
        className="block text-lg font-semibold text-white"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <textarea
          name={props.name}
          id={props.id}
          rows={3}
          className="mt-1 block w-full shadow-sm sm:text-sm rounded-md bg-neutral-600 border-none placeholder-neutral-400 p-3 text-white"
          required
        />
      </div>
    </div>
  )
}
