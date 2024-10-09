document.addEventListener("DOMContentLoaded", function(){
    function getRandomColor(){
        const letters = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const buttonTippy = tippy("#button-element",{
        content: "Pure CSS!",
        trigger: "manual",
        animation: "scale",
        hideOnClick: false,
        interactive: true,
    })[0];

    let colorInterval = null;

    function startColorChange(){
        const squareElement = document.querySelector("#square-element");
        colorInterval = setInterval(() =>{
            squareElement.style.backgroundColor = getRandomColor();
        }
        , 500);
    }

    function stopColorChange(){
        clearInterval(colorInterval);
        const squareElement = document.querySelector("#square-element");
        squareElement.style.backgroundColor = "#4CAF50";
    }

    document.querySelector("#button-element").addEventListener("click", function(){
        buttonTippy.show();

        const imageElement = document.querySelector("#image-element");
        imageElement.style.display = "block";

        startColorChange();
    });

    document.addEventListener("click", function (event){
        const tippyElement = document.querySelector("[data-tippy-root]");
        const buttonElement = document.querySelector("#button-element");
        if(tippyElement && !tippyElement.contains(event.target) && !buttonElement.contains(event.target)){
            buttonTippy.hide();

            const imageElement = document.querySelector("#image-element");
            imageElement.style.display = "none";

            stopColorChange();
}});});