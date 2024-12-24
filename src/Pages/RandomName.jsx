import React, { useEffect, useRef } from 'react';
import { getImagesFromIndexedDB, openDatabase, saveImageToIndexedDB } from '../Functions/IndexedDB';
import { convertFileToBase64 } from '../Functions/FileHandler';

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
            const gallery = document.getElementById("gallery");

            gallery.innerHTML = "";
            images.forEach((img) => {
                const imgElement = document.createElement("img");
                imgElement.src = img.image;
                imgElement.style.width = "150px";
                imgElement.style.margin = "10px";
                gallery.appendChild(imgElement);
            });
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
      displayImages()
    }, [])
    

    return (
        <>
        <div id='gallery'></div>
            <input
                ref={inputImageRef}
                onChange={uploadImage}
                id="inputImage"
                type="file"
                accept="image/*"
            />
        </>
    );
};

export default RandomName