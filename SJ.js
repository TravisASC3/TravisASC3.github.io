var makerURL;
makerURL = "https://maker.ifttt.com/trigger/Send_email/with/key/lhL1u4SG1bYewD0e87mZEjPQMOBfYn_jQcKIUmmJUs9";
function send_comment(){
    var message = $("#comment_").val();
    var Name = $("#name_").val();
    var email=$("#email_").val();


    var sendoff = {
        "value1": message,
        "value2": Name,
        "value3": email
    } 

    //Sending info to IFTTT.com
    $.post(makerURL, sendoff);

    //Clear input data
    //$("#message").val("");
}

