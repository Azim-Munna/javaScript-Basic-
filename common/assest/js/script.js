function section(a, b, c, d) {
    this.section_a = a;
    this.section_b = b;
    this.section_c = c;
}
var azim = new section("lakshmipur", "raipur", "chandrogong", "ramgoti");
var munna = new section("dhaka", "mirpur", "danmondi", "mdpur");

document.getElementById("h").innerHTML = "my section is " + azim.section_a;
document.getElementById("hw").innerHTML = "my section is " + munna.section_b;


document.getElementById("shwo_the_clocks").innerHTML = "hi from text";

function ak() {
    alert("hi ");
}
/*

w3
*/
// Constructor function for Person objects
/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Display age
document.getElementById("demo").innerHTML =
    "My father is " + myFather.age + ". My mother is " + myMother.age + ".";*/



// clock area
function show_time() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var sessi = "Am";

    if (h == 0) {
        h = 12;

    }
    if (h > 12) {
        h = h - 12;
        sessi = "pm";

    }
    // single digit issue
    /*if(h<10){
        h = "0"+h;
    }
    if(m<10){
        m ="0" + m;
    }
    if(s<10){
        s = "0"+s;
    }*/
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + " : " + m + " : " + s + " " + sessi;
    document.getElementById("shwo_the_clock").innerText = time;
    setTimeout(show_time, 1000);
}
show_time();



/* basick function */
var data_char = "azimmunna"
// for show  single value form stiong 
var show_at = data_char.charAt();
document.getElementById("chat_at").innerHTML = show_at;

// show substing / substr 
var subs = data_char.substr(1, 3);
document.getElementById("chat_ats").innerHTML = subs + " substr";
// charcodeat
var data_at = "helow ";
var show_code_at = data_at.charCodeAt(3);
document.getElementById("chat_atc").innerHTML = show_code_at;
// concat
var azim = ["tsc", "pt", "ver"];
var munna = ["bics", "fre", "fk"];
var total_c = azim.concat(munna);
document.getElementById("cancat_t").innerHTML = total_c;
// ends with 
var ends_data = "live with love.";
var end_s = ends_data.endsWith("love.");
document.getElementById("cancat_e").innerHTML = end_s;
// formcharcode
var form_char = String.fromCharCode(66);
document.getElementById("form__ch").innerHTML = form_char;
// includes 
var dat = "I Am A Student .  "
var include_d = dat.includes("ams");
document.getElementById("d").innerHTML = include_d;
// indexoff
var indexoff = dat.indexOf("m") + " index of ";
document.getElementById("indexof").innerHTML = indexoff;
// match
var match = dat.match(Infinity);
var ser = dat.search(/st/);
document.getElementById("match").innerHTML = match + " " + ser;
// repeat
// 17-7-18
var br = dat + "<br>";
var rep = br.repeat(3) + "<br>";
document.getElementById("rep").innerHTML = rep;
// replace
var rep = "i am a boy "
var repl = dat.replace(/student/g, " bad Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, eos.boy");
document.getElementById("repl").innerHTML = repl;
// search
var scg = " i am not bad"
var serch = scg.search("am");
var index = scg.indexOf("am");
document.getElementById("sr").innerHTML = serch;
document.getElementById("indw").innerHTML = index;
var slice_d = ["abullah", "azim", "sajided", "ifath", "noman"];
//slice 
var slice_s = slice_d.slice(1, 4);
document.getElementById("slice_t").innerHTML = slice_s + " slice";
var slit = "ihave a friend ";
var sli = slit.slice(2, 4);
document.getElementById("slit").innerHTML = sli;
//split
function spl() {
    var sple = "i have some people i can trust him ";
    var splite = sple.split(" ");
    document.getElementById("sp").innerHTML = splite;
}

var splt = "i have some peoplm ";
var spli = splt.split(" ");
document.getElementById("spll").innerHTML = spli;

//startswith
var mye = "awe are a team";
var met = mye.startsWith("we");
document.getElementById("stw").innerHTML = met;

