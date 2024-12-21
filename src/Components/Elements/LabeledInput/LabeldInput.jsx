import MainInput from "../Input/MainInput"

const LabeledInput = (props) => {

    const {
        text = "Input",
        onchange,
        oninput,
        onblur,
        type,
        variant,
        placeholder,
        name,
        autofocus,
        min,
        max,
        maxlength,
        info = "",
        value,
        required = null
    } = props


    return (
        <div className="flex flex-col w-full gap-1">
            <label htmlFor={name} className="text-base text-[#c0c0c0] pl-3">{text}</label>
            <MainInput
                required={required != null ? required : ""}
                onblur={onblur}
                value={value}
                max={max}
                min={min}
                maxlength={maxlength}
                onchange={onchange}
                oninput={oninput}
                type={type}
                variant={variant}
                placeholder={placeholder}
                name={name}
                autofocus={autofocus}
                id={name}
                info={info}
            />
        </div>
    )
}


export default LabeledInput