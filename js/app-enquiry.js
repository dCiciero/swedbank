
var reviews = [
  {
    id: 1,
    question: "Enter your personal details",
    fname: "",
    lname: "",
    addy: "",
    email: "",
  },
  {
    id: 2,
    question: "Are you currently employed?",
    employed: ""
  },
  {
    id: 3,
    question: "Means of Identification",
    answer: ""
  },
  {
    id: 4,
    question: "Purpose of Loan",
    answer: "",
  },
];
const fname = document.getElementById("txtfirstname");
const lname = document.getElementById("txtlastname");
const email = document.getElementById("txtemail");
const address = document.getElementById("txtaddress");
const question = document.querySelector('.questionaire')
const biodata = document.querySelector('.biodata');
const empdetails = document.querySelector('.emp-details');
const identity = document.querySelector('.identification');
const loanpurpose = document.querySelector('.loanpurpose');
const loanpurpose_text = document.querySelector('#txtloanpurpose')
const errormsg = document.querySelector('.errormsg');
const summary = document.querySelector('.summary');
const enquiryDiv = document.querySelector('.enquiry-container');
const titleDiv = document.querySelector('.title');
const navBtnDiv = document.querySelector('.button-container');


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const summaryBtn = document.querySelector(".summary-btn");


// set starting item
let currentDetails = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  identity.style.display = "none";
  loanpurpose.style.display = "none";
  prevBtn.style.display = "none";
  errormsg.style.display = "none";
  summary.style.display = "none";
  

  const item = reviews[currentDetails];
  question.textContent = item.question
  // console.log(item.question);
});

function displayError(msg) {
  errormsg.textContent = msg;
  errormsg.style.display = "block";
}

function clearError() {
  errormsg.textContent = "";
  errormsg.style.display = "none";
}

function getDetails(info) {
  let details = reviews[info];
  if (details.id == 1){
    details.fname = fname.value; // "fname.textContent"
    details.lname = lname.value //textContent
    details.email = email.value  //textContent
    details.addy = address.value   //textContent
  }
  else if (details.id == 2){
    details.employed = document.querySelector('.emp-form-check-input:checked').value
  }
  else if (details.id == 3){
    details.answer = document.querySelector('.id-form-check-input:checked').value
  }
  else if (details.id == 4){
    details.answer = loanpurpose_text.value
  }

  return details
}

function validateInput() {
  if ((fname.value === null || fname.value === "") || (lname.value === null || lname.value === "") 
  || (email.value === null || email.value === "") || (address.value === null || address.value === "")) {
      displayError("All entries are required");
      return false;
  }
  return true
}
// show next Q
nextBtn.addEventListener("click", function () {
  
  // console.log(fname.textContent);
  
  switch (currentDetails) {
    case 0:
      console.log(fname.value);
      if (!validateInput()){
        return
      }
      // clearError();
      biodata.style.display = "None";
      empdetails.style.display = "block";
      currentDetails++;
      question.textContent = reviews[currentDetails].question;
      prevBtn.style.display = "inline-block"
      break;
    case 1:
      details = getDetails(currentDetails);
      if (details.employed == "No"){
        displayError("You have to be employed to apply for a loan");
        return;
      }
      clearError();
      empdetails.style.display = "None";
      identity.style.display = "block";
      currentDetails++;
      question.textContent = reviews[currentDetails].question;
      break;
    case 2:
      identity.style.display = "None";
      loanpurpose.style.display = "block";
      currentDetails++;
      question.textContent = reviews[currentDetails].question;
      nextBtn.style.display = 'none';
      break;
    default:
      break;
  }
  console.log(reviews[currentDetails].question);
  // currentDetails++;
  if (currentDetails > reviews.length - 1) {
    currentDetails = 0;
  }
  // console.log(details);
  // if 

});
// show prev Q
prevBtn.addEventListener("click", function () {
  
  switch (currentDetails) {
    // case 0:
    //   prevBtn.setAttribute('disabled', 'disabled')
    //   question.textContent = reviews[currentDetails].question;  
    //   break;
    case 1: 
      biodata.style.display = "block";
      empdetails.style.display = "none";
      currentDetails--;
      question.textContent = reviews[currentDetails].question;
      prevBtn.style.display = 'none';
      break;
    case 2: 
      empdetails.style.display = "block";
      identity.style.display = "none";
      currentDetails--;
      question.textContent = reviews[currentDetails].question;
      break;
    case 3: 
      identity.style.display = "block";
      loanpurpose.style.display = "none";
      currentDetails--;
      question.textContent = reviews[currentDetails].question;
      nextBtn.style.display = 'inline-block';
      break;
  
    default:
      break;
  }
  if (currentDetails < 0) {
    currentDetails = reviews.length - 1;
  }
  // details = getDetails(currentDetails);

});
if (summaryBtn){
  // console.log(summaryBtn.textContent);
  
  summaryBtn.addEventListener("click", function () {
    if (summaryBtn.textContent.toLowerCase() == "summary"){
      summaryBtn.textContent = "Close Summary"

      titleDiv.style.display = "none"
      enquiryDiv.style.display = "none"
      navBtnDiv.style.display = "none"
      summary.style.display = "block"
      fnames = getDetails(0).fname + " " +getDetails(0).lname; 
    
      document.querySelector('.fullnames').textContent = fnames
      document.querySelector('.email').textContent = getDetails(0).email
      document.querySelector('.address').textContent = getDetails(0).addy
      document.querySelector('.empHist').textContent = getDetails(1).employed
      document.querySelector('.identity-display').textContent = getDetails(2).answer
      document.querySelector('.loanpurpose-display').textContent = getDetails(3).answer
    }
    else{
      summaryBtn.textContent = "Summary"
      titleDiv.style.display = "block"
      enquiryDiv.style.display = "block"
      navBtnDiv.style.display = "block"
      summary.style.display = "none"
    }
    
   
  });
}
  
