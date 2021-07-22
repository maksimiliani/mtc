$(document).ready( function() {

  function json_submission(jsonString_var) {
    $.ajax({
        type: "POST",
        url: 'https://service.topbutton.com/landing/register',
        crossDomain: true,
        data: jsonString_var,
        headers: {
            "Content-type": "text/plain",
        }
    });
  }

  $('#contact_form').on("submit",function(){
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("Email").value;
    form_submission.name="";
    form_submission.mobile="";
    form_submission.city="";
    form_submission.state="";
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    json_submission(JSON.stringify(form_submission));
  });
  $('#conjured_save_advocate').on("submit",function(){
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("conjured_referral_name").value;
    form_submission.name = document.getElementById("conjured_referral_email").value;
    form_submission.mobile="";
    form_submission.city="";
    form_submission.state="";
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    json_submission(JSON.stringify(form_submission));
  });
  $('#conjured_send_email_button').on("submit",function(){
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("conjured_emails").value;
    form_submission.name="";
    form_submission.mobile="";
    form_submission.city="";
    form_submission.state="";
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    json_submission(JSON.stringify(form_submission));
  });
});

// $('#contact_form').on("submit", function () {
//     var form_submission = new Object();
//     form_submission.url = window.location.href;
//     form_submission.email = document.getElementById("Email").value;
//     form_submission.name="";
//     form_submission.mobile="";
//     form_submission.city="";
//     form_submission.state="";
//     form_submission.campaignId = "68969";
//     form_submission.vendorId = "6000";
//     var jsonString;
//
//     jsonString = JSON.stringify(form_submission);
//     console.log(jsonString);
//
//     $.ajax({
//         type: "POST",
//         url: 'http://service.topbutton.com/landing/register',
//         data: jsonString,
//         headers: {
//             "Content-type": "application/json",
//         }
//
//     });
// });
