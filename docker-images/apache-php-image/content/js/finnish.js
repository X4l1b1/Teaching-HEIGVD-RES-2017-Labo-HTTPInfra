$(function() {

 function loadFinnish ()
        {
            $.getJSON(
                "/api/finnish/",
                function (finnish)
                {
                    console.log(finnish);
                    var message = "No one is speaking";
                    if (finnish.length > 0)
                    {
                        message = finnish[0].req;
                    }
                    $("#toChange").text(message);
                });
            };
        loadFinnish();
        setInterval( loadFinnish, 2000);
}
);
