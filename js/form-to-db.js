$(document).ready( function() {
  var form_submission = new Object();
  form_submission.url="";
  form_submission.email="";
  form_submission.name="";
  form_submission.mobile="";
  form_submission.city="";
  form_submission.state="";
  form_submission.campaignId="68969";
  form_submission.vendorId="6000";
  var jsonString;

  $('#contact_form').on("submit",function(){
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("Email").value;
    jsonString = JSON.stringify(form_submission);
    console.log(form_submission);
  });
});
