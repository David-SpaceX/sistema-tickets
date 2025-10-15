

//scriipt para grafica linear
export const data = {
  labels: ['Usuario', 'Admin', 'Tecnico', 'Ticket'],
  datasets: [
   {
      label: 'Usuarios',
      data: [65, 0, 0, 0],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
       barThickness: 30
          },
    {
      label: 'Admin',
      data: [0, 59, 0, 0],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 2,
       barThickness: 30
    },
    {
      label: 'Tecnico',
      data: [0, 0, 80, 0],
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 2,
       barThickness: 30
    },
    {
      label: 'Ticket',
      data: [0, 0, 0, 81],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
       barThickness: 30
    }
  ]
};


//script para grafica linear
export const finalConfig = {
  type: 'bar',
  data: data,
  options: {
    responsive: true, //modo responsive
    maintainAspectRatio: false,
    scales: {
      x: {
        categoryPercentage: 1,
        barPercentage: 1
      },
      y: {
        beginAtZero: true
      }
    }
  },
};



//script para grafico de dona

export const dataDona = {
  labels: [
    'Usuario', 'Admin', 'Tecnico', 'Tiquets'
  ],
  datasets: [{
    label: 'MiDona',
    data: [300, 50, 100, 50],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(54, 100, 200)',
    ],
    hoverOffset: 4
  }]
};

export const configDona = {
  type: 'doughnut',
  data: dataDona,
  options: {
    responsive: true ,
  maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};




//script para grafica lineal

export const datalinear = {
  labels: ['Usuario', 'Admin', 'Tiquet', 'Tecnico'],
  datasets: [
    {
      label: 'Usuarios', 
      data: [65, 59, 80, 81],    
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.1,
      fill: false
    },
    {
      label: 'Administradores',    // segunda línea
      data: [28, 48, 40, 19],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.1,
      fill: false
    },
    {
      label: 'Técnicos',           // tercera línea
      data: [12, 25, 30, 45],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.1,
      fill: false
    },
        {
      label: 'Tiquets',         
      data: [30, 10, 60, 25],
      borderColor: 'rgba(235, 226, 54, 1)',
      backgroundColor: 'rgba(46, 191, 24, 0.2)',
      tension: 0.1,
      fill: false
    }
  ]
};

export const configLinear = {
  type: 'line',
  data: datalinear,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};