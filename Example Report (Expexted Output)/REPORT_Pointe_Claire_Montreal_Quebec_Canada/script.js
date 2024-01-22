google.charts.load('current', {'packages':['corechart']}); google.charts.setOnLoadCallback(Income_f);

 function Income_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['Household income', 104714.6011], ['Individual income', 42131.5308]]

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
    [['Public transit', 0.1574], ['Foot', 0.0061], ['Bicycle', 0.013], ['Car', 0.7707], ['Other', 0.05279999999999996]]

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
    [['Households with one family', 0.7349], ['Households with multiple families', 0.0012], ['Households with one person', 0.2528], ['Households with multiple people', 0.011], ['Children per household', 1.1818]]

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
    [['0 to 4', 0.0484], ['5 to 9', 0.0587], ['10 to 14', 0.0755], ['15 to 19', 0.0654], ['20 to 34', 0.1358], ['35 to 49', 0.187], ['50 to 64', 0.22799999999999998], ['65 to 79', 0.1376], ['80 and up', 0.0637]]

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
    [['Owners', 0.8708], ['Renters', 0.0991]]

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
    [['English only', 0.2083], ['French only', 0.0397], ['English and French', 0.746], ['Neither English nor French', 0.006]]

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
    [['No high school diploma', 0.0855], ['High school diploma', 0.1909], ['Apprenticeship or trade certificate', 0.1068], ['College certificate or diploma', 0.2253], ['University certificate or diploma', 0.064], ['Bachelor degree', 0.2298], ["Master's degree or doctorate", 0.0952]]

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
    [['Single-detached house', 0.8511], ['Semi-detached house', 0.0011], ['Duplex', 0.0], ['Row House', 0.0317], ['Apartment, less than 5 floors', 0.0028], ['Apartment, 5 or more floors', 0.1134]]

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
    [['Families without children', 0.3937], ['Families with children', 0.6062393699999999], ['Families with one child', 0.1979], ['Families with two children', 0.2816], ['Families with more than two children', 0.1268]]

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
