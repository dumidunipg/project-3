co2_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/co2.json'
sea_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/sea_temp.json'
aqi_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/aqi.json'
aqi_url_clean = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/cleaned_aqi.json'
aqi_coordinate_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/aqi_country_coordinate.json'

function init() {

    d3.json(co2_url).then(function(data){
        // https://www.geeksforgeeks.org/d3-js-array-from-method/
        // filtering out any unfilled data
        const filteredData = data.filter(d => d["CO2 [ppm]"] !== -99.99);
        //https://stackoverflow.com/questions/64227680/how-to-replace-a-d3js-nest-function-with-group-and-rollup
        // groups the data based on year
        const groupedData = d3.nest().key(d => d.Yr).entries(filteredData);
        // finds the average co2 per year
        const avgco2 = groupedData.map(group => {
            const yr = group.key;
            const year = parseFloat(yr);
            const averageco2 = d3.mean(group.values.map(d => d["CO2 [ppm]"]));
            return { year, averageco2 };
          });
          
        
        const year = avgco2.map(entry => entry.year);

        let dropdownMenu = d3.select("#selDataset");
        // adding the year to the database
        year.forEach((yearNum) => {
            dropdownMenu.append("option").text(yearNum).property("value", yearNum);
        });

        gaugeChart(year[0])
        plotChart(year[0])
        macroData(year[0])
        
    });


//---------------Sea----------------
    d3.json(sea_url).then(function(data){
        let years = data.map(entry => entry.YR);
        let months = data.map(entry => entry.MON);
        console.log(data);
    });


 //---------------AQI---------------
    //log the aqi data
    d3.json(aqi_url_clean).then(function (aqi_data){
        console.log(aqi_data);
    })

    const pollutant_options = ["NO2", "PM2.5", "PM10"];

    //list to store unique years
    let unique_year =[]


    d3.json(aqi_url_clean).then(aqi_data => {
        aqi_data.forEach(pollutant_data => {
            if (!unique_year.includes(pollutant_data.year)) {
                unique_year.push(pollutant_data.year);
            }
        });

        unique_year.sort();

        aqi_plot(aqi_data, unique_year);

    
    });


};

function aqi_plot(data, unique_year) {

    const no2_concentration = [];
    const pm25_concentration = [];
    const pm10_concentration = [];
    
    unique_year.forEach(year => {
        const years = data.filter(aqi_data => aqi_data.year === year);
    
        // average concentrations
        const no2_average = d3.mean(years, aqi_data => aqi_data.no2_concentration);
        const pm25_average = d3.mean(years, aqi_data => aqi_data.pm25_concentration); 
        const pm10_average = d3.mean(years, aqi_data => aqi_data.pm10_concentration);
    
        no2_concentration.push(no2_average);
        pm25_concentration.push(pm25_average);
        pm10_concentration.push(pm10_average); 

    
    });

    console.log(no2_concentration, pm25_concentration, pm10_concentration);

const chart = c3.generate({
        bindto: '#chart',
        data: {
            x: 'Year',
            columns: [
                //convert years to string so x-axis ticks can be the year
                ['Year', ...unique_year.map(String)],
                ['NO2', ...no2_concentration],
                ['PM2.5', ...pm25_concentration],
                ['PM10', ...pm10_concentration],
            ],
            types: {
                'NO2': 'line',
                'PM2.5': 'line',
                'PM10': 'line',
            },
        },
        title: {
            text: "Air Quality Concentrations"
        },
        axis: {
            x: {
                label: 'Year',
                type: 'category',
           },
            y: {
                label: 'Concentration',
            },
        },
        color: {
            pattern: ['purple', 'green', 'white'],
        },
    });
}

function plotChart(yearNum) {
    d3.json(sea_url).then(function(data){
        let years = data.map(entry => entry.YR);
        let months = data.map(entry => entry.MON);
        
        // filters to pull the data of that year, and works with dropdown menu
        let filter = data.filter(data => data.YR == yearNum);
        console.log(yearNum)
        let trace1 = {
            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            y: filter.map(monthTotal => monthTotal.TOTAL),
            text: filter.map(monthTotal => monthTotal.TOTAL),
            textposition: 'auto',
            hoverinfo: 'none',
            marker: {
                color: "rgba(14, 127, 0, .5)",
                opacity: 0.8,
                line: {
                    color: "black",
                    opacity: 0.7,
                    width: 1.1
                }
            },
            type: "bar"
        };

        let layout = {
            title: "Sea Temperatures by Month",
            xaxis: {
                title: "Month",
                tickangle: -45
            },
            yaxis: {
                title: "Sea Surface Temperature (degC)"
            }
        }
        Plotly.newPlot("plot", [trace1], layout);
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
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        const resultEntry = avgco2.findIndex(entry => entry.year === numYear)
            if (resultEntry !== -1) {
                console.log(`Index of ${yearNum}: ${resultEntry}`);
                console.log(`Average CO2 for ${yearNum}: ${avgco2[resultEntry].averageco2}`);
            } else {
                console.log(`No data found for ${yearNum}`);
            }
        
        let valueData = avgco2[resultEntry];
        let co2summary = Object.values(valueData)[1];
        //turn
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

function macroData(yearNum) {
    d3.json(sea_url).then(function(data){
        // filters to pull the data of that year, and works with dropdown menu
        let filter = data.filter(data => data.YR == yearNum);
        let averageTemperature = d3.mean(filter.map(monthTotal => monthTotal.TOTAL));
        d3.select("#year-macroData").html(`Average Temperature: ${averageTemperature.toFixed(2)}`);
        });

};

function optionChanged(value) { 
    console.log(value); 
    plotChart(value);
    gaugeChart(value);
    macroData(value);
};
init();