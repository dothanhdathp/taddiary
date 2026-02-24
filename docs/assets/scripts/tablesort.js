// Sorted table
var tables = document.querySelectorAll("table");
tables.forEach(
  function(table) {
    new Tablesort(table);
  }
);