

for(var i = 0;i < document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

        chk(this.innerHTML);
        buttonAnimation(this.innerHTML);

        // this.style.color = "white";
        // this.style.color = "#DA0463";

        document.addEventListener("keydown", function(event){
            chk(event.key);
            buttonAnimation(event.key);
    });
});
}

    function chk(key){

        switch(key){
            case 'w':
                var a = new Audio("crash.mp3");
                a.play();
                break;

            case 'a':
                var a = new Audio("kick-bass.mp3");
                a.play();
                break;

            case 's':
                var a = new Audio("snare.mp3");
                a.play();
                break;
            
            case 'd':
                var a = new Audio("tom-1.mp3");
                a.play();
                break;
            
            case 'j':
                var a = new Audio("tom-2.mp3");
                a.play();
                break;
            
            case 'k':
                var a = new Audio("tom-3.mp3");
                a.play();
                break;
            case 'l':
                var a = new Audio("tom-4.mp3");
                a.play();
                break;
        }
        
    }
    function buttonAnimation(btn){
        document.querySelector("." + btn).classList.add("pressed");

        setTimeout(function(){
            document.querySelector("." + btn).classList.remove("pressed");
        }, 100);
    }