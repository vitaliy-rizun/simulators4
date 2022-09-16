var filterName = 'kelvin';

var control = document.querySelector('button.' + filterName);
if (control) {
  control.classList.add('active');
}

var photo = document.querySelector('.photo');
if (photo) {
  photo.classList.add(filterName);
}
