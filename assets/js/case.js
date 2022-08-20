
// adding

function updateCaseNumber(isIncrease){
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberFieldString = caseNumberField.value;
  const caseNumber = parseInt(caseNumberFieldString); 


  let currentCaseTotal;
  if(isIncrease){
    currentCaseTotal = caseNumber + 1; 

  }else{
     currentCaseTotal = caseNumber - 1; 
  }


  caseNumberField.value = currentCaseTotal;
  return currentCaseTotal;
}

document.getElementById("btn-case-plus").addEventListener('click', function(){

    // ---------------we did it first----------------------
  //const caseNumberField = document.getElementById("case-number-field");
  //const caseNumberFieldString = caseNumberField.value;
  //const caseNumber = parseInt(caseNumberFieldString);
  //const newCaseNumber = caseNumber +1;
  //caseNumberField.value = newCaseNumber;

 const newCaseNumber =  updateCaseNumber(true);
 const caseTotalPrice = newCaseNumber*59;
 const caseTotalElement = document.getElementById("case-total");
 caseTotalElement.innerText = caseTotalPrice; 
 calculateSubTotal();


  //console.log('caseNumber')
})

//substracting 

document.getElementById("btn-case-minus").addEventListener('click', function(){

  // ---------------we did it first----------------------
  //const caseNumberField = document.getElementById("case-number-field");
  //const caseNumberFieldString = caseNumberField.value;
  //const caseNumber = parseInt(caseNumberFieldString);
  //const newCaseNumber = caseNumber -1;
  //caseNumberField.value = newCaseNumber;
  

  const newCaseNumber = updateCaseNumber(false);
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
  calculateSubTotal();
});