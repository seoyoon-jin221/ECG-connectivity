function showControl() {
    document.getElementById('controlsView').style.setProperty('display', 'block');
    document.getElementById('startView').style.setProperty('display', 'none');
    graph.initialize();
}

function showStart() {
    document.getElementById('controlsView').style.setProperty('display', 'none');
    document.getElementById('startView').style.setProperty('display', 'block');
}


var graph = {};
graph.initialize = function() {
  graph.dps = [];
  graph.xVal = 0;
  graph.dataLength = 10;
  graph.chart = new CanvasJS.Chart("chartContainer", {
      title :{
          text: "Dynamic Data"
      },
      axisY: {
          includeZero: false
      },
      data: [{
          type: "line",
          dataPoints: graph.dps
      }]
   });
}

graph.updateChart = function(yVal) {
      graph.dps.push({
          x: graph.xVal,
          y: yVal
      });
      graph.xVal++;


  if (graph.dps.length > graph.dataLength) {
      graph.dps.shift();
  }

  graph.chart.render();
  }

function graphDisplay() {
    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title :{
            text: "Dynamic Data"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });

    var xVal = 0;
    var yVal = 100;
    var updateInterval = 100;
    var dataLength = 100; // number of dataPoints visible at any point

    var updateChart = function (count) {

        count = count || 1;

        for (var j = 0; j < count; j++) {
            yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }

        if (dps.length > dataLength) {
            dps.shift();
        }

        chart.render();
    };

    updateChart(dataLength);
    setInterval(function(){updateChart()}, updateInterval);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
