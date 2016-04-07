/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    // Load the navbar dynamically via jQuery and Ajax
    var header = $('#mainHeader').load("partials/nav.html", function(){
        var bodyid = $('body').attr('id');
        switch (bodyid.toString()) {
            case "index":
                $('#indexLink').attr("class","active");
                break;
            case "projects":
                $('#projectsLink').attr("class","active");
                break;
            case "contact":
                $('#contactLink').attr("class","active");
                break;
        }
    });

    
})();

