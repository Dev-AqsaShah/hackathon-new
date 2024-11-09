// Function to display uploaded profile image
function displayImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const resumeImage = document.getElementById("resumeImage");
    resumeImage.innerHTML = `<img src="${reader.result}" alt="Profile Image" style="width:100px;height:100px;border-radius:50%;">`;
  };
  reader.readAsDataURL(event.target.files[0]);
}

document.getElementById("imageUpload").addEventListener("change", displayImage);

// Function to generate the resume content
function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;
  const about = document.getElementById("about").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;
  const certifications = document.getElementById("certifications").value;

  document.getElementById("displayName").innerText = name;
  document.getElementById("displayEmail").innerText = `Email: ${email}`;
  document.getElementById("displayPhone").innerText = `Phone: ${phone}`;
  document.getElementById("displayCountryCity").innerText = `Location: ${city}, ${country}`;
  document.getElementById("displayAbout").innerText = about;
  document.getElementById("displayEducation").innerText = education;
  document.getElementById("displayExperience").innerText = experience;
  document.getElementById("displaySkills").innerText = skills;
  document.getElementById("displayCertifications").innerText = certifications;

  document.getElementById("builder").style.display = "none";
  document.getElementById("resume").style.display = "block";
}

document.getElementById("generateBtn").addEventListener("click", generateResume);

// Function to download the resume as a PDF
function downloadResume() {
  const { jsPDF } = window.jspdf;

  html2canvas(document.getElementById("resume")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 190; // Width of the PDF page
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("Resume.pdf");
  });
}

document.getElementById("downloadBtn").addEventListener("click", downloadResume);
