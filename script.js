var flag = 0

document.querySelector("#menu").addEventListener("click",function(){
    if(flag == 0){

        document.querySelector("#full-scr").style.top = 0
        document.querySelector("#line2").style.opacity = 0
        document.querySelector("#line1").style.rotate = "45deg"
        document.querySelector("#line3").style.rotate = "-45deg"
        document.querySelector("#center")
        document.querySelector("h1").style.opacity = 0
        


        flag = 1
    }else{
        document.querySelector("#full-scr").style.top = "-100%"
        document.querySelector("#line2").style.opacity = 1
        document.querySelector("#line1").style.rotate = "0deg"
        document.querySelector("#line3").style.rotate = "0deg"
        document.querySelector("#center")
        document.querySelector("h1").style.opacity = .9

        flag = 0
    }
})