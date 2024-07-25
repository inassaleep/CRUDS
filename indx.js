var book = document.getElementById ("book");
var Authorr = document.getElementById("Authorr");
var Gener = document.getElementById("Gener");
var Year = document.getElementById("Year");
var Quantity = document.getElementById("Quantity")
var myBody = document.getElementById ("myBody")
var demo = document.getElementById ("demo")
 var  mee = document.getElementById ("mee")
 var addList =[]
 //function object
function list(){
    var proudect={
        book:book.value,
        Authorr: Authorr.value,
        Gener:Gener.value,
        Year:Year.value,
        Quantity:Quantity.value,
    }
     addList.push(proudect)
    
    booker() 
}
//function 
function booker() {
    var cartona = ``;
    for(var i = 0; i< addList.length ; i++){
        cartona += 
        `<tr>
        <td>${addList[i].book}</td>
        <td><${addList[i].Authorr}</td>
        <td>${addList[i].Gener}</td>
        <td>${addList[i].Year}</td>
        <td>${addList[i].Quantity}</td>
        <td><button onclick="eidet()" class="btn btn-outline-success ">Edit</button></td>
        <td><button onclick="pro()" class="btn btn-outline-danger">Delet</button></td>
    </tr> 
        `
    }
   

 
    myBody.innerHTML = cartona;
}
 


 function pro(){
    var x= window.prompt("Are you want to delet ")
 }
 //clear all
 function cleaerAll(){
    book.value ="";
    Authorr.value="";
    Gener.value ="";
    Year.value ="";
    Quantity.value ="";
    
 }
 /////////////list
function eidet(){
var car ="",

car =
`  <div class="list hide" id="mee" >

<h2 class="py-2 mx-2">Edit Book</h2>
<div class="w-75 mx-auto">
<div class="groub py-2">
    <label class="text-dark mt-2 " for="title">Book Title :</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="fultter">
</div>
<div class="groub py-2">
    <label class="text-dark mt-2 " for="dear">Author :</label>
    <input type="text" class="form-control" id="dear" aria-describedby="emailHelp" placeholder="dear progrmmeer">
</div>
<div class="groub py-2">
    <label class="text-dark mt-3 " for="yers">year :</label>
    <input type="text" class="form-control" id="yers" aria-describedby="emailHelp" placeholder="year">
</div>

</div>  
<div class="btn">
<button    class="btn btn-danger mt-4">save changes</button>
<button onclick=" close()" class="btn btn-primary mt-4 ms-2">close</button>
</div> 
</div>
`
//demo .innerHTML = car
showList()
}
///////
function close(){
    mee.classList.add("hide")
}
  function showList(){
    mee.classList.remove("hide")
  }
 