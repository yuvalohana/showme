function getConcertDate(date) {
    $.get({
        url: "" + date,
        success: addConcert
    }
    );
}

function getConcertCity(city) {
    $.get({
        url: "" + city,
        success: addweather
    }
    );
}