// str
var mmm = "i love relation";
var strr = mmm.substr(0, 3);
var strrs = mmm.substring(0, 3);
document.getElementById("ccc").innerHTML = strr;
document.getElementById("ddd").innerHTML = strrs;
// tolower case 
var low = dat.toUpperCase() + "lowercase";
var uper = dat.toLowerCase() + "upercase";
document.getElementById("low").innerHTML = low;
document.getElementById("uper").innerHTML = uper;

// tream
var tr = "         trim text         ";
var sh = tr.trim();
document.getElementById("trl").innerHTML = sh;


// fuction types 
function news(number) {
    return number + number;
    document.getElementById("nw").innerHTML = news(4);
}

function newse() {
    alert("well come ");
}
console.log(news(4));

document.getElementById("n").innerHTML = news(4);
// document.getElementById("m").onclick = function() 
document.getElementById("jkl").onclick = function() { newse() };

var men = "hi i am azim";

function amm() {
    document.getElementById("men").innerHTML = men;
    console.log(men);
}
amm();
// inline function

function outline_f(a, b) {
    function inline_F(x) {
        return x * x;
    }
    return inline_F(a) + inline_F(b);
}
document.getElementById("math_f").innerHTML = outline_f(1, 3);
console.log(outline_f(1, 4));

function extra(f) {
    return (3 * 2) * (f - 2);
}
document.getElementById("ext").innerHTML = extra(5);
//********* 17-7-18************************

var myft = function() {
    var hi = "hi how r you ? how was your morning "
    document.getElementById("tr").innerHTML = hi;
    console.log(hi);
}
myft();
var team = false;
if (team) {
    document.getElementById("te").innerText = "we can do something ";
} else {
    document.getElementById("te").innerText = "we can't do something ";

}
const my_age = 7;
if (my_age >= 18) {
    document.getElementById("age").innerHTML = "now i am strong";
} else if (my_age < 8) {
    document.getElementById("age").innerHTML = " i am a baby >" + my_age;

} else if (my_age < 18) {
    document.getElementById("age").innerHTML = "i don't undestand everything";

}
var hlwe = "2";
console.log(hlwe === "2");

console.log("hi hlw" === new String("hi hlw"));
// difference of null

var nal = null;
console.log("nul section");
console.log(nal);
console.log(typeof nal);
console.log(typeof undefined);
console.log(nal == undefined);
console.log(nal === undefined);
console.log(null === null);
console.log(null == null);
console.log(!nal);
console.log(!!nal);
console.log(nal + 1);
console.log(undefined + 1);
// using and &&  or || using 
var and_or = 10;
var y = 5;
if (and_or < 15 && y > 3) {
    console.log("hi your math is true ");
} else {
    console.log("you are false ");
}
var or = 10;
var r = 5
if (or < 15 || r > 3) {
    console.log("your function is ok ");
} else {
    console.log("your function not ok ");
}
var trust = true;

var tr_fu = function() {
    console.log("you can trust");
}
var false_f = function() {
        console.log("never trust him ");
    }
    (trust && tr_fu);
(trust || false_f);


function my_name(tane) {
    tane = tane || " munna";
    console.log("my name is" + tane);
}
my_name();
my_name(" azim");

// ternary oparator 

var ter = 19;
if (ter > 18) {
    console.log("your are now ok ");
} else {
    console.log("you have to learn more ");
}
var tern = 19;
console.log((tern > 20) ? "you are ok form tern " : "you have to study more ");

var stop;
var kids = 19;
kids < 18 ? (
    console.log("ok you can go "),
    stop = false
) : (
    console.log("you cant go you are young "),
    stop = true
);

var first_ch = false;
var secound_ch = false;
var access = first_ch ? " he is ok " : secound_ch ? "2nd ok " : " ok you can go ";
console.log(access);
// switch

var house_switch = "bed_room";
switch (house_switch) {
    case "light":
        console.log("bed_room_light_on");
        break;
    case 'bed_room':
        console.log("bed_room_ac 0n");
        break;
}
let day;
switch (new Date().getDay()) {
    case 0:
        day = "satarday";
        break;
    case 1:
        day = "sunday";
        break;
    case 2:
        day = "monday";
        break;
    case 3:
        day = "tuesday";
        break;
    case 4:
        day = "wednesday";
        break;
    case 5:
        day = "thusday";
        break;
    case 6:
        day = "friday";
        break;
}
document.getElementById("day_name").innerHTML = day;
console.log(day);

