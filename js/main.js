      // Load Charts and the corechart and barchart packages.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie chart and bar chart when Charts is loaded.
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Champiñones', 0.5],
          ['Cebollas', 0.5],
          ['Aceitunas', 0.5],
          ['Zucchini', 0.5],
          ['Pepperoni', 3],
          ['Mole verde', 3],
          ['Queso', 2],
        ]);
//pastel
        var gpastel_options = {title:'Gráfica de Pastel: ¿Cuánta pizza comiste anoche?',
                       width:400,
                       height:300};
        var pastel = new google.visualization.PieChart(document.getElementById('pastel'));
        pastel.draw(data, gpastel_options);
//barra
        var gbarra_options = {title:'Gráfica de Barra: ¿Cuánta pizza comiste anoche?',
                       width:400,
                       height:300,
                       legend: 'none'};
        var barra = new google.visualization.BarChart(document.getElementById('barra'));
        barra.draw(data, gbarra_options);
        //pastel3D
         var gpastel_options = {title:'Gráfica de Pastel 3D: ¿Cuánta pizza comiste anoche?',
        is3D: true,
        };
        var pastel = new google.visualization.PieChart(document.getElementById('pastelD'));
        pastel.draw(data, gpastel_options);
        //columna
        var gcolumna_options = {title:'Gráfica Columna: ¿Cuánta pizza comiste anoche?',
                       width: 600,
                       height: 400,
                       legend: 'none'};
        var columna = new google.visualization.ColumnChart(document.getElementById('columna'));
        columna.draw(data, gcolumna_options);
 //expansion pastel
 var gexpansion_options = {title:'Gráfica Exploding a Slice: ¿Cuánta pizza comiste anoche?',
        legend: 'none',

          slices: {  1: {offset: 0.2},
                     3: {offset: 0.3},
                     5: {offset: 0.4},
          },
        }
        var expan = new google.visualization.PieChart(document.getElementById('expansion'));
        expan.draw(data, gexpansion_options);
        //curva bien loca
         var curv_options = {
          title: 'Gráfica Curving the Lines: ¿Cuánta pizza comiste anoche?',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chuec = new google.visualization.LineChart(document.getElementById('curv'));
        chuec.draw(data, curv_options);        
      }
      