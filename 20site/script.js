var toasterControl = document.querySelector('button.toaster');
if (toasterControl) {
  toasterControl.classList.remove('active');
}

var waldenControl = document.querySelector('button.walden');
if (waldenControl) {
  waldenControl.classList.add('active');
}

var photo = document.querySelector('.photo');
if (photo) {
  photo.classList.remove('toaster');
  photo.classList.add('walden');
}