// areeay())
var ara = ["azim", "munna", "rifath"];
var ch = ara[0] = "my name";
console.log(ch);
var food = [
    ["rice", 5],
    ["egg", 4]
]
console.log(food[1][0]);
var redc = food[1][0] = "fish "
console.log(redc);
console.log(food);
console.log(ara);


// for each
console.log("for each fast");
ara.forEach(function(element) {
    console.log(element);
    el.innerHTML = element + "for /each";
})

var naw_ar = ["a", "b", "c", "d"];
naw_ar.push("g");
console.log(naw_ar);
var maye = naw_ar.pop();
console.log(naw_ar);
var naw_ar2 = ["y", "z"];
console.log(naw_ar.concat(naw_ar2))
console.log(naw_ar);
console.log(naw_ar.join("/"));
var nau = ["x", "y", "z", "d", "l"];
console.log(nau.reverse());
console.log(nau);
console.log(nau.shift());
console.log(nau);
console.log(nau.unshift("a"));
console.log(nau);
console.log(nau.slice(1, 4, 3));
console.log(nau.push("k"));
console.log(nau);
console.log(nau.sort());
// console.log(nau.splice(2,2,"from_splice"));
console.log(nau.splice(0, 2, "from_splice", "hi"));
console.log(nau);
document.getElementById("naw").innerHTML = nau;
// coping array 
var sin = ["a", "b", "c", "d"];
console.log(sin);
var single = console.log(sin.slice(3));
document.getElementById("nnn").innerHTML = single;

/*
all writing style js function
if else 
difference off null and undefined
using &&&& and ||
ternary oparator 
switch
foreach
array();
arry push
array pop
array concat
array join
array reverse
array shift 
array unshift 
array slice
array sort
array splice

*/
// 18-7-18
// spread oparator
cop = [...sin];
console.log(cop, nau);
document.getElementById("tt").textContent = cop[0] + cop[1] + cop[2] + cop[3];

// deep coping 
var dep = [
    ["deep copy "]
];
var dep_c = dep.slice(0);
dep_c[0].push("i know ");
console.log(dep_c[0], dep[0]);
// json
var jss = [
    ["hlw json"]
];
var jss_c = JSON.parse(JSON.stringify(jss));

console.log(jss_c);
console.log("jss-c");
jss_c[0].push("added");
console.log(jss[0], jss_c[0]);
console.log("json area");
// number 
console.log(Math.floor(Math.random() * 99));

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(randomRange(1, 9));
// parseInt
console.log(parseInt(0008));
console.log(parseInt("00", 5));
// for loop 
var my_ar = [];
for (af = 0; af < 5; af++) {
    my_ar.push(af);
}
console.log(my_ar);
console.log(my_ar.length);
// sing
var jmm = [10, 9, 8, 7, 6, 5];
for (lp = 0; lp < jmm.length; lp++) {
    console.log(jmm[lp] + " single");
}
// short cart call id 
elo.innerHTML = jmm[2] + "single";
// elo.innerHTML=jmm[2];
var jmm = [
    [1, 2],
    [3, 4],
    [5, 6]
];
// kdj doble
for (lp = 0; lp < jmm.length; lp++) {
    for (c = 0; c < jmm[lp].length; c++) {
        console.log(jmm[lp][c]);
    }
}
// again 
console.log("doble");
var ag = [
    [1, 2],
    [3, 4],
    [7, 6]
];
jog = ag.length;
for (ar = 0; ar < jog; ar++) {
    for (f = 0; f < ag[ar].length; f++) {
        console.log(ag[ar][f]);
    }
}
// while 
var wh = 0;
while (wh < 5) {
    wh++;
    console.log("wh = " + " " + wh)
}
var d = 6;
do {
    d++;
    console.log("do + " + d);
} while (d < 5)
// if
// continue
var dh = 0;
while (dh < 5) {
    dh++;
    if (dh == 4) continue
    console.log("dh = " + " " + dh)
}
// break
var bk = 0;
while (bk < 5) {
    bk++;
    if (bk == 4) break
    console.log("bk = " + " " + bk)
}
// &turn_off_js= ture;
// for in

