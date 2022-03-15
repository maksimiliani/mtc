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

    // contact page form
    $('#contact_form').submit(function (e) {
        //e.preventDefault();
        var mtc_data_form = new Object();
        mtc_data_form.url = window.location.href;
        mtc_data_form.email = $("#ContactFormEmail").val();
        mtc_data_form.firstName = $("#ContactFormFirstName").val();
        mtc_data_form.lastName = $("#ContactFormLastName").val();
        mtc_data_form.mobile = $("#ContactFormPhone").val();
        mtc_data_form.comments = $("#ContactFormMessage").val();
        mtc_data_form.campaignId = "6000";
        mtc_data_form.vendorId = "6000";
        mtc_form_submit(JSON.stringify(mtc_data_form), null);
    });

    // warranty
    $('form.shogun-form-box').submit(function (e) {
        //e.preventDefault();
        var mtc_data_form = new Object();
        mtc_data_form.url = window.location.href;
        mtc_data_form.email = $("input[placeholder='Email']").val();
        mtc_data_form.firstName = $("input[placeholder='First name']").val();
        mtc_data_form.firstName = $("input[placeholder='Last name']").val();
        mtc_data_form.mobile = $("input[placeholder='Mobile Phone']").val();
        mtc_data_form.address1 = $("input[placeholder='Address']").val();
        mtc_data_form.address2 = $("input[placeholder='Address 2']").val();
        mtc_data_form.state = $("input[placeholder='State']").val();
        mtc_data_form.zip = $("input[placeholder='City']").val();
        mtc_data_form.city = $("input[placeholder='Zip Code']").val();
        mtc_data_form.comments = $('#s-058c5840-c28b-4e1b-a3f3-17f7843bc653').find(":selected").text();
        mtc_data_form.campaignId = "6000";
        mtc_data_form.vendorId = "6000";
        mtc_form_submit(JSON.stringify(mtc_data_form), null);
    });


    //$('#contact_form .btn-success').click(function (e) {
    //    e.preventDefault();
    //    var mtc_data_form = new Object();
    //    mtc_data_form.url = window.location.href;
    //    mtc_data_form.email = document.getElementById("Email").value;
    //    mtc_data_form.campaignId = "68969";
    //    mtc_data_form.vendorId = "6000";
    //    mtc_form_submit(JSON.stringify(mtc_data_form), '#contact_form');
    //});

    ///Refer A Friend
    $("#conjured_save_advocate").click(function (e) {
        // e.preventDefault();
        var mtc_data_form = new Object();
        mtc_data_form.url = window.location.href;
        mtc_data_form.name = $("#conjured_referral_name").val();
        mtc_data_form.email = $("#conjured_referral_email").val();
        mtc_data_form.campaignId = "6000";
        mtc_data_form.vendorId = "6000";
        mtc_form_submit(JSON.stringify(mtc_data_form), null);
    });

    /// spring offer popup
    $("form.proof-factor-cb-prompt-form").submit(function (e) {
        var mtc_data_form = new Object();
        mtc_data_form.url = window.location.href;
        
        mtc_data_form.email = $('input#proof-factor-email-input-bcb').val();
        mtc_data_form.firstName = $("input.proof-factor-cb-prompt-input-firstname").val();
        mtc_data_form.lastName = $("input.proof-factor-cb-prompt-input-lastname").val();

        mtc_data_form.campaignId = "6000";
        mtc_data_form.vendorId = "6000";
        mtc_form_submit(JSON.stringify(mtc_data_form), null);
    });

    //$("#conjured_send_email_button").click(function (e) {
    //    e.preventDefault();
    //    var mtc_data_form = new Object();
    //    mtc_data_form.url = window.location.href;
    //    mtc_data_form.email = document.getElementById("conjured_emails").value;
    //        mtc_data_form.campaignId = "6000";
    //    mtc_data_form.vendorId = "6000";
    //    mtc_form_submit(JSON.stringify(mtc_data_form), "#conjured_send_email_button");
    //});

    //$('.shogun-form-box-submit').click(function (e) {
    //    var mtc_data_form = new Object();
    //    mtc_data_form.url = window.location.href;
    //    mtc_data_form.email = $('.shogun-form-box input[placeholder="Email"]').val();
    //    mtc_data_form.name = $('.shogun-form-box input[placeholder="Name"]').val();
    //    mtc_data_form.campaignId = "6000";
    //    mtc_data_form.vendorId = "6000";
    //    mtc_form_submit(JSON.stringify(mtc_data_form), null)
    //});

    /// footer
    $('#footer_email_form .btn-success').click(function (e) {       //   $('#contact_form .btn-success') -  jQuery request to select submit button.
        e.preventDefault();
        var mtc_data_form = new Object();
        mtc_data_form.url = window.location.href;
        mtc_data_form.email = $("input#Email.newsletter").val();                         // Obtain email value from element with ID "Email"
        mtc_data_form.campaignId = "6000";                              // hardcoded value campaignId = "68969";
        mtc_data_form.vendorId = "6000";                                 // mtc_data_form.vendorId = "6000";
        mtc_form_submit(JSON.stringify(mtc_data_form), '#footer_email_form'); //  JSON.stringify(mtc_data_form) convert object "mtc_data_form" to string; call mtc_form_submit to submit data.
    });

});