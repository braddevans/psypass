class passClass {
    temppassword = {password: "", options: [], generatedAt: 0, url: ""};


    getRandPass = function (maxlength, special, alphanumeric) {
        let pass = "";
        pass = Math.random().toString(36).substring(2, 36) + Math.random().toString(36).substring(2, 36);

        maxlength != null ? pass.substr(0, maxlength) : pass;

        return pass;
    }
}


/*
 * Document Listeners
 */
$(document).ready(function () {
    $("#generaterandpass").click(function (event) {
        console.log("Owo: " + new passClass().getRandPass());
    });
});
