import { CardGiftcard } from "@mui/icons-material"
import { Link } from "react-router-dom"

const ItemCard = (props) => {
    const {
        infoData = {
            title: "It's a Card",
            desc: "Lorem de ipsum dolor sit amet",
            icon: <CardGiftcard />,
            link: "/"
        } 
    } = props

    return (
        <>
            <Link to={infoData.link}>
                <div className="w-full h-full p-4 gap-3 items-center flex flex-row opacity-90 cursor-pointer rounded-xl border border-[#214d8f] bg-secondary-dark duration-100 active:scale-95 hover:border-[#0066ff] hover:opacity-100 hover:shadow-md hover:shadow-[#0066ff75]">
                    <div className="text-base">{infoData.icon}</div>
                    <div>
                        <h3 className="text-xl font-medium">{infoData.title}</h3>
                        <p className="text-sm font-normal">{infoData.desc}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ItemCard