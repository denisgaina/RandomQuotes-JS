$(function(){
    function refreshQuote() {
        fetch('/api/quote').then(function (a) {
            return a.json();
        }).then(function (quote) {
            $("#quoteText").text(quote.quote);
            $("#quoteAuthor").text(quote.author);
            $("#appVersion").text(quote.appVersion);
            $("#environmentName").text(quote.environmentName);
        });
    }

    $("#refreshQuote").click(function(){
        refreshQuote();
    });

    refreshQuote();
});