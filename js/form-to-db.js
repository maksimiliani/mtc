$(document).ready(function () {
    function mtc_form_submit(jsonString_var, formName) {
    $.ajax({
        type: "POST",
        url: 'https://service.massagetherapyconcepts.com:8443/landing/register',
        crossDomain: true,
        data: jsonString_var,
        dataType : 'json',
        contentType: "text/plain",
        complete: function (result) {
            if(Boolean(formName))
                $(formName).submit();
        }
    });
  }
    // warranty & contact
    $('.realForm button.submitButton').click(function (e) {
    e.preventDefault();
    var mtc_data_form = new Object();
        mtc_data_form.url = window.location.href;
        mtc_data_form.email = $("input[data-form-type='email']").val();
        mtc_data_form.firstName = $("input[title='First Name']").val();
        mtc_data_form.lastName = $("input[title='Last Name']").val();
        mtc_data_form.phonenumber = $("input[title='Phone']").val();
        mtc_data_form.mobile = $("input[title='Mobile Phone']").val();
        mtc_data_form.campaignId = "68969";
        mtc_data_form.vendorId = "6000";
        mtc_form_submit(JSON.stringify(mtc_data_form), '.realForm');
    });


    $('#contact_form .btn-success').click(function (e) {
        e.preventDefault();
        var mtc_data_form = new Object();
        mtc_data_form.url = window.location.href;
        mtc_data_form.email = document.getElementById("Email").value;
        mtc_data_form.campaignId = "68969";
        mtc_data_form.vendorId = "6000";
        mtc_form_submit(JSON.stringify(mtc_data_form), '#contact_form');
    });



    $("#conjured_save_advocate").click(function (e) {
     e.preventDefault();
    var mtc_data_form = new Object();
    mtc_data_form.url = window.location.href;
    mtc_data_form.email = document.getElementById("conjured_referral_name").value;
    mtc_data_form.name = document.getElementById("conjured_referral_email").value;
    mtc_data_form.campaignId = "68969";
    mtc_data_form.vendorId = "6000";
    mtc_form_submit(JSON.stringify(mtc_data_form), '#conjured_save_advocate');
  });

    $("#conjured_send_email_button").click(function (e) {
    e.preventDefault();
    var mtc_data_form = new Object();
    mtc_data_form.url = window.location.href;
    mtc_data_form.email = document.getElementById("conjured_emails").value;
    mtc_data_form.campaignId = "68969";
    mtc_data_form.vendorId = "6000";
    mtc_form_submit(JSON.stringify(mtc_data_form), "#conjured_send_email_button");
    });

    $('.shogun-form-box-submit').click(function (e) {
        var mtc_data_form = new Object();
        mtc_data_form.url = window.location.href;
        mtc_data_form.email = $('.shogun-form-box input[placeholder="Email"]').val();
        mtc_data_form.name = $('.shogun-form-box input[placeholder="Name"]').val();
        mtc_data_form.campaignId = "68969";
        mtc_data_form.vendorId = "6000";
        mtc_form_submit(JSON.stringify(mtc_data_form), '');
    });

});