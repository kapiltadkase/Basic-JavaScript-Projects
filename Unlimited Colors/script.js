function colorCode(){
    let hexCode = "#";

    const values = "0123456789ABCDEF"
    for(let i =0;i<6;i++){
        let index = (Math.floor(Math.random()*16));
        hexCode += values[index];
    }

    return hexCode;
}


// On Clicking Start
let interval;
document.getElementById("start").addEventListener("click",function (e){
    if(interval == null){
        interval = setInterval(function(){
        document.querySelector("body").style.backgroundColor = colorCode();
    }, 1000);
    }
    
})

// On clicking Start
document.getElementById("stop").addEventListener("click",function (e){
    clearInterval(interval);
    interval = null;
})

