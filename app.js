const ctx = document.getElementById('myChart');
const colorRed = 'hsl(10, 79%, 65%)';
const colorCyan = 'hsl(186, 34%, 60%)';
const colorRedHover = 'hsla(10, 79%, 65%, 0.7)';
const colorCyanHover = 'hsla(186, 34%, 60%, 0.7)';

// chart default setting
Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'DM Sans, sans serif';

//chart config
const setChartData = (data) => {
  // find the index of the max amount: set a different color for it
  const amounts = data.map((d) => d.amount);
  const maxAmount = Math.max(...amounts);
  const indexofMaxAmount = data.map((d) => d.amount).indexOf(maxAmount);

  const chartData = {
    datasets: [
      {
        backgroundColor: colorRed,
        backgroundColor: (color) => {
          if (color.index === indexofMaxAmount) {
            return colorCyan;
          } else {
            return colorRed;
          }
        },
        borderWidth: 0,
        borderRadius: 5,
        hoverBackgroundColor: (color) => {
          if (color.index === indexofMaxAmount) {
            return colorCyanHover;
          } else {
            return colorRedHover;
          }
        },
        data: data,
      },
    ],
  };

  return {
    type: 'bar',
    data: chartData,
    options: {
      parsing: {
        xAxisKey: 'day',
        yAxisKey: 'amount',
      },

      scales: {
        y: {
          display: false,
        },
        x: {
          grid: {
            display: false,
          },
        },
      },

      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          caretSize: 0,
          xAlign: 'center',
          yAlign: 'bottom',
          displayColors: false,
          callbacks: {
            label: function (tooltipItems) {
              let label = tooltipItems.parsed.y;
              return '$' + label;
            },
            title: function (tooltipItems) {
              return '';
            },
          },
        },
      },
    },
  };
};

const renderChart = (config) => {
  new Chart(ctx, config);
};

const createChart = async () => {
  const res = await fetch('./data.json');
  const data = await res.json();

  const config = setChartData(data);

  renderChart(config);
};

//init render
createChart();
