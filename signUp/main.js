class EventsHandler {
    constructor(detailsRepository) {
        this.detailsRepository = detailsRepository;
        this.$details = $(".details");
    }
    details() {
        $('#SIGN UP').on("click", function () {
            let username = $(".magic-input").val()
            let password = $(".name-input").val()
            let email = $(".name-input").val()
            let age = $(".name-input").val()
            let country = $(".name-input").val()
          async  $.post(username, password, email, age, country)
          await

          


        })
    }
}