function showList(id) {
  // Hide all lists
  var lists = document.querySelectorAll(".list-container");
  lists.forEach(function (list) {
    list.style.display = "none";
  });

  // Show the list with the given id
  var listToShow = document.getElementById(id);
  if (listToShow) {
    listToShow.style.display = "block";
  }
}
