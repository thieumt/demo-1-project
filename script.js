'use strict'

const submitBtn   =  document.getElementById('pet-submit')
const showHealBtn =  document.getElementById('pet-show-heal')
const idInput     =  document.getElementById('pet-id')
const nameInput   =  document.getElementById('pet-name')
const ageInput    =  document.getElementById('pet-age')
const typeInput   =  document.getElementById('pet-type')
const weightInput =  document.getElementById('pet-weight')
const lengthInput =  document.getElementById('pet-length')
const colorInput  =  document.getElementById('pet-color')
const breedInput  =  document.getElementById('pet-breed')
const vaccinInput =  document.getElementById('pet-vaccinated')
const dewormInput =  document.getElementById('pet-dewormed')
const sterInput   =  document.getElementById('pet-sterilized')
const petArr      =  [];


function clearInput () {
   idInput.value = '';
   nameInput.value = '';
   ageInput.value = '';
   typeInput.value = 'Select Type';
   weightInput.value = '';
   lengthInput.value = '';
   colorInput.value = '';
   breedInput.value = 'Select breed';
   vaccinInput.checked = false;
   dewormInput.checked = false;
   sterInput.checked = false;
}

function renderTableData(petArr) {
   const tableBodyEl = document.getElementById('table-body');
   tableBodyEl.innerHTML = '';
   petArr.forEach(data => {
     const row = document.createElement('tr');
     row.innerHTML = `<td>${data.id}</td>
                      <td>${data.name}</td>
                      <td>${data.age}</td>
                      <td>${data.type}</td>
                      <td>${data.weight}</td>
                      <td>${data.length}</td>
                      <td>${data.breed}</td>
                      <td>${data.color}</td>
                      <td>${data.vaccinated}</td>
                      <td>${data.dewormed}</td>
                      <td>${data.sterilized}</td>
                      <td>${data.date}</td>
                      <td>${data.date}</td>
                      <td>${data.acton()}</td>`;

     tableBodyEl.appendChild(row);
   });
 }

 function validateData(data) {
   const deletePet = (petID) => {
   petArr = petArr.filter(pet => pet.id !== petID)


   idInput = document.getElementById('pet-id');
      idInput.addEventListener('blur', () => {
      const checkId = document.getElementById('pet-id').value;
      if (checkId.includes(idInput.value)) {
      alert("ID must be unique!");
      idInput.value = ""; 
      }
   });

   ageInput = document.getElementById('pet-age'); 
   ageInput.addEventListener('blur', () => {  
      const checkAge = parseInt(ageInput.value); 
      if (checkAge < 1 || checkAge > 15) { 
         alert("Age must be between 1 and 15!"); 
         ageInput.value = ""; 
      }
   });

   weightInput = document.getElementById('pet-weight'); 
   weightInput.addEventListener('blur', () => {  
      const checkWeight = parseInt(weightInput.value); 
      if (checkWeight < 1 || checkWeight > 15) { 
         alert("Weight must be between 1 and 15!"); 
         weightInput.value = ""; 
      }
   });

   lengthInput = document.getElementById('pet-length'); 
   lengthInput.addEventListener('blur', () => {  
      const checkLength = parseInt(lengthInput.value); 
      if (checkLength < 1 || checkLength > 100) { 
         alert("Length must be between 1 and 100!"); 
         lengthInput.value = ""; 
      }
   });

   typeInput = document.getElementById('pet-type');
   typeInput.addEventListener('blur', () => {
   const checkType = typeInput.value;
   if (checkType === "") {
      alert("Please select Type!");
      typeInput.focus();
   }
   });

   breedInput = document.getElementById('pet-breed');
   breedInput.addEventListener('blur', () => {
   const checkBreed = breedInput.value;
   if (checkBreed === "") {
      alert("Please select Breed!");
      breedInput.focus();
   }
   });
}}
validateData()
renderTableData()

submitBtn.addEventListener('click', function (){

   const data  =  {
            id:        idInput.value,
            name:      nameInput.value,
            age:       ageInput.value,
            type:      typeInput.value,
            weight:    weightInput.value,
            lengthpet: lengthInput.value,
            breed:     breedInput.value,     
            color:     colorInput.value,
            vaccinated:vaccinInput.checked,
            dewormed:  dewormInput.checked,
            sterilized:sterInput.checked,
            date:      new Date(),
            acton: function (){
               const btn = document.createElement("button");
               btn.textContent = "Delete";
               btn.style.backgroundColor = "red";
               btn.style.color = "white";
               btn.addEventListener("click", function() {
                  if (confirm('Are you sure')){
                     deletePet(petID);
                     btn.dataset.id = this.id;
                  }                
                });  
               return btn;             
            }    
   }

   const validateRs = validateData(data);
   if (validateRs) {
      petArr.push(data)
      clearInput()
      renderTableData(petArr)
   }
})

showHealBtn.addEventListener('click', function (){
   let healCheck = false;
   healPetArr = []
})