let person = { a: " am azim", b: " am student" };
let tex_t = " ";
let x;
for (x in person) {
    tex_t += "i" + person[x] + " ";
    console.log(x + "<br>");
}
console.log(tex_t);


// for in again
let country = { a: "bd", b: "eng", c: "ind", d: "usd" };
let text_a = " ";
let fa;
for (fa in country) {
    text_a += country[fa] + " ";
    console.log(fa);
}
console.log(text_a);

console.log("for in");
var offf = [1, 2, 4, 5, 6];
// for call property
offf.aoo = "hllll";
// offf.foo("hi");
for (let t in offf) {
    console.log(t);
}
// for of
console.log("for start");
let of_of = [1, 2, 4, 5, 6];
of_of.ox = "hll";
for (let i of of_of) {
    console.log(i);
}
// array itration 8 method 

// for each
console.log("for each");
var for_e = [24, 34, 44, 54, 64, 79];
for_e.forEach(function(itemes, indexs) {
    console.log(itemes, indexs);
})

// map 
console.log('map section');
var af = [1, 2, 3];
var dable = af.map(function(item) {
    return item * 3;
});
console.log(dable);

// filter
console.log("filter area ");
var fil = [1, 2, 35, 48, 88];
var fil_t = fil.filter(function(item) {
    return item < 53;
});
console.log(fil_t);
// reduce 
console.log("reduce section");
var redu = [1, 2, 9];
var fin = redu.reduce(function(some, thing) {
    return some + thing;
    console.log(some);
    console.log(thing);
}, 0);
console.log("fin_ar");
console.log(fin);
// find it will be show only fisst element 
console.log("find..........");
var ages = [19, 17, 18, 20];
az = ages.find(function(term) {
    return term <= 19;
});
console.log(az);
var fi = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }, { id: "e" }];
var fin = fi.find(function(it) {
    return it.id === "b";
});
console.log(fin);
// find index 
var inds = fi.findIndex(function(its) {
    return its.id === "b";
});
console.log("the index number is " + inds);
var ind = [1, 2, 6, 7, 9];
var inf = ind.findIndex(function(value, index, array) {
    return value > 7;
});
console.log("find index");
console.log(inf);
// array some 
var som = [1, 2, 3, 4, 5, -1];
var somm = som.some(function(item) {
    return item < 0;
});
console.log(somm);

// every javascript 
console.log("every area ");
var av = [12, 10, 11];
var tav = av.every(function(tim) {
    return tim > 9;
});
console.log(tav);
// object

var det = new Object();
det.nam = "azim munna";
det.age = "24";
det["need"] = "love";
det.ocation = "programing";
console.log("object area ");
console.log(det.nam);
console.log(det["age"]);
console.log(det["need"]);
// show obj and objname 
function showobj_objname(obj, objnmae) {
    let res = " ";
    for (let x in obj) {
        if (obj.hasOwnProperty(x)) {
            res += objnmae + "." + x + "=" + obj[x] + "\n";
        }

    }
    return res;
}
console.log("obj and obj name");
console.log(showobj_objname(det, "azim"));
// obj again 
my_hovve = new Object()
my_hovve.first = "salf";
my_hovve.secound = "do something";
my_hovve.thard = "bike";
my_hovve.four = "house";
my_hovve.five = "car";
console.log(my_hovve.five);
let total_hovve = " ";
let xl;

function show_data_h(obj_v, show) {
    for (xl in my_hovve) {
        if (obj_v.hasOwnProperty(xl)) {
            total_hovve += show + "." + xl + "=" + obj_v[xl] + "\n";
        }
    }
    return total_hovve;
}
console.log("again obj");
console.log(show_data_h(my_hovve, "salf"));
// obj thard time 
my_pln = new Object;
my_pln.aad = "skill";
my_pln.bad = "confident";
my_pln.cad = "trust";
my_pln.dad = "pure people ";
my_pln.ead = "value";
console.log(my_pln["dad"]);
let total_pl = " ";
let xw;

