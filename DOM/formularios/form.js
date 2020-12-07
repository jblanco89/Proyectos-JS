 
 // Using auto invoke function to protect variables
 (function(){
     const form = document.getElementById('form'), // Accessing to form by id
     name = form.username,// accesing every form's element by name in this way 
     email = form.email,
     sex = form.sex,
     terms = form.terms,
     errors = document.getElementById('errors'), // reaching out errors by id
     success = document.getElementById('success') // reaching out errors by id

     // Performing functions to validate every element within user form
     function validateName(e) { // Validate name
         if (name.value == '' || name.value == null) {
             //console.log('ingresa nombre');
             errors.style.display ='block';
             errors.innerHTML = errors.innerHTML +  '<li> Verify Name Field </li>';
             e.preventDefault();
         } else {
             errors.style.display='none';
         } 
     }
     
     function validateEmail(e){ // validate email
         if (email.value == '' || email.value == null) {
             errors.style.display ='block';
             errors.innerHTML = errors.innerHTML + '<li>Email address no validate</li>';
             e.preventDefault();
         }else {
             errors.style.display='none';

         }
     }
     function validateSex(e){ // Validate sex (genre)
         if (sex.value == '' || sex.value == null) {
             errors.style.display = 'block';
             errors.innerHTML = errors.innerHTML + '<li>Select one Sex</li>';
             e.preventDefault();
         }else {
             errors.style.display='none';
         }
     }
     
     function validateTerms(e){ // validate terms and conditions
         if (terms.checked == false) {
            errors.style.display = 'block';
            errors.innerHTML = errors.innerHTML + '<li>Accept Terms and Conditions</li>';
            e.preventDefault();
         }else {
             errors.style.display = 'none';
         }
     }
     function successfulVal(){ // in construction... I think is better use jquery (AJAX) or any other library in JS
        if (!name.value == '' || !name.value == null && !email.value == '' || !email.value == null && !sex.value == '' || !sex.value == null && terms.checked == true) {
            success.style.display = 'block';
            success.style.position ='static';
            success.innerHTML = success.innerHTML + '<h3> Form succesfully sent </h3>';
        }
    }

     function validateForm(e){ // Function to call validating functions
         errors.innerHTML = ''; //reseting innerHTML block within form
         success.innerHTML = '';
         validateName(e);
         validateEmail(e);
         validateSex(e);
         validateTerms(e);
     }
     
     form.addEventListener('submit', validateForm); // submit event in the form


 }())