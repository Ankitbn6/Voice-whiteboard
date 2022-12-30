
var data1=[
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Narendra Modi",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Narendra ",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:" Modi",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing ",
        time:"5:00pm",
        name1:"Narendra ",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Narendra ",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Narendra Modi",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Narendra Modi",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Narendra Modi",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Narendra Modi",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Narendra Modi",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Akarshak Shrihari pr",
    },
    {
        image:"Untitled design.png",
        service:"Mike Testing",
        time:"5:00pm",
        name1:"Narendra Modi",
    },
    
]

document.querySelector("form").addEventListener("submit",myfunction);

function myfunction(){
data1.map(function(ele){
   event.preventDefault();
//    var i=0;
   var box=document.createElement("div");
   box.setAttribute("class","box");

   var image=document.createElement("img");
   image.setAttribute("class","image");
   image.src=ele.image;

   var detail=document.createElement("div");
   detail.setAttribute("class","detail");


   var service=document.createElement("div");
   service.setAttribute("class","service");
   ele.service=document.querySelector("#serv").value;
   service.textContent=ele.service;


   var time=document.createElement("div");
   time.setAttribute("class","time");
   ele.time=document.querySelector("#timing").value;
   time.textContent=ele.time;


   var name1=document.createElement("div");
   name1.setAttribute("class","name1");
   ele.name1=document.querySelector("#nameOf").value;
   name1.textContent=ele.name1;


   
   detail.append(service,time,name1);
   box.append(image,detail);
   document.querySelector("#container").append(box);
   i++;
});
}