function show_pln(obja, obj_n) {
    for (xw in my_pln) {
        if (obja.hasOwnProperty(xw)) {
            total_pl += obj_n + "." + xw + " = " + obja[xw] + "\n";
        }
    }
    return total_pl;
}
console.log(show_pln(my_pln, "skill"));
/*

let person={a:" am azim",b:" am student"};
let tex_t= " " ;
let x;
for(x in person){
tex_t += "i"+ person[x] +" ";
console.log(x+"<br>");
}
console.log(tex_t);

*/
// object initializer
// ver my_fab= {name: "mohammad",find: "trust",like:"people",color:{red:"yes",black:"no",pink:"why?"}};
// JavaScript Object Constructors
function my_trust_F(family, friend, close, relation) {
    this.one = family;
    this.two = friend;
    this.three = close;
    this.four = relation;
}
var show_one = new my_trust_F("grand mom", "sajib", "turst", "love");
var show_two = new my_trust_F("antry", "mahadi", "people", "2nd");
console.log(show_one.one);

console.log(show_two.two);

// object creation 
var ani = {
    type: "checken ",
    displaytype: function() {
        console.log(this.type);
    }
}
var animol = Object.create(ani);
ani.displaytype();
var mye = {
    type: "ami from function",
    dis: function() {
        console.log(this.type);
    }
}
var mess = Object.create(mye);
mye.dis();
let dis_s = {
    ne: "you have to know ",
    cu: function() {
        console.log(this.ne);
    }
}
var done = Object.create(dis_s);
done.cu()
console.log("ne"+dis_s.ne);


// using object for look up 
let ttime = {
    a: 5,
    b: 6,
    c: 7,
    d: 8,
    e: 9
    // ..

}

console.log(ttime.b);
// remove object property 
var ti = {
    hi: "azim",
    hlw: "munna",
    age: "i am 23 years old ",
    future: "i don't know",
}
delete ti.hi;
console.log(ti);
console.log(ti.hi + ti.hlw + ti.age + ti.future);
console.log(ti["hlw"]);

// testing object for property
console.log(ti.hasOwnProperty("age"));
console.log(ti.hasOwnProperty("as"));
// accessig and modifing nested object 
let my_stores = {
    "table": {
        "specal_table": "table_one"
    },
    "chair": {
        "chair_sec": {
            "special_cheir": "two chair 2",
            "normal_chair": "two normal chair 2",
            "new_chair": "two new copy color chair 2",
        },
        "total_ch":" six chair"
    } 
};
console.log(my_stores.chair["chair_sec"].normal_chair);
console.log(my_stores.chair["chair_sec"].new_chair);
console.log(my_stores.chair["chair_sec"].new_chair="we was buy 2 new chair");
console.log(my_stores.chair["chair_sec"].new_chair);
// generate an array of all object keys
console.log(Object.keys(my_stores));
// key 
var ar=["ac","ab","ad"];
var ind = ar.keys();
for(let k of ind){
  console.log(k);
}
/*
1. variable
2. data types 
3.numbers
4.string 
5. string bracket
6.20 string methods 
7. function
8.hoisting 
9. if else 
10.null vs undefined
11.logical operator
12.switch
13.array
14.common array
15. copying array deep and shallow 
17.random number +++
18. for loops 
19. while loop
20. do 
21.for in 
22. for off
23. arra iteration 
24.objects
25.ajax 


*/
// ajax 

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt", true);
  xhttp.send();
}
// ajax prac
function load_doc(){
    var xhttps = new XMLHttpRequest();
    xhttps.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("new_id").innerHTML=this.responseText;
        }
    }
    xhttps.open("GET","http://localhost/tittit/yobaby.txt",true);
    xhttps.send();
}
// json ara
let my_json= {
    "name":{
        "first":"azim",
        "last":"munna",
    },
    "age":23,
    "skill":["html","css","javascript","php","wordpress"],
    "merrid":false,
    "gf":"null"
}
// stringify method
let stringi = JSON.stringify(my_json);
console.log(stringi);
console.log("json area ");
var txt = '{"name":"John", "age":30, "city":"New York"}'
var obj = JSON.parse(txt);
console.log(obj.city);

