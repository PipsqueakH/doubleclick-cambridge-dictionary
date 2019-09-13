
var searchCambridge = function () {

    var icon = document.createElement("div");
    icon.classList.add("cambridge-dict-icon");
    document.body.appendChild(icon);
    icon.style.display = "none"
    var dictFrame = document.createElement("div");
    document.body.appendChild(dictFrame);
    var dictPage = document.createElement("iframe");
    dictFrame.appendChild(dictPage);
    dictPage.style.width = "450px"
    dictPage.style.height = "400px"
    // dictPage.style.display = "none";
    dictFrame.style.display = "none";

    var word = "";

    document.onmouseup = function (e) {
        dictPage.src = "";
        // dictPage.style.display = "none";
        dictFrame.style.display = "none";

        var e = window.event;
        var txt = window.getSelection().toString();
        var sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var left = (e.clientX - 20 < 0) ? e.clientX + 0 : e.clientX - 20;
        var top = (e.clientY - 35 < 0) ? e.clientY + sh + 15 : e.clientY + sh - 35;

        if (txt) {

            txt = txt.replace(/[\.\*\?;!()\+,\[:\]<>^_`\[\]{}~\\\/\"\'=]/g, " ");
            txt = txt.replace(/\s+/g, " ").trim();
            if (txt == null || txt.replace("/\s/g", "").length == 0 || txt.split(/[ -]/).length > 5) {
                //disable the double-click feature if the txt string
                //exceeds the maximum number of allowable words
                // if (txt.split(/[ -]/).length > 5)
                    return;
            }
            
            // icon.classList.add("cambridge-dict-icon");
            icon.style.left = left + "px";
            icon.style.top = top + "px";
            icon.style.display = "inline";
            dictFrame.style.display = "none";

        } else {
            icon.style.display = "none";
            return;
        }
        word = txt;

    };

    icon.onclick = function (event) {

        if (word) {

            var e = window.event;
            var sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var left = (e.clientX - 450 < 0) ? e.clientX + 0 : e.clientX - 450;
            var top = (e.clientY - 450 < 0) ? e.clientY + sh + 45 : e.clientY + sh - 450;

            dictFrame.classList.add("cambridge-dict");
            dictFrame.style.left = left + "px";
            dictFrame.style.top = top + "px";
            dictPage.src = "https://dictionary.cambridge.org/search/direct/?datasetsearch=english&q=" + word;
            // dictPage.style.display = "inline";
            dictFrame.style.display = "inline"; 
        }
    };

};

searchCambridge();