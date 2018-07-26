var stackedBar = new Chart(ctx, {
  type: 'horizontalBar',
  data: data,
  options: {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
});

new Chart(document.getElementById("stackedBar"),{
  type:"horizontalBar",
  data:{
    labels:["Impressions","Reach","Engagement","Traffic","Leads","Units Sold","Goal"],
    datasets:[{
      label:"My First Dataset",
      data:[40000,30000,20000,100000,50000,25000,10000],
      fill:false,
      backgroundColor:["rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],
        "borderColor":["rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)"],
        "borderWidth":1}
      ]},
      "options":{
        "scales":{"xAxes":[{
          "ticks":{"beginAtZero":true
        }
      }]
    }
  }
});
