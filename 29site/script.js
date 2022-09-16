var controls = document.querySelectorAll('.toggle-controls button');

for (var i = 0; i < controls.length; i++) {
  controls[i].innerHTML = controls[i].dataset.filter;
}

function toggleFilter(filterName) {
  for (var j = 0; j < controls.length; j++) {
    controls[j].classList.remove('active');
  }

  var control = document.querySelector('button.' + filterName);
  if (control) {
    control.classList.add('active');
  }

  var photo = document.querySelector('.photo');
  if (photo) {
    photo.classList.add(filterName);
  }
}

toggleFilter('toaster');
toggleFilter('walden');
toggleFilter('kelvin');
