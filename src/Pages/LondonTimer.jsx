import { useEffect, useRef, useState } from "react";
import styled from "styled-components"

const LondonTimer = () => {
    const bodyEl = document.body;
    bodyEl.style.animationDuration = "0.2s";
    bodyEl.style.animationIterationCount = "infinite";
    bodyEl.style.animationTimingFunction = "ease-in-out";
    bodyEl.style.backgroundColor = "black";

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [secondsRemaining, setSecondsRemaining] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);
    const timerDisplayRef = useRef(null);

    const [opacity, setOpacity] = useState(1);  // Menyimpan nilai opacity

    useEffect(() => {
        const handleScroll = () => {
            const Ylevel = window.scrollY;  // Posisi scroll vertikal
            const maxVh = window.innerHeight;  // Tinggi jendela

            // Jika Ylevel lebih dari 15% dari tinggi viewport
            if (Ylevel > (maxVh * 0.15)) {
                const newOpacity = ((Ylevel * -0.3) + 90) * 0.01;
                if (newOpacity > 0.2) {
                    setOpacity(newOpacity);  // Set opacity jika lebih besar dari 0.2
                } else {
                    setOpacity(0.1);  // Set opacity ke 0.1 jika lebih kecil
                }
            } else {
                setOpacity(1);  // Set opacity ke 1 jika Ylevel <= 15% dari viewport
            }
        };

        // Menambahkan event listener untuk scroll
        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  // Efek ini hanya dijalankan sekali saat komponen pertama kali dirender

    // Fungsi untuk memformat waktu
    const formatTime = (seconds) => {
        const minutes = String(Math.floor(Math.abs(seconds) / 60)).padStart(2, '0');
        const secondsLeft = String(Math.abs(seconds) % 60).padStart(2, '0');
        const prefix = seconds < 0 ? '-' : '';
        if (seconds < 0) {
            setTimeout(() => {
                document.body.style.animationName = 'unset';
            }, 500);
        }
        return `${prefix}${minutes}:${secondsLeft}`;
    };

    // Fungsi untuk memulai timer
    const startTimer = () => {
        const totalSeconds = minutes * 60 + seconds;
        setSecondsRemaining(totalSeconds);

        if (timerInterval) {
            clearInterval(timerInterval);
        }


        const interval = setInterval(() => {
            setSecondsRemaining((prev) => {
                const newRemaining = prev - 1;
                // Jika sudah lewat 0, bisa mengatur animasi atau efek lain jika diperlukan
                if (newRemaining <= 0) {
                    document.body.style.animationName = 'blinkFast'; // Contoh animasi jika negatif
                }
                return newRemaining;
            });

        }, 1000);

        setTimerInterval(interval);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    // Fungsi untuk mereset timer
    const resetTimer = () => {
        clearInterval(timerInterval);
        setSecondsRemaining(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.style.animationName = 'unset';
    };

    // Fungsi untuk menghentikan timer
    const stopTimer = () => {
        clearInterval(timerInterval);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.style.animationName = 'unset';
    };

    // Membuat dropdown untuk menit dan detik
    const generateDropdownOptions = (count) => {
        return Array.from({ length: count + 1 }, (_, i) => (
            <option key={i} value={i}>
                {i}
            </option>
        ));
    };

    // Menangani perubahan menit
    const handleMinutesChange = (e) => {
        setMinutes(parseInt(e.target.value, 10));
    };

    // Menangani perubahan detik
    const handleSecondsChange = (e) => {
        setSeconds(parseInt(e.target.value, 10));
    };

    // Format waktu secara langsung di display
    const formattedTime = formatTime(secondsRemaining);

    const StyledLondonTimer = styled.div`
div.main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#timer {
    font-size: 30vw;
    font-weight: bold;
    color: #fff;
    text-align: center;
    user-select: none;
    position: fixed;
    z-index: 8;
}

.option {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 50px 0 0 0;
    position: relative;
    z-index: 10;
}

button {
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

select {
background-color: black;
color: white;
}

@keyframes blinkFast {
    50% {
        background-color: rgba(0,0,0,0.85);
    }
}
`

    return (
        <StyledLondonTimer>
            <div className="main">
                <div ref={timerDisplayRef} id="timer" style={{ opacity }}>
                    {formattedTime}
                </div>
            </div>

            <div className="option">
                <div className="flex flex-col gap-4 w-3/4 sm:w-1/2 md:w-1/6">
                    <div className="flex flex-col">
                        <label htmlFor="input_minutes">Minutes</label>
                        <select
                            id="input_minutes"
                            value={minutes}
                            onChange={handleMinutesChange}
                            className="px-3 py-2 border border-gray-600 rounded-md"
                        >
                            {generateDropdownOptions(60)}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="input_seconds">Seconds</label>
                        <select
                            id="input_seconds"
                            value={seconds}
                            onChange={handleSecondsChange}
                            className="px-3 py-2 border border-gray-600 rounded-md"
                        >
                            {generateDropdownOptions(60)}
                        </select>
                    </div>
                    <button
                        className="px-3 py-2 bg-btn-primary text-white w-full hover:opacity-80"
                        id="startButton"
                        onClick={startTimer}
                    >
                        Start Timer
                    </button>
                    <button
                        className="px-3 py-2 bg-btn-warning text-white w-full hover:opacity-80"
                        id="stopButton"
                        onClick={stopTimer}
                    >
                        Stop
                    </button>
                    <button
                        className="px-3 py-2 bg-btn-secondary text-white w-full hover:opacity-80"
                        id="resetButton"
                        onClick={resetTimer}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </StyledLondonTimer>
    );
};

export default LondonTimer