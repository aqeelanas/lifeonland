let progress = 0;
function resetForm() {
    // Reset all fields to initial empty state
    document.getElementById("firstName").textContent = "First Name: ";
    document.getElementById("lastName").textContent = "Last Name: ";
    document.getElementById("age").textContent = "Age: ";
    document.getElementById("gender").textContent = "Gender: ";
    document.getElementById("personal").textContent = "Additional Info: ";

    document.getElementById("study").textContent = "Area of Study: ";
    document.getElementById("degree").textContent = "Highest Degree: ";
    document.getElementById("university").textContent = "University/Institution: ";
    document.getElementById("year").textContent = "Completion Year: ";
    
    document.getElementById("update").textContent = "Receive new updates: ";
    document.getElementById("goal").textContent = "Goals: ";
    document.getElementById("user").textContent = "First-time user: ";
    document.getElementById("survey").textContent = "Providing feedbacks: ";

    document.getElementById("country").textContent = "Country: ";
    document.getElementById("town").textContent = "Town: ";
    document.getElementById("mobile").textContent = "Tel: ";
    document.getElementById("email").textContent = "Email: ";
    document.getElementById("agree").textContent = "Agree with privacy terms: ";

    progress = 0;
    updateProgressBar(progress);
}

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function updateProgressBar(progress) {
    var progressBar = document.getElementById("progress");
    var progressbar = document.getElementById("progressbar");
    
    progressbar.style.display = "block"; // Ensure progress bar container is visible
    progressBar.style.width = progress.toFixed(2) + "%"; // Set the width of progress bar
    progressBar.innerHTML = progress.toFixed(2) + "%"; // Display the progress percentage
}

function inputText(question, field) {
    while (true) {
        let term = prompt(question);
        if (term !== null && term.trim() !== "") {
            return term.trim();
        } else {
            alert(field);
        }
    }
}

function inputNumber(question, alertMsg, min, max) {
    while (true) {
        let term = prompt(question);
        if (term !== null && term.trim() !== "" && !isNaN(term) && Number.isInteger(Number(term)) && Number(term) > min && Number(term) < max) {
            return Number(term);
        } else {
            alert(alertMsg);
        }
    }
}

