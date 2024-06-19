//Remove the mark and notification number box...
document.getElementById("markAll").addEventListener("click", function() {
    document.getElementById("newNotificationNumber").style.display = "none";

    let mark = document.getElementsByClassName("mark");
    let box = document.getElementsByClassName("newNotification");

    for(let i = 0; i < box.length; i++) {
        mark[i].style.display = "none";
        box[i].style.backgroundColor = "var(--defaultColor)";
    }
});