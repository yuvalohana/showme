class EventsHandler {
    constructor(unicornRepository, unicornRenderer) {
        this.unicornRepository = unicornRepository;
        this.$unicorns = $(".details");
    }
    dates() {
        $('#submit').on("click", function () {
            let start = $(".start-input").val()
            let end = $(".end-input").val()
            let country = $(".end-input").val()
            postDatesInfo(start, end, country)
        })
    }
}