const refs = {
  modal: document.querySelector('.modal-firebase'),
  modalHeader: document.querySelector('.modal-firebase__title'),
  modalForm: document.querySelector('.modal-firebase__form'),
  registerText: document.querySelector('.modal-firebase__form-text-register'),
  loginButton: document.querySelector('.modal-firebase__form-button--send'),
  registerButton: document.getElementById('register-btn'),
  openModalBtn: document.getElementById('open-modal-btn'),
  closeModalBtn: document.getElementById('close-modal-btn'),
  inputFields: document.querySelectorAll('.modal-firebase__form-input'),
  pagination: document.querySelector('#pagination'),
  FICTIVEopenModalFilmCardItem: document.querySelector(".item-fictive"),
  closeModalFilmCardBtn: document.querySelector(".modal-film__close-btn"),
  modalFilmCardWindow: document.querySelector(".modal-film"),
  modalFilmCardBackdrop:document.querySelector(".backdrop-film-card"),
};
export { refs };
