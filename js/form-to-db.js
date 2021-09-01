$(document).ready( function() {
  function json_submission(jsonString_var, formName) {
    $.ajax({
        type: "POST",
        url: 'https://service.massagetherapyconcepts.com:8443/landing/register',
        crossDomain: true,
        data: jsonString_var,
        dataType : 'json',
        contentType: "text/plain",
        complete: function (result) {
            if(formname != '')
                $(formName).submit();
        }
    });
  }

    $('#contact_form .btn-success').click(function (e) {
    e.preventDefault();
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("Email").value;
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    json_submission(JSON.stringify(form_submission), '#contact_form');
  });

    $("#conjured_save_advocate").click(function (e) {
     e.preventDefault();
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("conjured_referral_name").value;
    form_submission.name = document.getElementById("conjured_referral_email").value;
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    json_submission(JSON.stringify(form_submission), '#conjured_save_advocate');
  });

    $("#conjured_send_email_button").click(function (e) {
    e.preventDefault();
    var form_submission = new Object();
    form_submission.url = window.location.href;
    form_submission.email = document.getElementById("conjured_emails").value;
    form_submission.campaignId = "68969";
    form_submission.vendorId = "6000";
    json_submission(JSON.stringify(form_submission), "#conjured_send_email_button");
    });

    $('.shogun-form-box-submit').click(function (e) {
        var form_submission = new Object();
        form_submission.url = window.location.href;
        form_submission.email = $('.shogun-form-box input[placeholder="Email"]').val();
        form_submission.name = $('.shogun-form-box input[placeholder="Name"]').val();
        form_submission.campaignId = "68969";
        form_submission.vendorId = "6000";
        json_submission(JSON.stringify(form_submission), '');
    });

});