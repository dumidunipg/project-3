co2_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/co2.json'
sea_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/sea_temp.json'
aqi_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/aqi.json'

function init() {

    d3.json(co2_url).then(function(data){
        // https://www.geeksforgeeks.org/d3-js-array-from-method/
        // filtering out any unfilled data
        const filteredData = data.filter(d => d["CO2 [ppm]"] !== -99.99);
        //need to cite
        const groupedData = d3.nest().key(d => d.Yr).entries(filteredData);

        const avgco2 = groupedData.map(group => {
            const yr = group.key;
            const year = parseFloat(yr);
            const averageco2 = d3.mean(group.values.map(d => d["CO2 [ppm]"]));
            return { year, averageco2 };
          });
          
        //console.log(avgco2);
        
        const year = avgco2.map(entry => entry.year);

        let dropdownMenu = d3.select("#selDataset");

        year.forEach((yearNum) => {
            dropdownMenu.append("option").text(yearNum).property("value", yearNum);
        });

        gaugeChart(year[0])
        //plotChart(year[0])
        
    });


    d3.json(sea_url).then(function(data){
        let years = data.map(entry => entry.YR);
        let months = data.map(entry => entry.MON);
        //console.log(data);
    });
};

function plotChart(yearNum) {
    d3.json(sea_url).then(function(data){
        let years = data.map(entry => entry.YR);
        let months = data.map(entry => entry.MON);
        
        // filters to pull the data of that year, and works with dropdown menu
        let filter = data.filter(data => data.YR == yearNum);
        console.log(filter)
    });
};

function createMap() {

};

function gaugeChart(yearNum){

    // Use D3 to retrieve all of the data
    d3.json(co2_url).then((data) => {
        const filteredData = data.filter(d => d["CO2 [ppm]"] !== -99.99);
        //need to cite
        const groupedData = d3.nest().key(d => d.Yr).entries(filteredData);
        //console.log(groupedData);

        const avgco2 = groupedData.map(group => {
            const yr = group.key;
            const year = parseFloat(yr);
            //co2 = group.values.map(d => d["CO2 [ppm]"]);
            const averageco2 = d3.mean(group.values.map(d => d["CO2 [ppm]"]));
            return { year, averageco2 };
          });
        
        const numYear = parseFloat(yearNum);
        //console.log(avgco2[0].year)
        //need to cite
        const resultEntry = avgco2.findIndex(entry => entry.year === numYear)
            if (resultEntry !== -1) {
                console.log(`Index of ${yearNum}: ${resultEntry}`);
                console.log(`Average CO2 for ${yearNum}: ${avgco2[resultEntry].averageco2}`);
            } else {
                console.log(`No data found for ${yearNum}`);
            }
        
        let valueData = avgco2[resultEntry];
        //console.log(valueData)
        let co2summary = Object.values(valueData)[1];
        let co2Num = Number.parseFloat(co2summary).toFixed(2);

        // Set up the trace for the gauge chart
        let trace2 = {
            value: co2Num,
            domain: {x: [0,1], y: [0,1]},
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [100,500]},
                bar: {color: "black"},
                steps: [
                    {range: [100, 140], color: "rgba(255, 255, 255, 0)"},
                    {range: [140, 180], color: "rgba(232, 226, 202, .5)"},
                    {range: [180, 220], color: "rgba(210, 206, 145, .5)"},
                    {range: [220, 260], color:  "rgba(202, 209, 95, .5)"},
                    {range: [260, 300], color:  "rgba(184, 205, 68, .5)"},
                    {range: [300, 340], color: "rgba(170, 202, 42, .5)"},
                    {range: [340, 380], color: "rgba(142, 178, 35 , .5)"},
                    {range: [380, 420], color:  "rgba(110, 154, 22, .5)"},
                    {range: [420, 460], color: "rgba(50, 143, 10, 0.5)"},
                    {range: [460, 500], color: "rgba(14, 127, 0, .5)"},
                ]
            } 
        }; 
        // Set up the Layout
        let layout = {
            width: 400, 
            height: 400,
            margin: {t: 0, b:0}
        };

        // Call Plotly to plot the gauge chart
        Plotly.newPlot("gauge", [trace2], layout)
    }

)};

function optionChanged(value) { 
    console.log(value); 
    plotChart(value);
    gaugeChart(value);
};
init();