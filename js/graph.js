let ctx = document.getElementById('densityChart').getContext('2d');

Chart.defaults.color = "#fff";

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Skoda", "Kia", "Suzuki", "Nissan", "Mercedes", "Volvo", "Volkswagen", "Opel"],
        datasets: [{
            label: 'Life expectancy',
            data: [327, 243, 514, 633, 326, 387, 271, 638],
            backgroundColor: "#e5e5e5",
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)',
                'rgba(84, 60, 200, 1)',
                'rgba(0, 240, 122, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'The number of cars that we have repaired',
            position: 'top',
            fontColor: "#fff",
            fontSize: 16,
            padding: 20
        },
        scales: {
            xAxes: [{
                ticks: {
                    min: 75,
                    fontSize: 16,
                    fontColor: "#fff"
                }
            }],
            yAxes: [{
                ticks: {
                    min: 75,
                    fontSize: 16,
                    fontColor: "#fff"
                }
            }]
        }
    }
});