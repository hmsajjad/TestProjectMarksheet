/**
 * Created by sajjad on 1/06/2015.
 */
var testarray = [];
function greet() {
    var studentid = document.getElementById('studentid')["value"];
    var studentname = document.getElementById('studentname')["value"];
    var studentclass = document.getElementById('studentclass')["value"];
    /*testarray.push("studentid:" + " " + studentid + " " + "studentname:" + " " + studentname + " " + "studentclass:" + " " + studentclass);*/
    testarray.push("studentid=" + studentid + "studentname=" + studentname + "studentclass=" + studentclass);
    var text = "";
    for (var i = 0; i < testarray.length; i++) {
        text += testarray[0] + "<br>";
    }
    document.getElementById('demo').innerHTML = text;
    alert(testarray);
}
//# sourceMappingURL=marksheet.js.map