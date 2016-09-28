$(document).ready(function() {
    var searchQuery;
    var api_url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=extracts&exlimit=max&explaintext&exintro&exsentences=2&gsrsearch=";

    function search(){
        searchQuery = "hello"; //encodeURIComponent($("#search").val().trim());
        url =   api_url + searchQuery + "&callback=?";

        $.getJSON(url, function(res){
            console.log(res);

        }); // end getJSON

    } // end search()
         search();
});     //end doc.ready