// parse methode
let slill = '{"name":"azim","age":23,"city":"mirpur"}';
let ress =JSON.parse(slill);
console.log(ress);
console.log(ress.name);
my_n.innerHTML=ress.age;
// using class
let xy=document.getElementsByClassName("my_class");
xy[0].innerHTML= "hi this is from class ";
let dy = document.getElementsByClassName("nnn");
dy[0].innerHTML=ress.city;
// closures
function makefunction(){
    let  cl= " hi i am azim";
    function sures(){
        console.log(cl);
    }
    return sures;
}

let cll=makefunction();
cll();

// closures 
let  a= 0;
function add(){
    a +=1;
}
add();
add();
add();
console.log("this cunter number is "+a);
// closures deep
let counter = (function(){
    var privet_counter= 0;
    function changeBy(val){
        privet_counter += val;
    }
    return {
        incriment: function(){
            changeBy(1);
        },
        decrement:function(){
            changeBy(-1);
        },
        value:function(){
            return privet_counter;
        }

    };
})();
console.log(counter.value());
console.log(counter.value());
console.log(counter.incriment());
console.log(counter.incriment());
console.log(counter.incriment());
console.log(counter.value());
console.log(counter.decrement());
console.log(counter.value());

// again making incriment decrement
let cunt_er=(function(){
    var def_c_n = 0;
    function change_by(val){
        def_c_n += val;
    }
    return{
        inc: function(){ 
            change_by(1);
        },
        dec:function(){
            change_by(-1);
        },
        value:function(){
            return def_c_n;
        }
    };

})();
console.log(cunt_er.value());
console.log(cunt_er.inc());
console.log(cunt_er.value());
console.log(cunt_er.inc());
console.log(cunt_er.inc());
console.log(cunt_er.dec());
console.log(cunt_er.value());
// this  
console.log("this area");
console.log(this.document===document);
console.log(this===window);
this.a= 20;
console.log(window.a);
function f1(){
    "use strict";
    return this;
}
console.log(f1()===window);
// this again
function ad_d(c,d){
    return this.b+this.a+c+d;
}
var o_o= {a:1,b:3};
console.log(ad_d.call(o_o,5,7));

function ab_c(b,c){
    return this.a+this.d+b+c;
};
let ot={a:1,d:2};
console.log(ab_c.call(ot,3,3));
// this 
function las(c,d){
    return this.a+this.b+c+d;
}
let re={a:2,b:3};
console.log(las.call(re,3,5));
// apply
console.log("apply area");
console.log(las.apply(re,[3,5]));

const per_son={ 
    full_name:function(county,city){
        return this.first_na+" | "+this.last_name+" | "+city+" | "+county;
    }

}
var per_one ={
    first_na:"azim ",
    last_name:"munna",
};
let showi = per_son.full_name.apply(per_one,["banglades","mirpur"]);
console.log(showi);
// now bind method 
function bin(){
    return this.a;
};
var g=bin.bind({a:"azim munna"});
console.log(g());

function bit(){
    return this.b;
}
var gt= bit.bind({b:"munna"});
console.log(gt());
var ht=gt.bind({b:"munna azim"});
console.log(ht());
// call form veriable
var oh = {b:8,gt:gt,ht:ht,bit:bit};
console.log(oh.gt()+" form veriable "+oh.ht(),oh.bit());
// bind
var mudule ={
    ages:23,
    get_age:function(){
        return this.ages;
    }
}
var gs=mudule.get_age;
var tts=gs.bind(mudule);
console.log(tts());
//
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
// bind area end 
// eroll function
var er= {
    traditionalFunc:function(){
        console.log("traditional this === 0?",this === er);
    },
    arrow_runc:()=>{
        console.log("arrow_runc this===0? ",this === er);
        console.log("arrow_runc window ===window? ",this === window);
    }

    }
    er.traditionalFunc();
    er.arrow_runc();
let azo={
    typess:"my name is munna",
    my_f:function(){
        return this.typess;
    }
}
console.log(azo.my_f());
var orz= {typey:"hi i am form single object"};
function my_t(){
    return this.typey;
}
orz.k=my_t;
console.log(orz.k());

