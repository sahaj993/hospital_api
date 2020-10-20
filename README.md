# Hospital Api

NodeJS and MongoDB based APIs for the server side of a Hospital which maintains the records of COVID-19 patients and generates the reports according to the status and quarantine 
using Passport-JWT-Strategy.</br></br>
This has two types of users
* Doctors 
* Patients

# Folder Structure
        |-- config        
        |-- |-- mongoose.js 
        |-- |-- passport-jwt-strategy.js 
        |-- controller
        |-- |-- doctor_controller.js 
        |-- |-- home_controller.js 
        |-- |-- patient_controller.js 
        |-- |-- reports_controller.js 
        |-- models
        |-- |-- doctor.js  
        |-- |-- patient.js 
        |-- |-- report.js   
        |-- node_modules
        |-- routes
        |-- |-- doctor.js 
        |-- |-- index.js 
        |-- |-- patient.js 
        |-- |-- reports.js 
        |-- .gitignore 
        |-- index.js 
        |-- package-lock.json 
        |-- package.json

# Setup the project on Local System
* Clone the repository <br>
`git clone https://github.com/sahaj993/hospital_api.git`<br>
* Install the dependances<br>
`npm install`<br>
* Start the server<br>
`npm start`
* Follow the following routes
                
# Routes
`localhost:8000`<br> Start the server<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96627048-f03e4180-132d-11eb-87e3-e63147ccdf2d.jpg" height="400"></img><br>

`localhost:8000/doctors/register`<br> Register a new Doctor<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96628567-05b46b00-1330-11eb-9de8-9e4680db501f.jpg" height="400"></img><br>

`localhost:8000/doctors/login`<br> Login in a doctor and generates a json web token<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96628957-8bd0b180-1330-11eb-92ea-4244ef25f9aa.jpg" height="400"></img><br>

`localhost:8000/patient/register`<br> Register a new patient using the a json web token as bearer token<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96629144-d5b99780-1330-11eb-8eaf-be0da1bebe18.jpg" height="400"></img><br>

`localhost:8000/patient/:id/create_report`<br> Creates a covid report for the patient taking status in the request body<br><br>
<img src="https://user-images.githubusercontent.com/51825888/96629273-0699cc80-1331-11eb-821c-b3768856b457.jpg" height="400"></img><br>

`localhost:8000/patient/:id/all_reports`<br> Returns all the reports of a particular patient <br><br>
<img src="https://user-images.githubusercontent.com/51825888/96629452-3fd23c80-1331-11eb-89f4-6f6b40cb3f03.jpg" height="400"></img><br>

`localhost:8000/reports/:status`<br> Filters all the reports generated according to the status  <br><br>
<img src="https://user-images.githubusercontent.com/51825888/96629662-8d4ea980-1331-11eb-91eb-95ae5bc82a24.jpg" height="400"></img><br>
