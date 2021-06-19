function light(show){
    var p;
    if(show==0){
        p = "Images/off.gif";
    }
    else
    p = "Images/on.gif";
    document.getElementById("myImage").src = p;
}