import React, { useEffect, useRef } from 'react';
import { getImagesFromIndexedDB, openDatabase, saveImageToIndexedDB } from '../Functions/IndexedDB';
import { convertFileToBase64 } from '../Functions/FileHandler';
import LabelMainButton from '../Components/Elements/Button/LabelMainButton';
import MainButton from '../Components/Elements/Button/MainButton';
import $ from 'jquery'

const RandomName = () => {
    const inputImageRef = useRef(null);

    const uploadImage = async (event) => {
        const file = event.target.files[0];
        console.log(file);

        try {
            const db = await openDatabase("randomName")
            const imageBase64 = await convertFileToBase64(file)
            const id = await saveImageToIndexedDB(db, "randomName", imageBase64)
            console.log(id)
        } catch (error) {
            console.error(error)
        }
    };

    async function displayImages() {
        try {
            const db = await openDatabase("randomName");
            const images = await getImagesFromIndexedDB(db, "randomName");
            const bgImage = document.getElementById("bg-image");

            bgImage.innerHTML = "";
            images.forEach((img) => {
                bgImage.style.backgroundImage = `url(${img.image})`
            });
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        displayImages()
        $("#settingsTab").hide()

        $("#openSettingsBtn").on('click', () => {
            $("#settingsTab").show(200)
        })
    }, [])


    return (
        <>

            <div className='w-screen h-screen'>
                <div
                    style={{
                        width: "100vw",
                        height: "100vh",
                        position: "fixed",
                        userSelect: "none",
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                    id="bg-image"></div>
            </div>

            {/* SETTING BUTTON */}
            <div className='w-screen bg-primary-dark px-4 py-2 flex flex-col items-center'>
                <MainButton name="openSettingsBtn" text="Open Settings" />
            </div>


            {/* SETTINGS */}
            <div id='settingsTab' style={{ 
                backgroundColor: "rgba(0, 0, 0, 0.8)"
             }} className='select-none flex overflow-auto items-center justify-center h-screen w-screen fixed top-0 left-0 z-10'>
                <label htmlFor='inputImage'>
                    <LabelMainButton text="Add Image"></LabelMainButton>
                </label>
                <input
                    ref={inputImageRef}
                    onChange={uploadImage}
                    id="inputImage"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                />
            </div>
        </>
    );
};

export default RandomName