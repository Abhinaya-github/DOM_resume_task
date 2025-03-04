var header=document.createElement("header")
header.innerHTML="<b>Abhinaya  Bogaram</b>";
document.body.append(header)
header.style.textAlign="center"


header.style.fontSize="32px";
header.style.padding="20px"

var contactInfo = document.createElement("div");
header.append(contactInfo);
contactInfo.style.display = "flex";
contactInfo.style.justifyContent="center"
contactInfo.style.gap = "10px";  // Add space between email & phone
contactInfo.style.marginTop = "10px";  // Add spacing from name

// Create email
var gmail = document.createElement("p");
gmail.innerHTML = "Email: bogaramabhinaya@gmail.com";
gmail.style.fontSize = "16px";
contactInfo.append(gmail);  // Append to contact div

// Create phone number
var phn = document.createElement("p");
phn.innerHTML = "| Ph: 8106267569";
phn.style.fontSize = "16px";
contactInfo.append(phn);  // Append to cont




var line=document.createElement("hr")
document.body.append(line)

var div=document.createElement("div")
document.body.append(div)


var line=document.createElement("hr")
document.body.append(line)

var education=document.createElement("h3")
div.append(education)
education.innerHTML="EDUCATION"

var gnits=document.createElement("h4")
gnits.innerHTML="IT|G.Narayanama institute of Technology and Sciences"
var gints_child=document.createElement("p")
gints_child.innerHTML="CGPA:7.03|2024"
div.append(education,gnits,gints_child)


var diploma=document.createElement("h4")
diploma.innerHTML="IT|GPT"
var diploma_child=document.createElement("p")
diploma_child.innerHTML="CGPA:7.03|2024"
div.append( diploma,diploma_child)



//skills

var div2=document.createElement("div")
document.body.append(div2)
var skills=document.createElement("h3")
skills.innerHTML="SKILLS"
div2.append(skills)

var skillslist=document.createElement("ul")

//skill 1
var skill_1=document.createElement("li")
skill_1.innerHTML="HTML";

//skill 2
var skill_2=document.createElement("li")
skill_2.innerHTML="CSS";

//skill 3
var skill_3=document.createElement("li")
skill_3.innerHTML="JAVASCRIPT";

skillslist.append(skill_1,skill_2,skill_3)
div2.append(skillslist)

//projects


var line=document.createElement("hr")
document.body.append(line)
var projects=document.createElement("h4")
projects.innerHTML="PROJECTS"
var div3=document.createElement("div")
document.body.append(div3)

var project1=document.createElement("h4")
project1.innerHTML="Smart Spend : AN Expense Tracker Web App";

var project1_about=document.createElement("p")
project1_about.innerHTML="It is a user-friendly application for tracking, categorizing, and managing expenses with features  Like budget setting and notification alerts. Enhanced financial control and decision making  through an intuitive, secure, and responsive interface across devices ";

var project2=document.createElement("h4")
project2.innerHTML="Smart Mind Mental Health Support System";

var project2_about=document.createElement("p")
project2_about.innerHTML="It is a system that enables personalized support through , inspirational content, and interactive features. Aimed to  reduce stress, anxiety, and  depression while promoting  overall well-being and accessibility to mental health resources"

div3.append(projects,project1,project1_about,project2,project2_about)


//strengths
var line=document.createElement("hr")
document.body.append(line)

var div4=document.createElement("div")
document.body.append(div4)

var strengths=document.createElement("h4")
strengths.innerHTML="STRENGTHS";

var strengths_list=document.createElement("ul")

var strength_1=document.createElement("li")
strength_1.innerHTML="Adaptability"

var strength_2=document.createElement("li")
strength_2.innerHTML="Collaboration"

var strength_3=document.createElement("li")
strength_3.innerHTML="Time management"

strengths_list.append(strength_1,strength_2,strength_3)
div4.append(strengths,strengths_list)

div.style.paddingLeft="40px"
div2.style.paddingLeft="40px"
div3.style.paddingLeft="40px"
div4.style.paddingLeft="40px"

