function openTab(tabName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablink.length; i++) {
        tabcontent[i].style.display = "none";    
    }
    document.getElementById(tabName).style.display = "block";
}
    
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();