function progressBar() {
    
    let currentPrompt = 1;

    function askNextPrompt() {
        switch (currentPrompt) {
            case 1:
                let fname = inputText("Please enter your first name:", "First name cannot be empty. Please enter.");
                document.getElementById("firstName").innerHTML = "First Name: " + fname.charAt(0).toUpperCase() + fname.slice(1);

                let lname = inputText("Please enter your surname:", "Surname cannot be empty. Please enter.");
                document.getElementById("lastName").innerHTML = "Last Name: " + lname.charAt(0).toUpperCase() + lname.slice(1);
                
            
                let age = inputNumber("Please enter your age.", "Please enter a valid age (positive integer).",0,150);
                document.getElementById("age").innerHTML = "Age: " + age;
                

                while (true) {
                    let gender = prompt("Enter your gender (male, female, prefer not to say): ");
                    if (gender !== null && gender.trim() !== "") {
                        gender = gender.trim().toLowerCase();
                        if (gender === "male" || gender === 'female' || gender === "prefer not to say") {
                            document.getElementById("gender").innerHTML = "Gender: " + gender.charAt(0).toUpperCase() + gender.slice(1);
                            break;
                        } else {
                            alert("Please enter a valid gender (male, female, prefer not to say).");
                        }
                    } else {
                        alert("Gender input cannot be empty.");
                    }
                }
               

                let personal = prompt("Do you wanna add more something about yourself?");
                if(personal !== null && personal.trim() !== ""){
                    document.getElementById("personal").innerHTML = "Additional Info: " + personal;
                    alert("Proceeding to step 2.......");
                    progress = 25;
                } else {
                    document.getElementById("personal").textContent = "Additional Info: Not provided.";
                    alert("Proceeding to step 2.......");
                    progress = 20;
                }
                document.getElementById("updatePersonal").classList.remove("hidden");
                break;
                
            case 2:
                let study = inputText("Area of study (IT, Business, or mention the proper field): ", "Study field cannot be empty.");
                document.getElementById("study").innerHTML = "Area of study: " + study.charAt(0).toUpperCase() + study.slice(1);
                
                let degree = inputText("Highest degree you have achieved: ", "Degree field cannot be empty.");
                document.getElementById("degree").innerHTML = "Highest degree: " + degree.charAt(0).toUpperCase() + degree.slice(1);
                
                let university = inputText("Studied University/Institution: ", "University field cannot be empty.");
                document.getElementById("university").innerHTML = "University/Institution: " + university.charAt(0).toUpperCase() + university.slice(1);

                let year = inputNumber("Completion year: ", "Please enter a valid year.",1940,2050);
                document.getElementById("year").innerHTML = "Completion year: " + year;
                alert("Proceeding to step 3.......");
                progress += 25;
                break;             
            case 3:
                if (confirm("Would you like to continue to answer general questions")) {
                    let update = confirm("Are you interseted in receiving new updates?");
                    if (update) {
                        document.getElementById("update").textContent = "Receive new updates: Yes";
                    } else {
                        document.getElementById("update").textContent = "Receive new updates: No";
                    }
                    
                    let goal = inputText("Do you have any specific goals or aspirations realted to our website?", "You cannot leave an empty space. Please enter.");
                    document.getElementById("goal").innerHTML = "Goals: " + goal;

                    while(true){
                        let user = prompt("Are you a first-time user of our website(yes/no)?");
                        if (user !==null && user.trim() != ""){
                            user= user.trim().toLowerCase()
                            if(user == "yes" || user == "no"){
                                document.getElementById("user").innerHTML = "First-time user:" + user.charAt(0).toUpperCase() + user.slice(1);
                                break;
                            } else {
                                alert("Please enter a valid answer(yes/no).");
                            } 
                        } else {
                            alert("You can't leave an empty field.")
                        }
                    }
                    

                    let survey = confirm("Are you interseted in participating in surveys or providing feedback?");
                    if (survey) {
                        alert("proceeding to step 4...........");
                        document.getElementById("survey").textContent = "Providing feedbacks: Yes";
                    } else {
                        alert("proceeding to step 4...........");
                        document.getElementById("survey").textContent = "Providing feedbacks: No";
                    }
                    progress += 25;
                } else {   
                    
                    document.getElementById("update").textContent = "Receive new updates: Not provided.";
                    document.getElementById("goal").textContent = "Goals: Not provided.";
                    document.getElementById("user").textContent = "First-time user: Not provided.";
                    document.getElementById("survey").textContent = "Providing feedbacks: Not provided.";
                    alert("proceeding to step 4...........");
                }
                document.getElementById("updateGeneral").classList.remove("hidden");
                break;
            case  4:
                let country = inputText("Country which you live: ", "Country field cannot be empty.");
                document.getElementById("country").innerHTML = "Country: " + country.charAt(0).toUpperCase() + country.slice(1);

                let town = prompt("Please enter the town you live:")
                if (town !== null && town.trim()!==""){
                    town= town.trim().toLowerCase();
                    document.getElementById("town").innerHTML = "Town: " + town.charAt(0).toUpperCase() + town.slice(1);
                    progress += 10;
                } else {
                    document.getElementById("town").textContent = "Town: Not provided.";
                    progress += 5;
                }
                document.getElementById("updateContact").classList.remove("hidden");


                while (true) {
                    let mobile = prompt("Please enter your mobile number:", );
                    if (mobile !== null && mobile.trim() !== "" && !isNaN(mobile) && Number.isInteger(Number(mobile)) && mobile.length > 9) {
                        document.getElementById("mobile").innerHTML = "Tel: " + mobile;
                        break;
                    } else {
                        alert("Please enter a valid number");
                    }
                }

                const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                while (true) {
                    let email = prompt("Please enter your email address:");
                    if (email !== null && email.trim() !== "" && emailCheck.test(email)) {
                        document.getElementById("email").innerHTML = "Email: " + email;
                        break;
                    } else {
                        alert("Please enter a valid email address.");
                    }
                }
                

                let agree = confirm("Do you agree to the terms and conditions?");
                if (agree) {
                    alert("You have agreed to the terms and conditions. Proceeding to the next step......");
                    document.getElementById("agree").textContent = "Agree with privacy terms: Yes";
                } else {
                    document.getElementById("agree").textContent = "Agree with privacy terms: No";
                }
                progress += 15;
                document.getElementById("updateContact").classList.remove("hidden");
                document.getElementById("submitButton").classList.remove("hidden");
                document.getElementById("reset").classList.remove("hidden");
                break;
            
            default:
                break;
        }

    
           
        
        currentPrompt++;
        setTimeout(askNextPrompt, 500);
        updateProgressBar(progress);
    }
    // Start asking prompts
    askNextPrompt();
}

