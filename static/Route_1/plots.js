/* fetch('http://127.0.0.1:5000/api/data').then(data => {
    console.log(data);
}).catch(error => console.error('Error:', error)); */

sea_url = 'http://127.0.0.1:5000/api/data/seatemp'
co2_url = 'http://127.0.0.1:5000/api/data/co2'
function init() {

    d3.json(sea_url).then(function(data){
        let years = data.map(entry => entry.YR);
        let months = data.map(entry => entry.MON);
        //console.log(months);

        let dropdownMenu = d3.select("#selDataset");
        // https://stackoverflow.com/questions/43121679/how-to-append-option-into-select-combo-box-in-d3
        years.forEach((yearNum, monthNum) => {
            let adjustedMonth = monthNum % 12 + 1;
            dropdownMenu.append("option").text(`${yearNum} Month: ${adjustedMonth}`).property("value", yearNum);
        });

    });

    d3.json(co2_url).then(function(data){
        let year = data.map(entry => entry[" Yr"]);
        let months = data.map(entry => entry[" Mn"]);
        console.log(months);
    });

};

init();