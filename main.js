google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=142b94MltijTAQHGvGhmBHf7KnFaY5AAGR20rw8WZsj0&output=html&usp=sharing');
   // https://docs.google.com/spreadsheets/d/142b94MltijTAQHGvGhmBHf7KnFaY5AAGR20rw8WZsj0/edit?usp=sharing
    query.setQuery('SELECT A, B, C, D, E'); //label A "Business Name", B "Business Address", C "", D "Phone", E "Website"//
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));

    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);