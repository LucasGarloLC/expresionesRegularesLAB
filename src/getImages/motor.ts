const getTextArea = () => {
    const textArea = document.querySelector("#textarea");
    if (textArea && textArea instanceof HTMLInputElement){
        return textArea.value;
    }
    return;
}

const getImages = () => {
    const text = getTextArea();
    if(!text) return;
    const regex =/<img\ssrc=".*?"/gm;
    const images = text.match(regex);
    return images;
}

export const getSrc = () => {
    const images = getImages();
    const regexExec = /"(?<src>.*)"/;
    const src = images?.map((image) => {
        return image.match(regexExec);
    });
    return src;
};