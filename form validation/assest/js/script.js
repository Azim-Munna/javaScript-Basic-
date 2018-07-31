function from_val(){
    let xn= document.forms["f_area"]["f_name"].value;
    if(xn == ""){
        alert("enter your name ");
        return false;
    }
    let xp = document.forms["f_area"]["f_pass"].value;
    if(xp==""){
        alert("enter password");
        return false;
    }

}
// again 
function number_val(){
    let text;
    let num_s=document.getElementById("num").value;
    if(isNaN(num_s)|| num_s<1|| num_s>10){
        text="input not valid";
    }else{
        text="input ok ";
    }
    demo.innerHTML=text;

}
// form api w3 secound
 function secnd_res(){
    var sec_text;
    var se_n_id=document.getElementById("number_id");
    if(se_n_id.validity.rangeOverflow){
        sec_text="value too large ";
    }else{
        sec_text="input  is ok "
    }
    sec_d.innerHTML=sec_text;
 }
// underflwo
function underflow(){
    var un_text;
    var un_in_id=document.getElementById("number_un_id");
    if(un_in_id.validity.rangeUnderflow){
        un_text="input too large";
    }else{
        un_text="input ok";
    }
    sec_under.innerHTML=un_text;
}
// form api 

function show_res(){
    var num_id=document.getElementById("num_id");
    if(!num_id.checkValidity()){
        document.getElementById("res").innerHTML=num_id.validationMessage;
    }else{
        document.getElementById("res").innerHTML="input ok";
    }
}
