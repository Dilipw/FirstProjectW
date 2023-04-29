function suB() {
   ret=confirm('Your Form will be submit if info is correct');

   if(ret==true)
   {


       document.write("<b>Your form is Submitted successfully</b>");

       return true;
   }
   else 
   {
       alert("Please fill valus correctly");
   }
}

function Redirect(){
    window.location="Aristotle_Onassis.html";
}

alert("Fill form carefully");