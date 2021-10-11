

 function GetDays(){
    var adultNumber =document.getElementById("adult").value;
    var toDate= new Date(document.getElementById("toDate").value);
    var fromDate = new Date(document.getElementById("fromDate").value);
    return parseInt((toDate - fromDate) / (24 * 3600 * 1000))*adultNumber*1000;

 }
 function call(){
    if(toDate>fromDate && adultNumber >0  ){
        document.getElementById("price").value="Rs."+ GetDays();
        document.getElementById("book-now").removeAttribute("disabled")

    }  else{
        document.getElementById("price").value="Rs.0";
        document.getElementById("book-now").setAttribute("disabled",true);
    }
    }
    