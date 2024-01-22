google.charts.load('current', {'packages':['corechart']}); google.charts.setOnLoadCallback(Income_f);

 function Income_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['Household income', 62563.862], ['Individual income', 32531.7986]]

    //  ['Mushrooms', 3],
    //  ['Onions', 1],
    //  ['Olives', 1],
    //  ['Zucchini', 1],
    //  ['Pepperoni', 2]
   );

   // Set chart options
   var options = {'title':'Income',
                  'width':400,
                  'height':300,
                  'text-align': 'center'
                };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.ColumnChart(document.getElementById('Income_id'));
   chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(Commute_mode_f);

 function Commute_mode_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['Public transit', 0.4773], ['Foot', 0.0952], ['Bicycle', 0.0379], ['Car', 0.34119999999999995], ['Other', 0.0484]]

    //  ['Mushrooms', 3],
    //  ['Onions', 1],
    //  ['Olives', 1],
    //  ['Zucchini', 1],
    //  ['Pepperoni', 2]
   );

   // Set chart options
   var options = {'title':'Commute mode',
                  'width':400,
                  'height':300,
                  'text-align': 'center'
                };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('Commute_mode_id'));
   chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(Household_composition_f);

 function Household_composition_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['Households with one family', 0.3788], ['Households with multiple families', 0.0052], ['Households with one person', 0.5155], ['Households with multiple people', 0.1005], ['Children per household', 0.7696]]

    //  ['Mushrooms', 3],
    //  ['Onions', 1],
    //  ['Olives', 1],
    //  ['Zucchini', 1],
    //  ['Pepperoni', 2]
   );

   // Set chart options
   var options = {'title':'Household composition',
                  'width':400,
                  'height':300,
                  'text-align': 'center'
                };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('Household_composition_id'));
   chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(Population_age_f);

 function Population_age_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['0 to 4', 0.0462], ['5 to 9', 0.032], ['10 to 14', 0.0247], ['15 to 19', 0.0266], ['20 to 34', 0.4075], ['35 to 49', 0.2369], ['50 to 64', 0.1512], ['65 to 79', 0.0619], ['80 and up', 0.0131]]

    //  ['Mushrooms', 3],
    //  ['Onions', 1],
    //  ['Olives', 1],
    //  ['Zucchini', 1],
    //  ['Pepperoni', 2]
   );

   // Set chart options
   var options = {'title':'Population age',
                  'width':400,
                  'height':300,
                  'text-align': 'center'
                };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('Population_age_id'));
   chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(Housing_tenancy_f);

 function Housing_tenancy_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['Owners', 0.2765], ['Renters', 0.7218]]

    //  ['Mushrooms', 3],
    //  ['Onions', 1],
    //  ['Olives', 1],
    //  ['Zucchini', 1],
    //  ['Pepperoni', 2]
   );

   // Set chart options
   var options = {'title':'Housing tenancy',
                  'width':400,
                  'height':300,
                  'text-align': 'center'
                };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('Housing_tenancy_id'));
   chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(Official_language_knowledge_f);

 function Official_language_knowledge_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['English only', 0.0954], ['French only', 0.1843], ['English and French', 0.7126], ['Neither English nor French', 0.0077]]

    //  ['Mushrooms', 3],
    //  ['Onions', 1],
    //  ['Olives', 1],
    //  ['Zucchini', 1],
    //  ['Pepperoni', 2]
   );

   // Set chart options
   var options = {'title':'Official language knowledge',
                  'width':400,
                  'height':300,
                  'text-align': 'center'
                };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('Official_language_knowledge_id'));
   chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(Education_f);

 function Education_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['No high school diploma', 0.1706], ['High school diploma', 0.1886], ['Apprenticeship or trade certificate', 0.085], ['College certificate or diploma', 0.1197], ['University certificate or diploma', 0.0689], ['Bachelor degree', 0.2245], ["Master's degree or doctorate", 0.1426]]

    //  ['Mushrooms', 3],
    //  ['Onions', 1],
    //  ['Olives', 1],
    //  ['Zucchini', 1],
    //  ['Pepperoni', 2]
   );

   // Set chart options
   var options = {'title':'Education',
                  'width':400,
                  'height':300,
                  'text-align': 'center'
                };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('Education_id'));
   chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(Housing_type_f);

 function Housing_type_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['Single-detached house', 0.0018], ['Semi-detached house', 0.0024], ['Duplex', 0.015], ['Row House', 0.039], ['Apartment, less than 5 floors', 0.7603], ['Apartment, 5 or more floors', 0.1808]]

    //  ['Mushrooms', 3],
    //  ['Onions', 1],
    //  ['Olives', 1],
    //  ['Zucchini', 1],
    //  ['Pepperoni', 2]
   );

   // Set chart options
   var options = {'title':'Housing type',
                  'width':400,
                  'height':300,
                  'text-align': 'center'
                };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('Housing_type_id'));
   chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(Family_composition_f);

 function Family_composition_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['Families without children', 0.6977], ['Families with children', 0.3023], ['Families with one child', 0.1478], ['Families with two children', 0.107], ['Families with more than two children', 0.0475]]

    //  ['Mushrooms', 3],
    //  ['Onions', 1],
    //  ['Olives', 1],
    //  ['Zucchini', 1],
    //  ['Pepperoni', 2]
   );

   // Set chart options
   var options = {'title':'Family composition',
                  'width':400,
                  'height':300,
                  'text-align': 'center'
                };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('Family_composition_id'));
   chart.draw(data, options);
 }
