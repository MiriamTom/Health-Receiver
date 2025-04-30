function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("WearableDataDB", 1);
        request.onerror = (e) => reject("IndexedDB error: " + e.target.errorCode);
        request.onsuccess = (e) => resolve(e.target.result);

        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            db.createObjectStore("deviceData", { keyPath: "id" }); // id = Firestore doc id
        };
    });
}

async function getCachedDeviceData(docId) {
    const db = await openDatabase();
    return new Promise((resolve) => {
        const tx = db.transaction("deviceData", "readonly");
        const store = tx.objectStore("deviceData");
        const request = store.get(docId);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => resolve(null);
    });
}

async function cacheDeviceDataToIndexedDB(docId, timestamp, jsonData) {
    const db = await openDatabase();
    return new Promise((resolve) => {
        const tx = db.transaction("deviceData", "readwrite");
        const store = tx.objectStore("deviceData");
        store.put({ id: docId, timestamp, data: jsonData });
        tx.oncomplete = resolve;
    });
}