function submitForm() {
    showPopup(); // Show the thank you popup
}

document.getElementById("beginButton").addEventListener("click", function() {
    closePopup(); // Close any open popup
    document.querySelector('h1').classList.add('hidden');
    
    var overlay = document.querySelector(".overlay");
    overlay.style.display = 'none';

    document.querySelector(".container").classList.remove("hidden"); // Show the main container
    document.getElementById("progressbar").classList.remove("hidden"); // Show the progress bar container
    document.getElementById("form").classList.remove("hidden"); // Show the form
    this.style.display = "none"; // Hide the "Begin!" button
    setTimeout(function() {
        progressBar(); // Start the progress bar process
    }, 500); // Delay for half a second for smoother transition
});

document.getElementById("updatePersonal").addEventListener("click", function() {
    if (document.getElementById("personal").textContent !== "Additional Info: Not provided.") {
        alert("Personal info is already provided.");
    } else {
        alert("Updating personal info...");
        let personal = prompt("Do you wanna add more something about yourself?");
        if(personal !== null && personal.trim() !== ""){
            document.getElementById("personal").innerHTML = "Additional Info: " + personal;
            alert("Personal info updated successfully")
            progress +=5;
        } else {
            document.getElementById("personal").textContent = "Additional Info: Not provided.";
        }
        
    }
});

document.getElementById("updateGeneral").addEventListener("click", function() {
    if (document.getElementById("update").textContent !== "Interested in receiving new updates: Not provided." && 
        document.getElementById("goal").textContent !== "Goals: Not provided." && 
        document.getElementById("user").textContent !== "First-time user of the website: Not provided." && 
        document.getElementById("survey").textContent !== "Participating in surveys or providing feedbacks: Not provided.") {
        alert("General questions are already answered.");
    } else {
        alert("Updating general questions...");
        let update = confirm("Are you interseted in receiving new updates?");
        if (update) {
            document.getElementById("update").textContent = "Receive new updates: Yes";
        } else {
            document.getElementById("update").textContent = "Receive new updates: No";
        }
        
        let goal = inputText("Do you have any specific goals or aspirations realted to our website?", "You cannot leave an empty space. Please enter.");
        document.getElementById("goal").innerHTML = "Goals: " + goal;
        
        while(true){
            let user = prompt("Are you a first-time user of our website(yes/no)?");
            if (user !==null && user.trim() != ""){
                user= user.trim().toLowerCase()
                if(user == "yes" || user == "no"){
                    document.getElementById("user").innerHTML = "First-time user:" + user.charAt(0).toUpperCase() + user.slice(1);
                    break;
                } else {
                    alert("Please enter a valid answer(yes/no).");
                } 
            } else {
                alert("You can't leave an empty field.")
            }
        }
               

        let survey = confirm("Are you interseted in participating in surveys or providing feedback?");
        if (survey) {
            document.getElementById("survey").textContent = "Providing feedbacks: Yes";
        } else {
            document.getElementById("survey").textContent = "Providing feedbacks: No";
        }
        alert("General questions updated successfully")
        progress += 25;
    }
});

document.getElementById("updateContact").addEventListener("click", function() {
    if (document.getElementById("town").textContent !== "Town: Not provided.") {
        alert("Contact info is already provided.");
    } else {
        alert("Updating Contact info...");
        let town = prompt("Please enter the town you live:")
        if (town !== null && town.trim()!==""){
            town= town.trim().toLowerCase();
            document.getElementById("town").innerHTML = "Town: " + town.charAt(0).toUpperCase() + town.slice(1);
            alert("Contact info updated successfully!")
            progress += 5;
        } else {
            document.getElementById("town").textContent = "Town: Not provided.";
        }
    }
});

document.getElementById("reset").addEventListener("click", function(){
    resetForm();
    setTimeout(function() {
        progressBar();
    }, 500);
});

document.addEventListener('mousemove', function(e) {
    const footer = document.querySelector('.footer');
    if (window.innerHeight - e.clientY < 50) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});