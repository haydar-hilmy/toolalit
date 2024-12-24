import React, { useEffect } from "react"
import ItemCard from "../Components/Elements/Cards/ItemCard"
import { ToolsData } from "../Data/ToolsData"
import MainInput from "../Components/Elements/Input/MainInput"
import { Particle } from 'jparticles'

const Home = () => {

    useEffect(() => {
        // Mengatur title halaman saat komponen dimuat
        document.title = "Toolalit App";

        // Inisialisasi efek partikel setelah komponen dipasang
        const particleEffect = new Particle('#particleContainer', {
            proximity: 90,
            range: 100,
            color: '#fff',
            lineShape: 'spider',
        });

        // Membersihkan efek partikel saat komponen di-unmount
        // return () => {
        //   particleEffect.destroy();
        // };
    }, []);


    return (
        <div className="px-5 sm:px-10">
            <div id="particleContainer" style={{ zIndex: -1, position: "fixed", height: "100vh", width: "100vw", opacity: 0.2 }}></div>
            <div style={{ borderBottomColor: "#2d2d2d", position: "relative", zIndex: 4 }} className="flex flex-col sm:flex-row mt-10 pb-5 border-b-2 gap-4">
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

            <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 gap-3 my-5">
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