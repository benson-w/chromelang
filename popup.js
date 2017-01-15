$(function(){
    $('#paste').click(function(){pasteSelection();});
    $('#translate').click(function(){translateSelection();});
});

//for posting something on button click
function pasteSelection() {
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT},
    function(tab) {
        chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"},
        function(response){
            var text = document.getElementById('text');
            text.innerHTML = response.data;
        });
    });
};

//to translate something on button click
function translateSelection() {
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT},
    function(tab) {
        //var source = document.getElementById('text').innerHTML
        //console.log(document.getElementById('text').innerHTML)

        //source.innerHTML =
        //translatedtext = ""

        var text = document.getElementById('translated');
        text.innerHTML = "hi";

    });
};

/*
function translateSelection() {
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT},
    function(tab) {
        function(response){
            var text = document.getElementById('translated');
            text.innerHTML = "testing text";
            //text.innerHTML = response.data;
            window.alert("sometext");
        };
    });
}

function translateSelection() {
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT},
    function(tab) {
        function(response){
            var text = document.getElementById('translated');
            text.innerHTML = "testing text";
            //text.innerHTML = response.data;
        }
    })
}



function getSelectionHtml() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}

$(function(){
    $('#translate').click(function(){translateSelection();});
});

function translateSelection() {
    function(tab) {
        chrome.tabs.sendMessage(tab[0].id, {method}

        )}
}

var xmlhttp = new XMLHttpRequest();
var url = "http://www.w3schools.com/website/customers_mysql.php";

xmlhttp.onreadystatechange = function() {
    //if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    //}
}

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<table>";

    console.log(arr);

    for(i = 0; i < arr.length; i++) {
        out += "<tr><td>" +
        arr[i].Name +
        "</td><td>" +
        arr[i].City +
        "</td><td>" +
        arr[i].Country +
        "</td></tr>";
    }
    out += "</table>";

    document.getElementById("text").innerHTML = out;
}

*/
