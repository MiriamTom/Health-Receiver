importScripts('https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js');

self.addEventListener('message', async (e) => {
    if (e.data.action === 'decompress') {
        try {
            const result = await decompressData(e.data.data);
            self.postMessage({
                action: 'decompress-result',
                result: result
            });
        } catch (error) {
            self.postMessage({
                action: 'decompress-error',
                error: error.message
            });
        }
    }
});

async function decompressData(compressedData) {
    if (!compressedData) return null;
    
    try {
        // Konverzia Base64 na Uint8Array
        const binaryString = atob(compressedData);
        const bytes = new Uint8Array(binaryString.length);
        
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        
        // Dekompresia pomocou pako
        const decompressed = pako.inflate(bytes, { to: 'string' });
        return JSON.parse(decompressed);
    } catch (error) {
        console.error('Decompression error:', error);
        throw error;
    }
}