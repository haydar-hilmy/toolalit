const LabelMainButton = (props) => {

    const {
        onchange,
        onclick, 
        value,
        type,
        variant = "bg-btn-primary",
        text = "Main Button",
        name
    } = props

    return (
        <div
        name={name}
        id={name}
        onChange={onchange}
        onClick={onclick}
        value={value}
        type={type}
        className={`${variant} flex flex-row cursor-pointer gap-4 w-fit px-4 py-2 rounded-md hover:opacity-90 active:opacity-70 duration-100`}>{text}</div>
    )
}

export default LabelMainButton