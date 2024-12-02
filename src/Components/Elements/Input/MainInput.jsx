const MainInput = (props) => {
    const { onchange, oninput, type, variant, placeholder, name, autofocus } = props

    return (
        <>
            <input autoFocus={autofocus} className={`${variant} px-5 py-2 rounded-md bg-secondary-dark border border-[#214d8f] outline-none focus:outline-1 focus:outline-[#0066ff]`} type={type} name={name} onInput={oninput} onchange={onchange} placeholder={placeholder}  />
        </>
    )
}

export default MainInput