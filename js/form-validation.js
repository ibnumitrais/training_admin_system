function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var fdate = document.forms["myForm"]["fdate"].value;
    if (fname == "") {
        alert("Name must be filled out");
        return false;
    }

    if(!moment(fdate, "MM-DD-YYYY").isValid())
        alert('Date must be MM-DD-YYYY format');
}