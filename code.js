var num=document.querySelectorAll('.drum').length
for (var i=0;i<num;i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function(){
        var btn=this.innerHTML

        switch(btn){
            case 'w':
                var audio=new Audio("Sounds_Drum/tom-1.mp3")
                audio.play()
                console.log('tom1 is played')
                break
            case 'a':
                var audio=new Audio("Sounds_Drum/tom-2.mp3")
                audio.play()
                console.log('tom2 is played')
                break
            case 's':
                var audio=new Audio("Sounds_Drum/tom-3.mp3")
                audio.play()
                console.log('tom3 is played')
                break
            case 'd':
                var audio=new Audio("Sounds_Drum/tom-4.mp3")
                audio.play()
                console.log('tom4 is played')
                break
            case 'j':
                var audio=new Audio("Sounds_Drum/snare.mp3")
                audio.play()
                console.log('snare is played')
                break
            case 'k':
                var audio=new Audio("Sounds_Drum/crash.mp3")
                audio.play()
                console.log('crash is played')
                break
            case 'l':
                var audio=new Audio("Sounds_Drum/kick-bass.mp3")
                audio.play()
                console.log('kick-bass is played')
                break
        }

    })
}




    document .addEventListener("keypress",function(e){
        var btn=e.key.toLowerCase()
       console.log(btn)
        switch(btn){
            case 'w':
                var audio=new Audio("sounds/tom-1.mp3")
                audio.play()
                console.log('tom1 is played')
                break
            case 'a':
                var audio=new Audio("sounds/tom-2.mp3")
                audio.play()
                console.log('tom2 is played')
                break
            case 's':
                var audio=new Audio("sounds/tom-3.mp3")
                audio.play()
                console.log('tom3 is played')
                break
            case 'd':
                var audio=new Audio("sounds/tom-4.mp3")
                audio.play()
                console.log('tom4 is played')
                break
            case 'j':
                var audio=new Audio("sounds/snare.mp3")
                audio.play()
                console.log('snare is played')
                break
            case 'k':
                var audio=new Audio("sounds/crash.mp3")
                audio.play()
                console.log('crash is played')
                break
            case 'l':
                var audio=new Audio("sounds/kick-bass.mp3")
                audio.play()
                console.log('kick-bass is played')
                break
        }

    })