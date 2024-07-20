// funtion to submit and view summary of form
function submit_form (){
    // get the values from inputs
    const name_user = document.getElementById('name').value;
    const user_mail = document.getElementById("email").value;
    const user_subject = document.getElementById("subject").value;

    // check if validation passed
    if (!validate_form()){
        return;
    }
    // store in variable to view in modal
    const previewContent = `
    <p><strong>Your Name:</strong> ${name_user}</p>
    <p><strong>E - mail:</strong> ${user_mail}</p>
     <p><strong>Subject:</strong> ${user_subject}</p>


   
   
  `;
    // view in modal
    document.getElementById('previewContent').innerHTML = previewContent;
    document.getElementById('previewModal').style.display = 'block';
}
// function to close modal
function close_summary () {
    document.getElementById('previewModal').style.display = 'none';
}

// function to validate form
function validate_form () {// hide previous errors that were displayed
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('subjectError').style.display = 'none';
    document.getElementById('ratingError').style.display = 'none';

    let validate_elements = true;// get inputs
    const user_mail = document.getElementById("email").value;
    const user_subject = document.getElementById("subject").value;
    const name_user = document.getElementById('name').value;

    // validate email by checking  if empty
    if (user_mail.trim() === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        document.getElementById('emailError').style.display = 'block';
        validate_elements = false;
    }
    //call validate email function
    else if (!validate_email()){
        document.getElementById('emailError').innerText = 'Email is required';
        document.getElementById('emailError').style.display = 'block';
        validate_elements = false;
    }
  
    // check if name is empty
    if (name_user.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        validate_elements = false;
    }

    //check if subject is empty
    if (user_subject.trim() === '') {
        document.getElementById('subjectError').innerText = 'Subject is required';
        document.getElementById('subjectError').style.display = 'block';
        validate_elements = false;
    }
    

    // check if rating is not selected
    const rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        document.getElementById('ratingError').innerText = 'Rating is required';
        document.getElementById('ratingError').style.display = 'block';
        validate_elements = false;
      }
    
    return validate_elements;
}


// function to validate email
function validate_email () {
    let at_found = false;
    let dot_found = false;
    let space_found = true;
    let emailValid = false
    const user_mail = document.getElementById("email").value.trim();

    // check for '@' , '.' or spaces
    for (let i = 0; i < user_mail.length; i++) {
        if (user_mail[i] === "@" ) {
            if (user_mail[i+1]!=="."){
                at_found= true;
            }
        }
        if (user_mail[i] === "."){
            dot_found = true;
        }
        if (user_mail[i] === " "){
            space_found = false;
        }
    }


    if (at_found && dot_found && space_found){
        emailValid = true; 
    }
    return emailValid;
}


function close_send () {// function to display confirmation message
   

    document.getElementById('previewModal').style.display = 'none';
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "block"; 

}


function refresh(){// close modal and reset form
    document.getElementById("feedback_form").reset();
    document.getElementById('confirmationModal').style.display = 'none';
}