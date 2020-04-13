

//   window.onload = function(){
//     var myAudio = document.getElementById('my-audio');
//     var play = document.getElementById('play');
//     var pause = document.getElementById('pause');
//     var loading = document.getElementById('loading');
//     var bar = document.getElementById('bar');
//     var volume = this.document.getElementById("volume")
//     var muted = this.document.getElementById("muted")

//     function displayControls() {
//        loading.style.display = "none";
//        play.style.display = "block";
//     }

//     function displayVolumeControl(type){
//         if(type === "volume"){
//             volume.style.display = "none";
//             muted.style.display = "block";
//         }
//         else{
//             volume.style.display = "block";
//             muted.style.display = "none";
//         }

//     }
 
//     // check that the media is ready before displaying the controls
//     if (myAudio.paused) {
//        displayControls();
//        displayVolumeControl("muted")
//     } else {
//        // not ready yet - wait for canplay event
//        myAudio.addEventListener('canplay', function() {
//           displayControls();
//           displayVolumeControl("muted");
//        });
//     }
     
//     play.addEventListener('click', function() {
//        myAudio.play();
//        play.style.display = "none";
//        pause.style.display = "block";
//     });
     
//     pause.addEventListener('click', function() {
//        myAudio.pause();
//        pause.style.display = "none";
//        play.style.display = "block";
//     });
     
//     // display progress
     
//     myAudio.addEventListener('timeupdate', function() {
//        //sets the percentage
//        bar.style.width = parseInt(((myAudio.currentTime / myAudio.duration) * 100), 10) + "%";
//        var audioTime = document.getElementById('audio-time');
//         const currentTime = Math.floor(myAudio.currentTime);
//         let minutes = Math.floor(currentTime / 60);
//         let secs = Math.floor(currentTime % 60);
//         let sec = secs < 10 ? `0${secs}`: secs 

        
//         console.log(`${minutes}:${sec}`)
//         audioTime.textContent =`${minutes}:${sec}` 
//     });

//     // seek with progress bar
//     var progress = document.getElementById('progress');

//     progress.addEventListener('click', function(e) {
        
//     // calculate the normalized position clicked
//     var clickPosition = (e.pageX  - this.offsetLeft) / this.offsetWidth;
//     console.log(clickPosition, myAudio.duration)
//     var clickTime = clickPosition * myAudio.duration;

//     // move the playhead to the correct position
//     myAudio.currentTime = clickTime;
//     });

//     //seek with progress bar - REWIND
//     var rewind = document.getElementById('rw');

//     rewind.addEventListener('click', function(e) {
//         myAudio.currentTime = myAudio.currentTime < 2 ? 0 : myAudio.currentTime - 2;
//     });

//     //seek with progress bar - FAST FORWARD
//     var fastForward = document.getElementById('ff');

//     fastForward.addEventListener('click', function(e) {
//         myAudio.currentTime = myAudio.currentTime + 2 >= myAudio.duration ? myAudio.duration : myAudio.currentTime + 2;
//     });

   
    
//     //volume data

    
//     volume.addEventListener('click', function(event){
//         displayVolumeControl("volume")
//         myAudio.muted = true;
//     })

//     muted.addEventListener('click', function(event){
//         displayVolumeControl("muted")
//         myAudio.muted = false;
//     })

//     // seek with progress bar
//     var progress4Volume = document.getElementById('progress-v-bg');

//     progress4Volume.addEventListener('click', function(e) {
        
//         // calculate the normalized position clicked
//         var clickPosition = (e.pageX  - this.offsetLeft) / this.offsetWidth;
//         console.log(clickPosition)
//         var volumeTime = clickPosition * 1;
//         var pb = document.getElementById("progress-bar");
//         pb.style.width = parseInt(volumeTime * 100) + "%";
//         myAudio.volume = volumeTime;
//     });



//  }


 