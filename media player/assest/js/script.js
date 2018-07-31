var vid = document.getElementById("my_video");
var fillbar = document.getElementById("fill");
var current_Tim = document.getElementById("current_Tim");
var volumeslide = document.getElementById("range");
function play0rpause(){

	if(vid.paused){
		vid.play();
		$("#playbtn").attr("src","assest/img/pause.png");

	}
	else{
		vid.pause();
		$("#playbtn").attr("src","assest/img/play.png");
	}
}
vid.addEventListener("timeupdate",function(){
	var position = vid.currentTime/vid.duration;
	fillbar.style.width = position*100+'%';
	convert_TI(Math.round(vid.currentTime));
	total_deration(Math.round(vid.duration));
	if(vid.ended){
		$("#playbtn").attr("src","assest/img/play.png");
	}
})
function total_deration(seconds){
	var min_d = Math.floor(seconds/60);
	var sec_d = seconds%60;
	min_d= (min_d<10) ? "0" +min_d : min_d;
	sec_d= (sec_d<10) ? "0" +sec_d : sec_d;
	current_Tim.textContent += "/"+min_d+":"+sec_d;
}
function convert_TI(seconds){
	var min_v = Math.floor(seconds / 60 );
	var sec_v = seconds%60;

	min_v = (min_v < 10 ) ? "0" + min_v : min_v;
	sec_v = (sec_v < 10 ) ? "0" + sec_v : sec_v ; 
	current_Tim.textContent = min_v +":"+ sec_v;


}

function changevolume(){
vid.volume = volumeslide.value;
if(volumeslide.value == 0){
	$("#speaker").attr("src","assest/img/mute.png");
}else{
	
	$("#speaker").attr("src","assest/img/Speaker.png");
}	
}

// for audio player 
var songs = ["song.mp3","song1.mp3","song2.mp3","song3.mp3",];
var poster = ["bg.jpg","bg1.jpg","bg2.jpg","bg3.jpg",];
var song_title = document.getElementById("song_title");
var fil_bar = document.getElementById("fille");
var song = new Audio();
var cerrntsong = 0;
var current_time = document.getElementById("current_time");
window.onload = playsong();
function playsong(){
	song.src = songs[cerrntsong];
	song_title.textContent = songs[cerrntsong];
	song.play();
	$("#play_a img").attr("src","assest/img/n/pause.png");
}
function playorpause(){
	if(song.paused){
		song.play();
		$("#play_a img").attr("src","assest/img/n/pause.png");

	}else{
		song.pause();
		$("#play_a img").attr("src","assest/img/n/play.png");
	}
}
song.addEventListener("timeupdate", function(){
	var position_a = song.currentTime/song.duration;
	fil_bar.style.width = position_a*100+'%';

    convertTIme(Math.round(song.currentTime));
    totaltime(Math.round(song.duration));
    if(song.ended){
    	next();
    }
    
})
function totaltime(seconds){
	var mind = Math.floor(seconds/60);
	var secd = seconds%60;
	mind = (mind < 10 ) ? "0" + mind: mind;
	secd = (secd<10) ? "0" + secd : secd ;
	current_time.textContent += "/"+mind+":"+ secd;
}
function convertTIme(seconds){
	var min = Math.floor(seconds/60);
	var sec = seconds%60;
	min = (min < 10 ) ? "0" + min : min;
	sec = (sec < 10 ) ? "0" + sec : sec ;
	current_time.textContent = min+":"+sec;

}
function next(){
	cerrntsong++;
	if(cerrntsong > 2){
		cerrntsong = 0;
		
	}
	playsong();
	$("#play_a img").attr("src","assest/img/n/pause.png");
	$("#bg_i img").attr("src",poster[cerrntsong]);

}function pre(){
	cerrntsong++;
	if(cerrntsong < 0){
		cerrntsong = 0;
		
	}
	playsong();
	$("#play_a img").attr("src","assest/img/n/pause.png");
	$("#bg_i img").attr("src",poster[cerrntsong]);

}

function increase(){
	song.volume += 0.20;
}
function decrease(){
	song.volume -= 0.20;
}

