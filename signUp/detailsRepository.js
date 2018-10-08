class detailsRepository {
    constructor() {
        this.details = [];
    }

    async getDetails() {
        try {
            let data= await $.get('/details')
            this.details = data;
        }
        catch (error) {
            alert("have you filled all categories?")
        }

    }
    async addDetails(detailsText) {
        try {
            let detail = await $.detail('/addDetails', { username, password, email, age, country })
            this.details.push(data);
        }
        catch (error) {
            console.log(error)

            
        }
    }
}