var zzz={hi:"hi from single"};
function yyy(){
    return this.hi;
}
zzz.osf=yyy;
console.log(zzz.osf());
// promiss section
// basic
/*var prom_iss= new promise(function(resolve,rejact){
    // do asign class with task and then
    if(good_condition){
        resolve("sucess");
    }else{
        rejact("misson failed");
    }
});
prom_iss.then(function (){
    // DO SOMEthing with the result 
}).catch(function(){
    // error
});
*/
console.log("promis area start ");
var pro_m = new Promise((resolve,rejact)=>{
    let name="azim muna";
    setTimeout(()=>{
        resolve(name)
    },4000);
});
pro_m.then((name)=>{
console.log("my name is "+name);
});
let maed_by_m_p = new Promise((resolve,rejact)=>{
 let  name="from 2nd Promise";
 window.setTimeout(()=>{
    resolve(name)
 },3000);
});
maed_by_m_p.then((name)=>{
    console.log("where are you from?? ans => "+ name);
}).catch((rejact)=>{
    console.log("faild to work "+ rejact);
})



let clean = new Promise((solve,rejact)=>{
    let it_clean=  true ;
    if(it_clean){
        
        window.setTimeout(()=>{
            solve("clean");
        },6000);
    }else{
        rejact("not clean");
    }

});
clean.then((tru)=>{
    console.log("this room is "+tru);
}).catch((fls)=>{
 console.log("this ron is "+ fls);
});
 // 10% deep promise
let clean_room=function(){
    return new Promise((resolve,reject)=>{
    resolve("the room is clean");
});
}
let remove_glass=function(){ 
    return new Promise((resolve,reject)=>{
    resolve("the glass removed");
});};

let remove_plate=function(){ 
    return new Promise((resolve,reject)=>{
    resolve("this plate removed");
});};

clean_room().then(()=>{
    return remove_glass();
}).then(()=>{
    return remove_plate();
}).then(()=>{
    console.log("all work done ");
});
let child= function(){
    return new Promise((resolve,rejact)=>{
        resolve("your children age finished ");
    });
};
let tenage= (message)=>{
    return new Promise((resolve,rejact)=>{
        resolve(message + " your tenage recenty finished ");
    });
};
let young= (message)=>{
    return new Promise((resolve, rejact)=>{
        resolve(message+" your young age running");
    })
};
child().then(
    (result)=>{
        return tenage(result);
    }).then((result)=>{
        return young(result);
    }).then((result)=>{
        console.log("you dont have too much time you have to do something :)"+ result);
    })

/*
// from source
var promiseCount = 0; 
function testPromise() {
  var thisPromiseCount = ++promiseCount;
  console.log(thisPromiseCount + ': Started - Sync code started');

  var p1 = new Promise(function(resolve, reject) {
    console.log(thisPromiseCount + ': Promise started - Async code started');
    // This is only an example to create asynchronism
    window.setTimeout(
      function() {
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
  });

  p1.then(function(val) {
    console.log(val + ': Promise fulfilled - Async code terminated');
  }).catch(function(reason) {
    console.log('Handle rejected promise ('+reason+') here.');
  });

  console.log(thisPromiseCount + ': Promise made - Sync code terminated');
}

testPromise();
testPromise();
testPromise();
// mediam promise
/*var promiscount=0;
function test_promise(){
    var this_promis_count= ++promiscount;
    console.log(this_promis_count+" : started sync code start");
var p_one=new promise(function(resol_ve,rej_ect){
    console.log(this_promis_count+"promise ready async code start");
    // this is only an example to create anynchronism
    window.setTimeout(
        function(){
            resol_ve(this_promis_count);
        },Math.random()*2000+1000);
});
p_one.then(function(val_a){
    console.log(val_a+"promice fulfiled async code terminated");
}).catch(function(reson){
    console.log("handale rejacted promis ("+reson +")here ");
});
console.log(this_promis_count+" : promiss mode sync code terminated ");
}
test_promise();
test_promise();
test_promise();*/
// notification area 

// Notification.requestPermission().then(function(result) {
//     alert(result);
// });

