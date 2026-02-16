const inputPhone = document.getElementById("phone-client");
/** @type { HTMLDialogElement } */
const modalRequest = document.getElementById('add-request');
const buttonModalrequest = document.querySelector('.containerRequest__buttonAddRequest')
const buttonCloseModal = document.querySelector('#add-request>header>img')

const addRequestquantity = document.querySelector('.quantity-produt__container');

function masckPhone(value) {
  let phone = value.replace(/\D/g, "");

  phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
  phone = phone.replace(/(\d{5})(\d)/, "$1-$2");

  phone = phone.substring(0, 15);

  return phone;
}

inputPhone.addEventListener("input", (event) => {
  event.target.value = masckPhone(event.target.value);
});

buttonModalrequest.addEventListener('click', (event) => {
  event.preventDefault();
  modalRequest.showModal();
})

buttonCloseModal.addEventListener('click', () => modalRequest.close())

addRequestquantity.addEventListener('click', (event) => {
  const typeDatabutton = event.target.dataset.type
  const inputQuantity = event.target.parentElement.querySelector('input').value

  if (typeDatabutton === 'decrement') {
    event.target.parentElement.querySelector('input').value = parseInt(inputQuantity) - 1;
  }
  if (typeDatabutton === 'increment') {
    event.target.parentElement.querySelector('input').value = parseInt(inputQuantity) + 1;
  }
})
