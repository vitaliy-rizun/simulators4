var controls = document.querySelectorAll('.toggle-controls button');
var photo = document.querySelector('.photo');
for (var i = 0; i < controls.length; i++) {
  controls[i].innerHTML = controls[i].dataset.filter;
}

function toggleFilter(filterName) {
  for (var j = 0; j < controls.length; j++) {
    controls[j].classList.remove('active');
    photo.classList.remove(controls[j].dataset.filter);
  }

  var control = document.querySelector('button.' + filterName);
  if (control) {
    control.classList.add('active');
  }

  if (photo) {
    photo.classList.add(filterName);
  }
}

toggleFilter('toaster');
toggleFilter('walden');
toggleFilter('kelvin');
