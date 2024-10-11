import { getSrc } from "./motor";

const printSrc = (src: string) => {
    if(src){
        const p = document.createElement("p");
        p.innerText = src;
        document.querySelector(".result")?.appendChild(p);
    }
}

const obtain = () => {
    reset();
    const src = getSrc();
    if(src){
        src.forEach((src) => {
            if(src && src.groups?.src){
                printSrc(src.groups.src)
            }
        });
    } else {
        printNotFoundResult();
    }
};

const printNotFoundResult = () => {
    const p = document.createElement("p");
    p.innerText = "No se encontraron imágenes";
    document.querySelector(".result")?.appendChild(p);
}

const reset = () => {
    const result = document.querySelector(".result");
    if(result && result.hasChildNodes()){
        result.innerHTML = "";
    }
}

document.getElementById("obtain")?.addEventListener("click", obtain);
