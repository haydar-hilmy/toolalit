import { useEffect } from "react"

const Home = () => {

    useEffect(() => {
      document.title = "Toolalit App"
    }, [])
    

    return (
        <>
            HOME PAGE
        </>
    )
}

export default Home