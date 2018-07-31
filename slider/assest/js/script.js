var img_boxs = document.getElementById("img_box");
var image_s = ["slide","slide1","slide2","slide3","slide4"];
var image_length = image_s.length;
// functions for slide 
// next
/* function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
    }
*/

function next_img(){
	if(image_length<image_s.length){
		image_length = image_length+1;
	}else{
		image_length = 1;
	}
	img_boxs.innerHTML = "<img src="+'assest/img/'+image_s[image_length-1]+".jpg >";

} 
// prev
function prev_img(){
	if(image_length<image_s.length+1 && image_length>1){
		image_length = image_length-1;
	}else{
		image_length = image_s.length;
	}
	img_boxs.innerHTML = "<img src="+'assest/img/'+image_s[image_length-1]+".jpg >";

}
setInterval(next_img,1000);
	function hl(){
	document.write("hi where are you from");
}