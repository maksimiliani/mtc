$(document).ready( function() {
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
    var jsonString;

    jsonString = JSON.stringify(form_submission);
    console.log(jsonString);

    $.ajax({
        type: "POST",
        url: 'https://service.topbutton.com/landing/register',
        data: jsonString,
        headers: {
            "Content-type": "application/json",
        }

    });
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
