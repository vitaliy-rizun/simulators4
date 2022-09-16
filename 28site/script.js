var controls = document.querySelectorAll('.toggle-controls button');

for (var i = 0; i < controls.length; i++) {
  controls[i].innerHTML = controls[i].dataset.filter;
}
