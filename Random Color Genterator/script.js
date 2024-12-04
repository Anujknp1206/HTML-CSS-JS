const containerEl = document.querySelector(".container");

for (let index = 0; index < 50; index++) {

    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");

    const colorCodeE1 = document.createElement("span");
    colorCodeE1.classList.add("color-code");
    colorContainerEl.appendChild(colorCodeE1);

    const CopyButtonE1 = document.createElement("button");
    CopyButtonE1.innerText = "Copy";
    colorContainerEl.appendChild(CopyButtonE1);

    containerEl.appendChild(colorContainerEl);


}

function randomColor() {
    const char = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let index = 0; index < colorCodeLength; index++) {

        const randomNum = Math.floor(Math.random() * char.length);
        colorCode += char.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}

const colorContainerEls = document.querySelectorAll(".color-container");
generateColor();

function generateColor() {
    for (let index = 0; index < colorContainerEls.length; index++) {

        const colorContainerEl = colorContainerEls[index];
        const newColoCode = randomColor();
        const colorCodeE1 = colorContainerEl.querySelector(".color-code");

        colorContainerEl.style.backgroundColor = "#" + newColoCode;
        colorCodeE1.innerText = "#" + newColoCode;
    }
}

colorContainerEls.forEach((colorContainerEl)=>{
    const CopyButtonE1 = colorContainerEl.querySelector("button");
    const colorCodeE1 = colorContainerEl.querySelector(".color-code");

    CopyButtonE1.addEventListener('click',()=>{

        const colorCode = colorCodeE1.innerText;
        copytoClipboard(colorCode);
})
});
//
function copytoClipboard(text){
    navigator.clipboard.writeText(text)
    .then(() =>{
        alert('Copied to clipboard : ' + text);
    })
    .catch((error)=>{
        console.error("Failed to copy to clipboard: ", error);
})
}

