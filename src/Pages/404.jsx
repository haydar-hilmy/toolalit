const _404_ = (props) => {

    const {
        statusCode = 404,
        statusText = 'Lost in Bucket',
    } = props

    return (
        <div style={{ userSelect: "none" }} className="w-full h-lvh flex flex-col items-center justify-center content-center">
            <img className="w-[150px]" src="assets/gif/astronaut.gif" />
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-[5rem] leading-none font-bold my-0">
                    {statusCode}
                </h1>
                <h2 className="text-xl font-normal">{statusText}</h2>
            </div>
            <span className="w-[90%] sm:w-3/4 md:w-1/2 text-center tracking-wide mt-4 text-base font-light">
                Astronauts aren't the only ones who get lost in bucket. Looks like you’ve taken a wrong turn. Let’s get you back on track!
            </span>
        </div>
    )
}

export { _404_ }