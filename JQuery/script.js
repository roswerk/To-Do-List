
function newItem(){
// JQuery equivalent code
//1. Adding a new item to the list of items:

  let inputValue = $("#input").val();
  let li = $('<li>' + inputValue +'</li>');

  if (inputValue === ""){
    alert("You must write something!");
  } else{
  $('#list').append(li);
  }

// JQuery equivalent code
//2. Crossing out an item from the list of items:

   li.on("dblclick", function(){
     li.toggleClass("strike")
   });

// JQuery equivalent code
//3(i). Adding the delete button "X":

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

// JQuery equivalent code
//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

  crossOutButton.on("click", function(){
    li.addClass("delete")
  });

// JQuery equivalent code
// 4. Reordering the items:
   $('#list').sortable();

}
