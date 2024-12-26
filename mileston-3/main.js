var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload 
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    // genearate theh content dynamically 
    var resumeHTML = "\n<h2><b>Resume<b></h2>\n<h3><b>Personal Information<b></h3>\n<p><b> Name:</b>".concat(name, "</p>\n<p><b> Email:</b>").concat(email, "</p>\n<p><b> Phone:</b>").concat(phone, "</p>\n\n\n<h3> EDUCATION </h3>\n<p>").concat(education, " </p>\n\n<h3> Experiance </h3>\n<p>").concat(experiance, " </p>\n\n<h3> Skills </h3>\n<p>").concat(skills, " </p>\n\n");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing ');
    }
});
