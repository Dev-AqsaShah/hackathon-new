// Function to collect form data and generate the resume
function generateResume() {
    var fullName = document.getElementById("fullName").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var about = document.getElementById("about").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    // Populate resume data structure
    var resumeData = {
        fullName: fullName,
        address: address,
        phone: phone,
        email: email,
        about: about,
        education: education,
        skills: skills
    };
    // Generate resume content using resumeData
    var resumeContent = "\n      <p><strong>Name:</strong> ".concat(resumeData.fullName, "</p>\n      <p><strong>Address:</strong> ").concat(resumeData.address, "</p>\n      <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n      <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n      <p><strong>About Me:</strong> ").concat(resumeData.about, "</p>\n      <p><strong>Education:</strong> ").concat(resumeData.education, "</p>\n      <p><strong>Skills:</strong> ").concat(resumeData.skills, "</p>\n    ");
    var resumeContainer = document.getElementById("resumeContainer");
    var resumeContentContainer = document.getElementById("resumeContent");
    resumeContentContainer.innerHTML = resumeContent;
    // Display resume with animation and hide form
    resumeContainer.style.display = "block";
    document.querySelector(".form-container").style.display = "none";
  document.getElementById("resumeContainer").style.display = "block";
    document.getElementById("resumeForm").style.display = "none";
}
// Function to allow editing the resume
function editResume() {
    var resumeContainer = document.getElementById("resumeContainer");
    var resumeForm = document.getElementById("resumeForm");
    // Hide resume and show form
    resumeContainer.style.display = "none";
    resumeForm.style.display = "block";
    document.querySelector(".form-container").style.display = "block";
  document.getElementById("resumeContainer").style.display = "none";
}


function downloadResume() {
    const resumeContent = document.getElementById("resumeContent").textContent;
    const blob = new Blob([resumeContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.txt";
    link.click();
  }