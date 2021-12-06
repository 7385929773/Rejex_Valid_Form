function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}
function formValidate() {
    var returnval = true;
    clearErrors();
    var name = document.forms['RegForm']["Name"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var address = document.forms['RegForm']["Address"].value;
    if (address.length < 5) {
        seterror("address", "*Length of name is too short");
        returnval = false;
    }

     if (!(address.includes('@')||address.includes('_')||address.includes('.'))) {
        seterror("address", "*Address should contain @ . _ symbol");
        returnval = false;
    }

    var email = document.forms['RegForm']["EMail"].value;
    if (email.length > 20) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['RegForm']["phone"].value;
   // if (phone.length != 10 && phone != "[7-9][0-9]{9}") {
       if (phone.length != 10 && phone != "[^7-9][0-9]{9}") {

        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['RegForm']["Password"].value;
    if (password.length < 8 ) {
        seterror("password", "*Password should be atleast 6 characters long! Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        returnval = false;
    }
    var cpassword = document.forms['RegForm']["cPassword"].value;
    if (cpassword != password) {
        seterror("cpassword", "*Password and Confirm password should match!");
        returnval = false;
    }
    return returnval;
}
