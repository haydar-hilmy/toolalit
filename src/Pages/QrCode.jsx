import { useEffect } from "react";
import { useState } from "react";
import QRCode from "react-qr-code"

const QrCode = () => {
    const [errorLevel, setErrorLevel] = useState('M'); // Level koreksi kesalahan awal

    // Fungsi untuk memilih level koreksi kesalahan secara acak
    const getRandomErrorLevel = () => {
        const levels = ['L', 'M', 'Q', 'H'];
        return levels[Math.floor(Math.random() * levels.length)];
    };

    // Mengubah level koreksi kesalahan setiap 3 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setErrorLevel(getRandomErrorLevel());
        }, 3000); // Ganti level koreksi setiap 3 detik
        return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
    }, []);
    return (
        <>
            <QRCode 
            value="LAHH"
            errorCorrectionLevel={errorLevel}
            size={300}
            fgColor="#000"
            />
        </>
    )
}

export default QrCode