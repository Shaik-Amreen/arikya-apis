
        [
            {
"organisation_id": "069",
  "organisation": "MADANAPALLE INSTITUTE OF TECHNOLOGY AND SCIENCE",
  "mail": "karthik.kovi2001@gmail.con",
  "createdby": "Shaik Amreen Kousar",
  "shortname": "MITS",
  "date": "24-4-22",
  "type": "college",
  "mailvalidation": "@mits.ac.in",
  "maximumstudents": "500",
  "arikyastatus": "true",
},
        {
            "route":"/facultydetails/findoneAdmin",
            "request":["organisation_id","mail"],
            "response":["role","firstname, middlename, lastname"],
            "used-in":["admin-navbar"],
            "description":"to store role and display name"
        },
        {
            "route":"/facultydetails/findoneAdmin",
            "request":["organisation_id","mail"],
            "response":["role","firstname, middlename, lastname"],
            "used-in":["admin-navbar"],
            "description":"to store role and display name"

        },
        {
            "route":"/verify",
            "request":["verify"],
            "response":["returns success"],
            "used-in":["admin-navbar"],
            "description":"to verify the authorized user - verifyToken "
        },
        {
            "route":"/data/findcollegename",
            "request":["organisation_id"],
            "response":["returns organisation_name"],
            "used-in":["admin-navbar"],
            "description":"display organisation_name in the navbar "
        },
        {
            "route":"/placementstatus/notifyacceptreject",
            "request":["organisation_id"],
            "response":["returns notifications of modifications by students "],
            "used-in":["admin-navbar"],
            "description":" notifications of modifications by students to accept or reject by admin"
        },
        {
            "route":"/notification/findadminoti",
            "request":["organisation_id"],
            "response":["returns notifications of modifications of the company by admin"],
            "used-in":["admin-navbar"],
            "description":"notifications of the create and updates of the company"
        },
        {
            "route":"/placementstatus/adminplaced",
            "request":["details for placementStatus"],
            "response":["returns success"],
            "used-in":["admin-navbar"],
            "description":"Admin can accept or reject the offer letter"
        },
        {
            "route":"/Placement/findPlacement",
            "request":["organisation_id"],
            "response":["placementcyclename","todate"],
            "used-in":["admin-home"],
            "description":"selection of the placement cycle to add a company "
        },
        {
            "route":"/Studentdata/pendinginvitations",
            "request":["organisation_id"],
            "response":["rollnumber","mail","course","year","status"],
            "used":["admin-home"],
            "description":"to display registration status of students in arikya "
        },
        {
            "route":"/placementstatus/homequery",
            "request":["organisation_id","mails","content"],
            "response":["success"],
            "used":["admin-home"],
            "description":"to send mail to students based on the registration status in arikya "
        },
        {
            "route":"/Studentdata/dashboardcampusreports",
            "request":["organisation_id"],
            "response":["returns the placements status of the students , data of placementcycles and the companies under them"],
            "used":["placement-dashboard","placement-reports"],
            "description":"to display eligible, added, interested, notinterested, notadded, placed, offered students in the dashboard"
        },
        {
            "route":"/Dashboard/dashboardquizdata",
            "request":["organisation_id","type=quiz"],
            "response":["returns the quiz status of the students "],
            "used":["training-dashboard"],
            "description":"to display quiz rating status of the students according to dept wise"
        },
        {
            "route":"/Dashboard/dashboardcodedata",
            "request":["organisation_id","type=code"],
            "response":["returns the code status of the students "],
            "used":["training-dashboard"],
            "description":"to display code rating status of the students according to dept wise"
        },
        {
            "route":"/Dashboard/totaldata",
            "request":["organisation_id"],
            "response":["returns the overall status of the students in training"],
            "used":["training-dashboard"],
            "description":"to display overall rating status of the students according to dept wise"
        },
        {
            "route":"/Studentdata/findcollegestudents",
            "request":["organisation_id"],
            "response":["returns name , college , rollnumber , mail , mobile ,verified of students in the organisation"],
            "used":["Search-student"],
            "description":"to display students in the organisation based on the search "

        },
        {
            "route":"/Studentdata/findstudentdetails",
            "request":["organisation_id","mail"],
            "response":["returns all details of the student"],
            "used":["Admin-student-profile"],
            "description":"to display student based on the mail"
        },
        {
            "route":"/placementstatus/checkmailnumber",
            "request":["organisation_id","mail"],
            "response":["returns number of offers and applications of the student in the placements"],
            "used":["Admin-student-profile"],
            "description":"to display offers and applications student based on the mail in the student profile" 
        },
        {
            "route":"/Dashboard/stdprofilerating",
            "request":["organisation_id","mail"],
            "response":["returns training ratings of the student in the placements"],
            "used":["Admin-student-profile"],
            "description":"to display code , quiz and overall rating of  student based on the mail in the student profile" 
        },
        {
            "route":"/notification/findnotifications",
            "request":["organisation_id","mail"],
            "response":["returns notifications of the student based on mail"],
            "used":["Admin-student-profile"],
            "description":"to display modifications in the profile of  student based on the mail in the student profile" 
        },
        {
            "route":"/Studentdata/updatestudentdatac",
            "request":["organisation_id","update student details","mail"],
            "response":["returns success"],
            "used":["Admin-student-profile"],
            "description":"to update student details based on the mail " 
        },
        // api call in verify resubmit freeze unfreeze  method in admin student profile can be replaced by  "/Studentdata/updatestudentdatac"
        {
            "route":"/notification/updatenotifications",
            "request":["notifications updated object "],
            "response":["returns success"],
            "used":["Admin-student-profile"],
            "description":"to update notifications pf modifications based on the mail " 
        },
        //  api call of demotestudents() in demote student component can be replace by  /Studentdata/updatestudentyear
        {
            "route":"/Studentdata/updatestudentyear",
            "request":["organisation_id, course, currentyear, present"],
            "response":["returns success"],
            "used":["Demote-student","Promote-student"],
            "description":"to detain all students of particular course and year" 
        },
        {
            "route":"/Studentdata/updatedemoteyearstudent",
            "request":["organisation_id, array of rollnumbers"],
            "response":["returns success"],
            "used":["Demote-student"],
            "description":"to detain all students in excel uploaded" 
        },
        {
            "route":"/placementstatus/updateplaced",
            "request":["organisation_id, array of rollnumbers"],
            "response":["returns success"],
            "used":["Student-placed"],
            "description":"to upload all placed students in company"  
        },
        {
            "route":"/Studentdata/updatebacklogs",
            "request":["organisation_id, array of rollnumber , ongoing and total backlogs"],
            "response":["returns success"],
            "used":["Student-backlogs"],
            "description":"to upload all backlogs of students "   
        },
        {
            "route":"/Studentdata/updatemarks",
            "request":["organisation_id, array of rollnumber , sgpa and cgpa , sem "],
            "response":["returns success"],
            "used":["Student-result"],
            "description":"to upload  results of students "   
        },
        {
            "route":"/Studentdata/createStudentdata",
            "request":["array of student details"],
            "response":["returns success"],
            "used":["upload- Student"],
            "description":"to upload students "   
        },
        {
            
            "route":"/Placement/findPlacement",
            "request":["organisation_id"],
            "response":["returns array of details of placements"],
            "used":["placements-home"],
            "description":"to display placement details in placements home"   
        },
        {
            "route":"/Placement/findonePlacement",
            "request":["organisation_id","placementcyclename"],
            "response":["returns details of one placement cycle"],
            "used":["placements-details"],
            "description":"to get details of one placement cycle"   

        },
        {
            "route":"/company/findacompany",
            "request":["organisation_id","placementcyclename"],
            "response":["returns array of placementcyclename , companyname , companyprofile , status ,created  of companies "],
            "used":["placements-details"],
            "description":"to display list of  companies in the  placement cycles "   

        },
        {
            "route":"/Studentdata/studentsplacementaddedstatus",
            "request":["organisation_id","placementcyclename"],
            "response":["returns status of the students in the placement cycle"],
            "used":["placements-details"],
            "description":"to display status of students in the  placement cycles to download and send mails "   
        },
        {
            
            "route":"/Studentdata/addstudentstoplacementcycle",
            "request":["organisation_id","placementcyclename","array of students to add to placementcycle"],
            "response":["returns success"],
            "used":["placements-details"],
            "description":"to add the students to placement cycle"   

        },
        {     
            "route":"/placementstatus/homequery",
            "request":["organisation_id","array of mails","content"],
            "response":["returns success"],
            "used":["placements-details"],
            "description":"to send mails to students based on categorization"   
        },
        {
            "route":"/Placement/createPlacement",
            "request":["details of placements"],
            "response":["returns success"],
            "used":["placements-add edit"],
            "description":"to create a new placement cycle"   
        },
        {
            "route":"/Placement/updatePlacement",
            "request":["details of placements"],
            "response":["returns success"],
            "used":["placements-add edit"],
            "description":"to update a  placement cycle"    
        },
        {
            "route":"/company/findcompany",
            "request":["organisation_id","placementcyclename","companyname"],
            "response":["returns all the company details "],
            "used":["company-details"],
            "description":"to display company details"   
        },
        {
            "route":"/company/updatestatus",
            "request":["company details"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"to update company details"   
        },
        {
            "route":"/placementstatus/eligible",
            "request":["companydetails"],
            "response":["returns list of eligible , applied and placed students in the company"],
            "used":["company-details"],
            "description":"to display status of students in company"   
        },
        {
            "route":"/placementstatus/applicants",
            "request":["organisation_id","placementcyclename"],
            "response":["returns details of applicants of the company"],
            "used":["company-details"],
            "description":"to display status of students in company"   

        },
        {
            "route":"/hiringstudent/findcompanywise",
            "request":["organisation_id","placementcyclename","companyname"],
            "response":["returns status of students in hiring work flow"],
            "used":["company-details"],
            "description":"to get hiring work flow of the company"   
        },
        //  api call in saveline() companydetails can be updated by /company/updatecompany 
        {

            "route":"/placementstatus/sendmail",
            "request":["company details","mail"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"to send mail for registration process"   
        },
        {
            
            "route":"/placementstatus/addstu",
            "request":["company details","companytoaddstudents"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"to make  the students eligible of a company in the another company  "   
        }
        {
            "route":"/placementstatus/removestu",
            "request":["company details","companytoremovestudents"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"to make  the students not eligible of a company in the another company  "   
        },
        // below api is not available
        {
            "route":"/studentdata/findbyrollnumber",
            "request":["company details","rollnumber"],
            "response":["returns status of the student in the company"],
            "used":["company-details"],
            "description":"to check status of the student in the company"   
        },
        {
            "route":"/hiringstudent/posthiringstudent",
            "request":["organisation_id", "acceptedList", "rejectedlist","lastItemOfHiringWorkingflow - (True or false)"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"to post the status of students in hiring workflow"   

        },
        {
            "route":"/hiringstudent/hiringupdate",
            "request":["organisation_id", "acceptedList", "rejectedlist","lastItemOfHiringWorkingflow - (True or false)"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"to update the status of students in hiring workflow"   
        },
        // not present in backed
        {
            "route":"/placementstatus/submitcompanystatus",
            "request":["mail","company details"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"to submit the status of the company"   
        },
        {
            "route":"/placementstatus/verifyOtp",
            "request":["otp","company details"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"to submit the status of the company"   

        },
        //  removestudent() in companydetails can be replaced by /singlestudent params should be change
        {
            "route":"/placementstatus/changeEligibilityStatus",
            "request":["organisation_id","company details","student mail"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"to make single student eligible for the company"   
        }
        // /updateofferletter is changed to updateplacementstatus
        {
            "route":"/placementstatus/updatePlacementStatus",
            "request":["organisation_id","company details","student mail"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"update the placementstatus"   
        },
        {
            "route":"/placementstatus/updateregisteredmulti",
            "request":["organisation_id","company details","rollnumbers","applicationstatus","updateEligibility","mail"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"update the applicants in the company"   
        },
        {
            "route":"/placementstatus/addIntoLevel",
            "request":["array of placementStatus Model type Object"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"add students into hiring workflow-level"   
        },
        {
            "route":"/placementstatus/removeIntoLevel",
            "request":["array of placementStatus Model type Object"],
            "response":["returns success"],
            "used":["company-details"],
            "description":"remove students into hiring workflow-level"   
        
        },
        {
            "route":"/placementstatus/getHiring",
            "request":["organisation_id","placementcyclename","companyname"],
            "response":["returns names of hiring work flow levels"],
            "used":["add-company"],
            "description":"In case of editing the company for checking the hiring work flow"   
        },
        {
            "route":"/placementstatus/createcompany",
            "request":["companydetails"],
            "response":["returns success"],
            "used":["add-company"],
            "description":"for creating the company"   
        },
        {
            "route":"/placementstatus/updatecompany",
            "request":["companydetails"],
            "response":["returns success"],
            "used":["add-company"],
            "description":"for updating the company"   
        },
        {
            "route":"/notification/postadminoti",
            "request":["Object of notification Model type"],
            "response":["returns success"],
            "used":["add-company"],
            "description":"Post that admin has created a company"   
        },
        {
            "route":"/Practice/gettopics",
            "request":["mail in case of technical trainer","organisation_id","type"],
            "response":["returns topics"],
            "used":["quiz-topics"],
            "description":"In case of technical trainer admin login"   
        },
        {
            "route":"/Practice/getquestions",
            "request":["organisation_id","type","topic"],
            "response":["returns questions of quiz"],
            "used":["quiz-topic-details"],
            "description":"get questions based on the type and topic"   
        },
        {
            "route":"/Practice/editcodequiz",
            "request":["quiz _details or code_details"],
            "response":["returns success"],
            "used":["add edit code or quiz"],
            "description":"edit quiz or code details "   

        },
        {
            "route":"/Practice/uploadpractice",
            "request":["quiz_details or code_details"],
            "response":["returns success"],
            "used":["add edit code or quiz"],
            "description":"edit quiz or code details "   
        },
        {
            "route":"/Dashboard/eachtestratings",
            "request":["organisation_id","type","topic"],
            "response":["returns eachtest rating"],
            "used":["quiz-report","code_report"],
            "description":"reports of each test"   
        },
        {
            "route":"/Dashboard/alltestratings",
            "request":["organisation_id","type"],
            "response":["returns all tests rating"],
            "used":["quiz-report","code_report"],
            "description":"reports of all test"   
        },
        {
            "route":"/Dashboard/allcodequiztestratings",
            "request":["organisation_id"],
            "response":["returns all types tests rating"],
            "used":["overall - reports"],
            "description":"reports of all test"    
        },
        {
            "route":"/placementstatus/singlemultipleoffers",
            "request":["organisation_id","placementcyclename"],
            "response":["returns list and status of  offers of students"],
            "used":["offerstatus"],
            "description":"to get single and multiple offers of students"    
        },
        {  
            "route":"/facultydetails/finddata",
            "request":["organisation_id"],
            "response":["returns firstname, middlename, lastname, designation,role,mail of  faculty  of the organisation"],
            "used":["users-data"],
            "description":"to display faculty details of the organisation"    
        },
        {
            "route":"/updateuser",
            "request":["user details"],
            "response":["returns success"],
            "used":["users-data"],
            "description":"to edit faculty details of the organisation"    
        },
        { 
            "route":"/data/postcollegeaccess",
            "request":["post user details"],
            "response":["returns success"],
            "used":["add - users"],
            "description":"to post faculty details of the organisation"    
        },
        {
            "route":"/company/findcalcompany",
            "request":["organisation_id","mail in case of technical trainer"],
            "response":["returns events in calendar "],
            "used":["calendar"],
            "description":"for events of the calendar"    
        },
        {
            "route":"/changepassword",
            "request":["organisation_id","mail","password"],
            "response":["returns role and success"],
            "used":["changepassword","forgotpassword"],
            "description":"update the password"    
        },
        { 
            "route":"/feedback",
            "request":["name","mail","feedback"],
            "response":["returns success"],
            "used":["contact"],
            "description":"for the feedback"    
        },
        {
            "route":"/findoneusers",
            "request":["mail","password"],
            "response":["returns success"],
            "used":["login"],
            "description":"for the signIn"    
        },
        {
            "route":"/findValidMail",
            "request":["mail"],
            "response":["returns success"],
            "used":["login"],
            "description":"for the forgotpassword whether the mail is valid or not"    

        },
        {
            "route":"/forgotpassword",
            "request":["organisation_id","mail"],
            "response":["returns otp"],
            "used":["login"],
            "description":"for the opt checking"    
        },
        {
            "route":"/placementstatus/checktoken",
            "request":["organisation_id","token","placementcyclename","companyname"],
            "response":["returns companyname and placementcyclename"],
            "used":["registration"],
            "description":"for getting the company and placemeny cycle name while clicking the link in the mail for registrations process of the company"    
        },
        // api call in the registration /findcompanytoregister  can be replaced by  /findacompany
        {
            "route":"/placementstatus/checkregistered",
            "request":["organisation_id","mail","placementcyclename","companyname"],
            "response":["returns status of the student in company"],
            "used":["registration-home"],
            "description":"condition to display the registration button of company"    
        },
        {
            "route":"/placementstatus/updateregisteredcompany",
            "request":["organisation_id","mail","placementcyclename","companyname"],
            "response":["returns success"],
            "used":["registration-home"],
            "description":"register into the company"    
        
        },
        {
            "route":"/createusers",
            "request":["sign-up of the user"],
            "response":["returns success"],
            "used":["signup"],
            "description":"register of user in arikya"    

        },
        {
            "route":"/data/findcollegeaccess",
            "request":["passcode"],
            "response":["returns success"],
            "used":["passcode"],
            "description":"check whether the entered passcode is matched"    

        }


]
           