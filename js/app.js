$(document).ready(function() {
    var searchQuery = $("#search").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchQuery + "&callback=?";

    function search() {
        $("#searchIcon").on("click", function() {
                searchQuery = encodeURIComponent($("#search").val());
                // console.log(searchQuery);
                $.ajax({
                        type: "GET",
                        url: url,
                        async: false,
                        dataType: "jsonp",
                        data: {
                            "action": "opensearch",
                            "format": "json",
                            "limit": 10,
                            "search": searchQuery
                        },
                        success: function(data) {
                            console.log(data);
                            console.log(data[1][0]);
                            console.log(data[1][1]);
                            console.log(data[2][0]);
                            console.log(data[2][1]);
                            console.log(data[3][0]);
                            console.log(data[3][1]);

                        },
                        error: function(err) {
                            console.log(err);
                        }
                });

        }); // end search.on()click
} // end search()
search();
}); //end doc.ready
