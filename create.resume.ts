// Type definitions for form fields
interface ResumeData {
    fullName: string;
    address: string;
    phone: string;
    email: string;
    about: string;
    education: string;
    skills: string;
  }
  
  // Function to collect form data and generate the resume
  function generateResume(): void {
    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const about = (document.getElementById("about") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
  
    // Populate resume data structure
    const resumeData: ResumeData = {
      fullName,
      address,
      phone,
      email,
      about,
      education,
      skills
    };
  
    // Generate resume content using resumeData
    const resumeContent = `
      <p><strong>Name:</strong> ${resumeData.fullName}</p>
      <p><strong>Address:</strong> ${resumeData.address}</p>
      <p><strong>Phone:</strong> ${resumeData.phone}</p>
      <p><strong>Email:</strong> ${resumeData.email}</p>
      <p><strong>About Me:</strong> ${resumeData.about}</p>
      <p><strong>Education:</strong> ${resumeData.education}</p>
      <p><strong>Skills:</strong> ${resumeData.skills}</p>
    `;
  
    const resumeContainer = document.getElementById("resumeContainer") as HTMLElement;
    const resumeContentContainer = document.getElementById("resumeContent") as HTMLElement;
    resumeContentContainer.innerHTML = resumeContent;
  
    // Display resume with animation and hide form
    resumeContainer.style.display = "block";
    (document.getElementById("resumeForm") as HTMLElement).style.display = "none";
  }
  
  // Function to allow editing the resume
  function editResume(): void {
    const resumeContainer = document.getElementById("resumeContainer") as HTMLElement;
    const resumeForm = document.getElementById("resumeForm") as HTMLElement;
  
    // Hide resume and show form
    resumeContainer.style.display = "none";
    resumeForm.style.display = "block";
  }
  