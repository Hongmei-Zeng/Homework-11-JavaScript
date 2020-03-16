const tbody = d3.select("tbody")

const button = d3.select("#filter-btn")

const table = d3.select("#ufo-table").append("table")

const thead = table.append("thead")

// show all the data on home page
tbody.html('') 
data.forEach(row => {
    const currentRow = tbody.append('tr')
    Object.values(row).forEach(value => {
        const cell = currentRow.append('td')
        cell.text(value)
    })
})

// show filtered data
const handler = function(){
    tbody.html('')
    const inputDate = d3.select("#datetime").property("value")

    let filteredData = data.filter(e => e.datetime === inputDate)
        filteredData.forEach(e => {
        let row = tbody.append("tr")
        row.append("td").text(e.datetime)
        row.append("td").text(e.city)    
        row.append("td").text(e.state)
        row.append("td").text(e.country)
        row.append("td").text(e.shape)
        row.append("td").text(e.durationMinutes)
        row.append("td").text(e.comments)
    })
}

button.on("click", handler)
// input.on("change", handler)
input.on("change", function(){
    d3.select("#datetime").property(d3.event.gartet.value)
})