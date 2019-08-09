const remote = require("electron").remote;

toggleTabs("games_selector");


var menuShown = false;

$(document).on("ready",function(){

    console.log($("doc"));

 $("#minimizeButton").on("click", () => {

        remote.BrowserWindow.getFocusedWindow().minimize();

    });

    $("#quitButton").on("click", () => {
        remote.getCurrentWindow().close();
    });

    var dividingFactor = 40;
    
    var marginFactor = dividingFactor + 80;

    $("#heroContainer").on("mousemove", (e) => {

        $("#heroContainer").css("background-position", -e.pageX / dividingFactor + "px " + -e.pageY / dividingFactor + "px");

        $(".dropSpan").css({
            "margin-top": -(e.pageY / dividingFactor) + "px",
            "margin-left": -(e.pageX / dividingFactor) + "px"
        });
        $(".characterSpan").css({
            "margin-top": e.pageY / marginFactor + "px",
            "margin-left": e.pageX / marginFactor + "px"
        });

    });

    $("#optionButton").click(function(){
    
        if(menuShown){
            hideMenu();
            console.log("menu container shown " + $(".menu_container"));
            menuShown = false;
        }else{
            showMenu();
            console.log("menu container hidden " + $(".menu_container"));
            menuShown = true;
        }

    });

});

function showMenu(){
    $(".menu_container").show();
}

function hideMenu(){
    $(".menu_container").hide();
}


function toggleTabs(id){

   var idName = $("#"+id).attr("id");

   var containerId = idName.split("_")[0] + "_container";

   hideAllContainers();
   removeAllSelectedClasses();

   $("#"+containerId).show();
   $("#"+idName).addClass("tab_selected");   

}

function removeAllSelectedClasses(){
    $("#games_selector").removeClass("tab_selected");
    $("#center_selector").removeClass("tab_selected");
}

function hideAllContainers(){
    $("#games_container").hide();
    $("#center_container").hide();
}
