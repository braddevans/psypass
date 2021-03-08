$(document).ready(function() {
    $("#generaterandpass").click(function(event) {
        console.log("Owo: " + Math.random().toString(36).substring(2, 36) + Math.random().toString(36).substring(2, 36));
    });
});
