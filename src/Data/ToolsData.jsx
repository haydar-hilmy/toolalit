import { Casino, Group, MusicNote, QrCode, Shuffle, TextFields, Timer } from "@mui/icons-material";

const ToolsData = [
    {
        title: "Random Number Picker",
        desc: "Easily generate random numbers for your needs",
        icon: <Casino/>,
        link: "/random-number",
    },
    {
        title: "Random Name Picker",
        desc: "Pick names randomly for events, raffles, or more.",
        icon: <Shuffle/>,
        link: "/random-name",
    },
    {
        title: "Random Group Maker",
        desc: "Divide names into random groups effortlessly.",
        icon: <Group/>,
        link: "/random-name",
    },
    {
        title: "London Timer",
        desc: "A versatile tool that provides a simple and easy-to-use timer and stopwatch.",
        icon: <Timer/>,
        link: "/london-timer",
    },
    {
        title: "Sound Board",
        desc: "Create and play custom sound effects easily.",
        icon: <MusicNote/>,
        link: "/sound-board",
    },
    {
        title: "Running Text",
        desc: "Generate scrolling text for announcements or displays.",
        icon: <TextFields/>,
        link: "/running-text",
    },
    {
        title: "QR Code Generator",
        desc: "Quickly create QR codes for links or data.",
        icon: <QrCode/>,
        link: "/qrcode",
    },
]

export { ToolsData }