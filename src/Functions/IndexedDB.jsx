// Fungsi untuk membuka atau membuat database IndexedDB
function openDatabase(storeName = null) {
    let dbName = "TOOLALIT_DB" 
    if (storeName != null) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(dbName, 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(storeName)) {
                    db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
                }
            };

            request.onsuccess = (event) => {
                resolve(event.target.result);
            };

            request.onerror = (event) => {
                reject(event.target.error);
            };
        });
    }
}

// Fungsi untuk menyimpan data gambar ke IndexedDB
function saveImageToIndexedDB(db, storeName, imageBase64) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);

        const request = store.add({ image: imageBase64 });

        request.onsuccess = () => {
            resolve(request.result); // ID dari data yang disimpan
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}

// Fungsi untuk mengambil semua data gambar dari IndexedDB
function getImagesFromIndexedDB(db, storeName) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);

        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}

// Fungsi untuk menghapus gambar berdasarkan ID
function deleteImageFromIndexedDB(db, storeName, id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);

        const request = store.delete(id);

        request.onsuccess = () => {
            resolve();
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}

export { openDatabase, saveImageToIndexedDB, getImagesFromIndexedDB, deleteImageFromIndexedDB }