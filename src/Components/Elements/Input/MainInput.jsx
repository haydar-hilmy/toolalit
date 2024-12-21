const MainInput = (props) => {
    const {
        onchange,
        oninput,
        onblur,
        type,
        variant,
        placeholder,
        name,
        autofocus,
        maxlength,
        max,
        min,
        id,
        info = "",
        value,
        required = null,
        disabled = null
    } = props

    return (
        <div className="flex flex-col gap-1">
            <input
                required={required != null ?required : ""}
                disabled={disabled != null ?disabled : false}
                onBlur={onblur}
                value={value}
                id={id}
                max={max}
                min={min}
                maxLength={maxlength}
                autoFocus={autofocus}
                className={`${variant} disabled:opacity-50 px-5 py-2 rounded-md bg-secondary-dark border border-[#214d8f] outline-none focus:outline-1 focus:outline-[#0066ff]`} type={type} name={name} onInput={oninput} onChange={onchange} placeholder={placeholder} />
            {
                info != "" ? (
                    <>
                        <span className="text-sm font-normal pl-3 select-none opacity-80">{info}</span>
                    </>
                ) : ""
            }
        </div>
    )
}

export default MainInput