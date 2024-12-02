import { useEffect } from "react"
import ItemCard from "../Components/Elements/Cards/ItemCard"
import { ToolsData } from "../Data/ToolsData"
import MainInput from "../Components/Elements/Input/MainInput"


const Home = () => {

    useEffect(() => {
        document.title = "Toolalit App"
    }, [])


    return (
        <div className="px-5 sm:px-10">
            <div style={{ borderBottomColor: "#2d2d2d" }} className="flex flex-row mt-10 pb-5 border-b-2">
                <div style={{ flex: 1 }} className="flex flex-col gap-2">
                    <h1 style={{ fontFamily: "Ubuntu" }} className="text-5xl">
                        Toolalit
                    </h1>
                    <h3>
                        Your All-in-One Toolkit for Every Event and Task!
                    </h3>
                </div>
                <div className="flex items-end">
                    <MainInput name="search" placeholder="Search Tools..." />
                </div>
            </div>

            <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {
                    ToolsData.map((data, index) => (
                        <div key={index}>
                            <ItemCard infoData={data} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home