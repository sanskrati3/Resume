function addNewWeFeild(){
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weFeild");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",2);
  newNode.setAttribute("placeholder","Enter Here");

  let weOb=document.getElementById("we");
  let weAddButtonOb=document.getElementById("weFeild");

  weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAqFeild(){
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqFeild");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",2);
  newNode.setAttribute("placeholder","Enter Here");

  let aqOb=document.getElementById("aq");
  let aqAddButtonOb=document.getElementById("aqFeild");

  aqOb.insertBefore(newNode,aqAddButtonOb);
}

// generating cv
function generateCv(){

// saving datat to database

//   try{
//       const genEmployee=new Generate({
//         name:req.body.name,
//         contact:req.body.contact,
//         address:req.body.address,
//         fblink:req.body.fblink,
//         instalink:req.body.instalink,
//         ldlink:req.body.ldlink,
//         obj:req.body.obj,
//         ex:req.body.ex,
//         ad:req.body.ad,
//
//   })
// const gen=await genEmployee.save();
// res.status(201).render("index");
//   }
//   catch(error){
//     res.status(400).send(error);
//   }

var img=document.getElementById("imgT");
var path=document.getElementById("imgFeild").files[0].name;
console.log(path);
img.setAttribute("src","C:/Users/hi/Downloads/"+path);

document.getElementById("nameT1").innerHTML=document.getElementById("nameFeild").value;
document.getElementById("nameT2").innerHTML=document.getElementById("nameFeild").value;
document.getElementById("contactT").innerHTML=document.getElementById("contactFeild").value;
document.getElementById("addressT").innerHTML=document.getElementById("addressFeild").value;
document.getElementById("fbT").innerHTML=document.getElementById("fbFeild").value;
document.getElementById("instaT").innerHTML=document.getElementById("instaFeild").value;
document.getElementById("linkedT").innerHTML=document.getElementById("linkedFeild").value;
// objective
document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveFeild").value;
// work expeience
let wes=document.getElementsByClassName("weFeild");
let str="";
for(let e of wes)
{
  str=str+"<li>" +e.value+"</li>";
}
document.getElementById("weT").innerHTML=str;

// acedemic Qualification
let aqs=document.getElementsByClassName("eqFeild");
let str2="";
for(let a of aqs)
{
  str2=str2+"<li>" +a.value+"</li>";
}
document.getElementById("aqT").innerHTML=str2;

document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";
}

//print cv
function printCv(){
  window.print();
}
