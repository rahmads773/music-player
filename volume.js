class volume{
    constructor(){
        this.audio = document.getElementById("audio");
        
        this.audio.volume = 50/100;
        this.range_volume = document.getElementById("volume");
        this.range_volume.addEventListener("change",(eo) => {
            this.audio.volume = this.range_volume.value/100;
        })
        this.audio.playBackRate = 1;
        this.range_speed = document.getElementById("speed");
        this.range_speed.addEventListener("change",(eo) => {
            this.audio.playBackRate = this.range_speed.value /100;
        })
           
    }
}
onload = new volume();
