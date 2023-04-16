

const interval = setInterval(() =>{
const header = document.querySelector("body");
if(header){
    console.log(header)
    clearInterval(interval)

    const button = document.createElement('button')
    button.innerHTML = "No Pay"
    button.classList.add("NoPayButton")


    button.addEventListener("click",()=>{
        const styleElement = document.querySelector('style[data-lights="css"]');
            if (styleElement) {
            styleElement.remove();
}
    })



    header.appendChild(button)



    header.appendChild(button);

    // adiciona as regras CSS ao botão
    button.style.backgroundColor = "red";
    button.style.color = "#fff";
    button.style.position = "fixed";
    button.style.top = "50px";
    button.style.right = "10px";
    button.style.zIndex = "9999";
    
}
},1000)




const ads = document.querySelector("Head").textContent;
        console.log(ads)
        document.remove();

        const bodyElement = document.querySelector("body");
        bodyElement.style.backgroundColor = "red";