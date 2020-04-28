function AddElement(){
  var str = document.createElement("div");
  var string = document.getElementById("input").value;
  str.innerHTML = string;
  str.classList.add("butt"); 
  document.getElementById("todolist").appendChild(str);
  document.getElementById("input").value = "";
  str.addEventListener("click", function(){
      str.style.display = "none";
  });
}