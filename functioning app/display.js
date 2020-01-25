function showControl() {
    document.getElementById('controlsView').style.setProperty('display', 'block');
    document.getElementById('startView').style.setProperty('display', 'none');
    graphDisplay();
}

function showStart() {
    document.getElementById('controlsView').style.setProperty('display', 'none');
    document.getElementById('startView').style.setProperty('display', 'block');
}

var graph = {};
graph.initialize = function() {
  graph.dps = [];
  graph.xVal = 0;
  graph.updateInterval = 100;
  graph.dataLength = 100;
  graph.chart = new CanvasJS.Chart("chartContainer", {
      title :{
          text: "Dynamic Data"
      },
      axisY: {
          includeZero: false
      },
      data: [{
          type: "line",
          dataPoints: this.dps
      }];
   });
}

graph.updateChart = function(yVal) {
  this.pushYval(this.dataLength);
  setInterval(function(){this.pushYval()}, this.updateInterval);
}

graph.pushYval = function(count, yVal) {
  count = count || 1;

  for (var j = 0; j < count; j++) {
      this.dps.push({
          x: this.xVal,
          y: yVal
      });
      this.xVal++;
  }

  if (this.dps.length > dataLength) {
      this.dps.shift();
  }

  this.chart.render();
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
