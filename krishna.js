/*1. Write a JavaScript program to validate	cell phone number.*/
function check(phoneno){
    var patt = /^(98)[0-9]$/; // number must begin with 98 and ends with number between 0 and 9
    if (phoneno.match(patt)) {
        if(phoneno.length == 10){ //length of the number must be 10
            document.write("Valid phone number: " + phoneno)
        }
        else{
            document.write("Invalid phone number")
        }
    }
    else{
        document.write("Valid phone number")
    }
}

/*2. Write a JavaScript function to check whether a given value represents a domain or not.*/
function is_domain(str)
{
    //RE for checking  of domain that begins with www and ends with .com , .net or .org
    regularexp = /^(w{3}[\.])?([a-z0-9\-])+\.((com)|(org)|(net))$/i;

    if (regularexp.test(str)) //check for input
    {
        alert("Correct domain name");
    }
    else
    {
        alert("Incorrect domain name");
    }
}
/*3. Write a JavaScript function to check a given value contains alpha, dash and underscore.*/
function is_alphaDashUnderscore(str)
{
    
    regexp = /[a-zA-Z_\-]/;

    if (regexp.test(str))
    {
        alert("Correct Pattern");
    }
    else
    {
        alert("Incorrect Pattern");
    }
}
/*4. Write a JavaScript program to check if a given string is a date.*/
function check_Date(str){

   
    //input pattern must be mm/dd/yyyy
    var patt = /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/;
    var t = str.match(patt);

    if(t){
        alert("Correct Date String");
    }
    else{
        alert("Incorrect Date String");
    }
}

/*5. Write a JavaScript function to check whether a given value is time string or not.*/
function is_timeString(str)
{
    //RE for time pattern match
    regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

    if (regexp.test(str))
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*6. Write a JavaScript function to check whether a given value is hexcolor value or not.*/
function check_hex(inp){

    var hexPatt  = /^#[0-9A-F]{6}$/i; 
    if(hexPatt.test(inp)){
        alert("Correct HEXCOLOR code");
    }
    else{
        alert("Incorrect HEXCOLOR code");
    }
}