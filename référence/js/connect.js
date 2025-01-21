let UserId=document.getElementById("Userid");

let mdpId=document.getElementById("mdpid");
let submit=document.getElementById("submitid");
submit.addEventListener("click",function(event){
event.preventDefault();
/*alert("j'ai cliquer sur le bouton");*/
let spngenerale=document.getElementById("spngenerale");
 if(UserId.value=="" || mdpId.value==""){
   spngenerale.innerHTML="remplisez les champs svp ..";
   spngenerale.style.color='red';
   if (UserId.value=="") {
   	UserId.style.borderColor = 'red';
   }else{
   	UserId.style.borderColor = 'black';
   }
   if (mdpId.value == "") {
   	mdpId.style.borderColor = 'red';
   }else{
   	mdpId.style.borderColor = 'black';
   }
 }else{
 	spngenerale.innerHTML="";
 	UserId.style.borderColor='black';
 	mdpId.style.borderColor='black';
 }
});
