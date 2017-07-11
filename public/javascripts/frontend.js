function getQuote() {
	console.log("Get Quote pressed");
}

function getLocalWeather() {

}

$(document).ready(function() {
	getQuote();
	$('#new-quote').on('click', getQuote);
})
//Google piechart 1 Skill Set Overview

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

	var data = google.visualization.arrayToDataTable([
    	['Skill', 'Productive'],
        ['Systems Analyst', 50],
        ['Back-end Dev', 20],
        ['DevOps', 20],
        ['Front-end Dev', 8],
        ['UX',  2]
     ]);

     var options = {
        title: 'Skill Set Overview',
        colors: ['#2E86C1', '#5DADE2', '#85C1E9', '#AED6F1', '#B2EBF2'],
        is3D: true
     };

     var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
     }
//Google piechart 2 Language Overview

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

	var data = google.visualization.arrayToDataTable([
    	['Language', 'Knowledge'],
        ['JavaScript', 50],
        ['Java', 20],
        ['Pascal/VB', 20],
        ['Ruby', 8],
        ['C',  2]
     ]);

     var options = {
        title: 'Skill Set Overview',
        colors: ['#2E86C1', '#5DADE2', '#85C1E9', '#AED6F1', '#B2EBF2'],
        is3D: true
     };

     var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

        chart.draw(data, options);
     }