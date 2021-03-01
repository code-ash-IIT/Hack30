function fetchData() {
    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
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
        const newCases = data.map((user) => {
            return `<p>New Cases: ${user.NewCases}</p>`;
        })
        .join("");
        const totalCases = data.map((user) => {
            return `<p>Total Cases: ${user.TotalCases}</p>`;
        })
        .join("");
        const activeCases = data.map((user) => {
            return `<p>Active Cases: ${user.ActiveCases}</p>`;
        })
        .join("");
        const newRecovered = data.map((user) => {
            return `<p>New Recovered: ${user.NewRecovered}</p>`;
        })
        .join("");
        const totalRecovered = data.map((user) => {
            return `<p>Total Recovered: ${user.TotalRecovered}</p>`;
        })
        .join("");
        const newDeaths = data.map((user) => {
            return `<p>New Deaths: ${user.NewDeaths}</p>`;
        })
        .join("");
        const totalDeaths = data.map((user) => {
            return `<p>Total Deaths: ${user.TotalDeaths}</p>`;
        })
        .join("");
        // console.log(html1);
        document.querySelector("#Stats1").insertAdjacentHTML("afterbegin",newCases);
        document.querySelector("#Stats2").insertAdjacentHTML("afterbegin",totalCases);
        document.querySelector("#Stats3").insertAdjacentHTML("afterbegin",activeCases);
        document.querySelector("#Stats4").insertAdjacentHTML("afterbegin",newRecovered);
        document.querySelector("#Stats5").insertAdjacentHTML("afterbegin",totalRecovered);
        document.querySelector("#Stats6").insertAdjacentHTML("afterbegin",newDeaths);
        document.querySelector("#Stats7").insertAdjacentHTML("afterbegin",totalDeaths);

    })
    .catch(err => {
	    console.error(err);
    });
}

fetchData();







