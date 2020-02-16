function getExact (Name){
var date = parseInt(document.getElementById("Date").value);
var year = parseInt(document.getElementById("Year").value);
var month = parseInt(document.getElementById("Month").value);
var gender = document.getElementById("Gender").value;
var century = year.slice(1,2);
var yearr = year.slice(2,4);
if (month === "" || month < 1 || month > 12 || date === "" || date < 0 ||
             date > 31 || year === "" || year.length > 4 || name === ""){
        alert("Confirm that you have entered the correct information!")
    }else{
        var day = Math.floor((((century/4)-2*century-1)+((5*years/4))+((26*(month+1)/10)) + date) % 7);
        return day
    }
}
function getDay (Day){

if(day ===1  || gender === "female"){
  alert("Your akan name is Akosua for you were born on a Sunday");


}else if(day ===2 || gender === "female"){
  alert("Your akan name is Adjoa for you were born on a Monday");


}else if(day ===3 || gender === "female"){
  alert("Your akan name is Abena for you were born on a Tuesday");

}else if(day ===4 || gender === "female"){
  alert("Your akan name is Akua for you were born on a Wednesday");

}else if(day ===5 || gender === "female"){
  alert("Your akan name is Yaa for you were born on a Thursday");

}else if(day ===6 || gender === "female"){
  alert("Your akan name is Afua for you were born on a Friday");

}else if(day ===7 || gender === "female"){
alert("Your akan name is Ama for you were born on a Saturday");

}else if(day ===1 || gender === "male"){
  alert("Your akan name is Kwes for you were born on a Sunday");

}else if(day ===2 || gender === "male"){
  alert("Your akan name is Kojo for you were born on a Monday");

}else if(day ===3 || gender === "male"){
  alert("Your akan name is Kwabena for you were born on a Tuesday");

}else if(day ===4 || gender === "male"){
  alert("Your akan name is Kwaku for you were born on a Wednesday");

}else if(day ===5 || gender === "male"){
  alert("Your akan name is Yaw for you were born on a Thursday");

}else if(day ===6 || gender === "female"){
  alert("Your akan name is Kofi for you were born on a Friday");

}else if(day ===7  || gender === "female"){
  alert("Your akan name is Kwame for you were born on a Saturday")

}
}
