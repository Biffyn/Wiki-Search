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
                    // clear the output
                    $("#output").html("");
                    // loop through array
                    for (var i = 0; i < data[1].length; i++) {
                        $("#output").prepend('<div class="ui one column grid">\
                                                <div class="column">\
                                                    <div class="ui fluid card">\
                                                        <div class="content">\
                                                            <h1 id="title" class="header">' + data[1][i] + '</h1>\
                                                            <div id="extract" class="description">' + data[2][i] + '</div>\
                                                        </div>\
                                                        <div class="extra content">\
                                                            <a id="link" class="header" href="'+ data[3][i] + '" target="_blank">Read More</a>\
                                                            </div>\
                                                        </div>\
                                                    </div>\
                                                </div>');
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });

        }); // end search.on()click
    } // end search()
    search();
}); //end doc.ready
