$(document).ready( function() {
  function json_submission(jsonString_var) {
    $.ajax({
        type: "POST",
        url: 'https://service.massagetherapyconcepts.com:8443/landing/register',
        crossDomain: true,
        data: jsonString_var,
        dataType : 'json',
        contentType: "text/plain"
    });
  }

  $('#contact_form .btn-success').click(function() {
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("Email").value;
    form_submission.name="";
    form_submission.mobile="";
    form_submission.city="";
    form_submission.state="";
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    $.getJSON("https://api.ipify.org/?format=json", function(e) { form_submission.vendorId = e.ip; });
    json_submission(JSON.stringify(form_submission));
  });
  $( "#conjured_save_advocate" ).click(function() {
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("conjured_referral_name").value;
    form_submission.name = document.getElementById("conjured_referral_email").value;
    form_submission.mobile="";
    form_submission.city="";
    form_submission.state="";
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    $.getJSON("https://api.ipify.org/?format=json", function(e) { form_submission.vendorId = e.ip; });
    json_submission(JSON.stringify(form_submission));
  });
  $( "#conjured_send_email_button" ).click(function() {
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("conjured_emails").value;
    form_submission.name="";
    form_submission.mobile="";
    form_submission.city="";
    form_submission.state="";
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    $.getJSON("https://api.ipify.org/?format=json", function(e) { form_submission.vendorId = e.ip; });
    json_submission(JSON.stringify(form_submission));
  });
});
