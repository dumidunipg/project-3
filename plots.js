/* fetch('http://127.0.0.1:5000/api/data').then(data => {
    console.log(data);
}).catch(error => console.error('Error:', error)); */

co2_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/co2.json'
sea_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/sea_temp.json'
aqi_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/aqi.json'
aqi_url_clean = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/cleaned_aqi.json'
function init() {

//---------------Sea----------------
    d3.json(sea_url).then(function(data){
        console.log(data);
    });


 //---------------AQI---------------
    //log the aqi data
    d3.json(aqi_url_clean).then(function (aqi_data){
        console.log(aqi_data);
    })

    //for dropdowns if needed
    //let dropdownMenuPollutant = d3.select("#selPollutant");
    //let dropdownMenuYear = d3.select("#selYear");

    const pollutant_options = ["NO2", "PM2.5", "PM10"];

    //list to store unique years
    let unique_year =[]

    //for pollutant dropdown if needed
    //pollutant_options.forEach(pollutant => {
        //dropdownMenuPollutant.append("option")
                             //.text(pollutant)
                             //.attr("value", pollutant);
    //});

    d3.json(aqi_url_clean).then(aqi_data => {
        aqi_data.forEach(pollutant_data => {
            if (!unique_year.includes(pollutant_data.year)) {
                unique_year.push(pollutant_data.year);
            }
        });

        unique_year.sort();

        //for year dropdown if needed
        //unique_year.forEach(year => {
            //dropdownMenuYear.append("option")
                                //.text(year)
                                //.attr("value", year);
            
    //});
        
        //visualization
        //let selectedPollutant = dropdownMenuPollutant.property("value");
        //let selectedYear = dropdownMenuYear.property("value");
        aqi_plot(aqi_data, unique_year);

        //event listener
        //dropdownMenuPollutant.on("change", function(){
            //let pollution_selected = dropdownMenuPollutant.property("value");
            //let year_selected = dropdownMenuYear.property("value");
            //aqi_plot(aqi_data, unique_year);
        //});

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

function plotChart() {

};

function createMap() {

};

function GuageChart(){

};

function optionChange(){

};
init();