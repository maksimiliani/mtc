$(document).ready( function() {
  function json_submission(jsonString_var) {
    $.ajax({
        type: "POST",
        url: 'https://service.massagetherapyconcepts.com:8443/landing/register',
        //crossDomain: true,
        data: jsonString_var,
        dataType : 'json',
        contentType: "application/json;charset=utf-8"
    });
  }

  function json_submission2(jsonString_var) {
    $.support.cors = true;
    $.ajax({
          type: "POST",
          url: 'https://service.massagetherapyconcepts.com:8443/landing/register',
          //crossDomain: true,
          data: jsonString_var,
          dataType : 'json',
          accept: "application/json",
          contentType: "application/json;charset=utf-8",
  		success: function (data, text) {
          var result = 'ok';
          // Console.log(status);
  		},
  		error: function (xhr, status, error) {
        var result = 'error';
          console.log(error);
          console.log(error);         
  		}
      });

      console.log('error'); 
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://service.massagetherapyconcepts.com:8443/landing/register');
      xhr.setRequestHeader('Content-type','application/json');
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        }
      };
      xhr.onerror = function() {
        console.log('There was an error!');
      };
      xhr.send(jsonString_var);
  }



  $('#contact_form .btn-success').click(function() {
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    $.getJSON("https://api.ipify.org/?format=json", function(e) { form_submission.ip = e.ip; });
    json_submission2(JSON.stringify(form_submission));
  });
  $( "#conjured_save_advocate" ).click(function() {
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("conjured_referral_name").value;
    form_submission.name = document.getElementById("conjured_referral_email").value;
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    $.getJSON("https://api.ipify.org/?format=json", function(e) { form_submission.ip = e.ip; });
    json_submission2(JSON.stringify(form_submission));
  });
  $( "#conjured_send_email_button" ).click(function() {
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("conjured_emails").value;
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    $.getJSON("https://api.ipify.org/?format=json", function(e) { form_submission.ip = e.ip; });
    json_submission2(JSON.stringify(form_submission));
  });
});
