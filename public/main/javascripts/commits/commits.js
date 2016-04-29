// for external integration with charting use https://api.github.com/search/repositories?q=%20+fork:true+user:jrhalchak
import commitsModel from './modules/commitsModel';
import Chart from 'chart.js';

const gitApi = 'https://api.github.com/search/repositories?q=%20+fork:true+user:jrhalchak';

// repos would normall be populated based on a call to the url above
var repos = ['https://api.github.com/repos/jrhalchak/jrh-portfolio/commits'];

commitsModel(repos, (commitLists)=>{
  var commits = commitLists[0],
  //would normally loop through and get all dates to use as labels and merge down the different arrays but for the sake of time...
  commitData = {
    type: 'line',
    defaultColor: 'rgba(242,242,242,0.8)',
    scaleFontColor: 'rgba(242,242,242,0.8)',
    data: {
      labels: commits.slice().map((c)=> c.date),
      datasets: [{
        label: 'Commit to this Site by Date',
        fill: true,
        lineTension: 1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: commits.slice().map((c)=> c.count)
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 10
          }
        }]
      }
    }
  },
  ctx = $('.js-commitsChart'),
  commitsChart = new Chart(ctx, commitData);


});
