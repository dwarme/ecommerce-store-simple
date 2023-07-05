export function loadImages(imageURLs: string[]) {
    const imagePromises: Promise<HTMLImageElement>[] = imageURLs.map((url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.onerror = (error) => {
                reject(error);
            };
            img.src = url;
        });
    });

    return Promise.all(imagePromises);
}