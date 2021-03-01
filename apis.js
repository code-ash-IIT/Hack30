function fetchData() {
    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cf53cfff99msh002d37cb2585b9bp16164ajsndb7c776ce48f",
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
	}
})
    .then(response => {
	    console.log(response);
        if (!response.ok) {
            throw Error("ERROR")
        }
        return response.text();
    })
    .then(data => {
        data = JSON.parse(data)
        console.log("data : ",data);
        const html = data.news.map((user) => {
            return `<p>⦿: ${user.title}</p>`;
        })
        .join("");
        console.log(html);
        document.querySelector("#News_Covid_19").insertAdjacentHTML("afterbegin",html);
    })
    .catch(err => {
	    console.error(err);
    });
}


fetchData();