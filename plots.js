/* fetch('http://127.0.0.1:5000/api/data').then(data => {
    console.log(data);
}).catch(error => console.error('Error:', error)); */

co2_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/co2.json'
sea_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/sea_temp.json'
aqi_url = 'https://raw.githubusercontent.com/dumidunipg/project-3/main/Resources/aqi.json'
function init() {

    d3.json(sea_url).then(function(data){
        console.log(data);
    });
};

function plotChart() {

};

function createMap() {

};

function GuageChart(){

};

function optionChange(){

};
init();