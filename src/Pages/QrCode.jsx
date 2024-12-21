import { useEffect } from "react";
import { useState } from "react";
import QRCode from 'qrcode'
import CheckboxLabel from "../Components/Elements/Checkbox/CheckboxLabel";
import MainInput from '../Components/Elements/Input/MainInput';
import MainButton from '../Components/Elements/Button/MainButton';
import LabeledInput from "../Components/Elements/LabeledInput/LabeldInput";
import styled from "styled-components";

const QrCode = () => {
    const [text, setText] = useState("Haydar Hilmy");

    const [titleQRCode, setTitleQRCode] = useState("Scroll Down");
    const [showTitleQRCode, setShowTitleQRCode] = useState(true)

    const [sizeQRCode, setSizeQRCode] = useState(3)
    const [sizeTitle, setSizeTitle] = useState(3)
    const [qrCodeUrl, setQrCodeUrl] = useState("");

    let optionContent = document.getElementById('option-content')

    useEffect(() => {
        generateQR(text)
    }, [])

    const StyledTitle = styled.h1`
    font-size: calc(1*${sizeTitle}rem);
    font-weight: 600;
    `


    const generateQR = async (text) => {
        try {
            const options = {
                width: sizeQRCode * 100, // Lebar QR Code
                margin: 2,  // Margin di sekitar QR Code
                padding: 10,
                color: {
                    dark: "#000000", // Warna hitam (default)
                    light: "#FFFFFF" // Warna putih (default)
                }
            };
            const url = await QRCode.toDataURL(text, options); // Generate QR dengan opsi
            setQrCodeUrl(url);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        window.scrollTo(0, 0);
        if (text.trim()) {
            setTimeout(() => {
                generateQR(text);
            }, 1000);
        }
    };

    const handleBlurSizeQRCode = (val) => {
        if (val >= 1 && val <= 10) {
            setSizeQRCode(val)
        } else if (val < 1) {
            setSizeQRCode(1)
        } else if (val > 10) {
            setSizeQRCode(10)
        }
    }
    const handleBlurSizeTitle = (val) => {
        if (val >= 1 && val <= 10) {
            setSizeTitle(val)
        } else if (val < 1) {
            setSizeTitle(1)
        } else if (val > 10) {
            setSizeTitle(10)
        }
    }

    return (
        <>
            <div className="h-screen flex items-center justify-center flex-col gap-3">
                {qrCodeUrl && <img src={qrCodeUrl} alt="Generated QR Code" />}
                {
                    showTitleQRCode ? <StyledTitle>{titleQRCode}</StyledTitle> : ""
                }
            </div>
            <div id="option-content" className="h-4/5 md:h-screen flex flex-col md:flex-row items-center justify-evenly gap-3 bg-primary-dark">
                <div className="hidden md:h-screen md:flex items-center justify-center flex-col gap-3">
                    [ Preview ]
                    {qrCodeUrl && <img src={qrCodeUrl} alt="Generated QR Code" />}
                    {
                        showTitleQRCode ? <StyledTitle>{titleQRCode}</StyledTitle> : ""
                    }
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-10">
                    <LabeledInput
                        text="Size QRCode"
                        placeholder="enter value of size"
                        info="range 1-10"
                        max={10}
                        min={1}
                        onchange={(e) => setSizeQRCode(e.target.value)}
                        onblur={(e) => handleBlurSizeQRCode(e.target.value > 10 ? 10 : e.target.value < 1 ? 1 : e.target.value)}
                        value={sizeQRCode}
                        type="number"
                        name="sizeQRCODE"
                        required={true}
                    />
                    <LabeledInput
                        text="Size Title"
                        placeholder="enter value of size"
                        info="range 1-10"
                        max={10}
                        min={1}
                        onchange={(e) => setSizeTitle(e.target.value)}
                        onblur={(e) => handleBlurSizeTitle(e.target.value > 10 ? 10 : e.target.value < 1 ? 1 : e.target.value)}
                        value={sizeTitle}
                        type="number"
                        name="sizeTitle"
                        required={true}
                    />
                    <LabeledInput
                        required={true}
                        text="QRCode Value"
                        placeholder="enter value"
                        onchange={(e) => setText(e.target.value)}
                        value={text}
                        type="text"
                        name="valueQRCODE"
                    />
                    <CheckboxLabel
                        onchange={(e) => setShowTitleQRCode(!e.target.checked)}
                        text="Show Title?"
                        value={showTitleQRCode}
                    />
                    <MainButton
                        text="Generate"
                        type={"submit"}
                    />
                </form>
            </div>
        </>
    );


}

export default QrCode