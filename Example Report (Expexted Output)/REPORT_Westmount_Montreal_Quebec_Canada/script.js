google.charts.load('current', {'packages':['corechart']}); google.charts.setOnLoadCallback(Income_f);

 function Income_f() {
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows(
    [['Household income', 242700.5372], ['Individual income', 96702.8281]]

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
    [['Public transit', 0.2365], ['Foot', 0.1922], ['Bicycle', 0.0163], ['Car', 0.48860000000000003], ['Other', 0.06640000000000001]]

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
    [['Households with one family', 0.5939], ['Households with multiple families', 0.0018], ['Households with one person', 0.3641], ['Households with multiple people', 0.0402], ['Children per household', 1.1166]]

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
    [['0 to 4', 0.039], ['5 to 9', 0.0504], ['10 to 14', 0.0604], ['15 to 19', 0.0761], ['20 to 34', 0.1568], ['35 to 49', 0.1617], ['50 to 64', 0.20609999999999998], ['65 to 79', 0.1727], ['80 and up', 0.07680000000000001]]

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
    [['Owners', 0.4416], ['Renters', 0.55]]

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
    [['English only', 0.1965], ['French only', 0.0244], ['English and French', 0.769], ['Neither English nor French', 0.0101]]

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
    [['No high school diploma', 0.0439], ['High school diploma', 0.1394], ['Apprenticeship or trade certificate', 0.0047], ['College certificate or diploma', 0.1222], ['University certificate or diploma', 0.0478], ['Bachelor degree', 0.2846], ["Master's degree or doctorate", 0.3196]]

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
    [['Single-detached house', 0.0921], ['Semi-detached house', 0.1719], ['Duplex', 0.0496], ['Row House', 0.1136], ['Apartment, less than 5 floors', 0.219], ['Apartment, 5 or more floors', 0.3412]]

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
    [['Families without children', 0.4517], ['Families with children', 0.54824517], ['Families with one child', 0.1697], ['Families with two children', 0.2596], ['Families with more than two children', 0.119]]

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
