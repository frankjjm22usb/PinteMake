moves = {
    initial: {
        x: null, y: null
    },
    actual: {
        x: null, y: null
    }
};

    window.onscroll = () => {

        if(window.innerWidth > 375){
            if (window.pageYOffset >= 150){
                let fakeMenu = document.querySelector("#fakeHeader");
                fakeMenu.style.top = "0px";
                fakeMenu.style.position = "fixed";
                fakeMenu.style.opacity = "1";
            }else{
                let fakeMenu = document.querySelector("#fakeHeader");
                fakeMenu.style.top = "-75px";
                fakeMenu.style.position = "fixed";
                fakeMenu.style.opacity = "0";
            }
        }else{
            let content  = document.querySelector("#content");
            content.ontouchstart = function(e){
                
                moves.initial = {
                    x: e.changedTouches[0].clientX, 
                    y: e.changedTouches[0].clientY
                };
                
            }
            content.ontouchend = function(e){
                console.log(moves);
            }
            content.ontouchmove = function(e){
                moves.actual = { 
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                };

                if ( (moves.actual.y - moves.initial.y) < 100){
                    console.log("ENTRÓ");
                    
                    //ocultar
                    let searchbar = document.querySelector("#searchbar");
                    searchbar.classList.add("hide");
                    let footer = document.querySelector("footer");
                    footer.classList.add("hide");
                }

                if ( (moves.actual.y - moves.initial.y) > 100){
                    console.log("SALIO");
                    
                    //ocultar
                    let searchbar = document.querySelector("#searchbar");
                    searchbar.classList.remove("hide");
                    let footer = document.querySelector("footer");
                    footer.classList.remove("hide");
                }

            }
        }
    }
