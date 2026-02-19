const modalRequest = document.getElementById('add-request');
const buttonModalrequest = document.querySelector('.containerRequest__buttonAddRequest')
const buttonCloseModal = document.querySelector('#add-request>header>img')

const addRequestquantity = document.querySelector('.quantity-produt__container');

const inputFormartPrice = document.getElementById('value-produt');

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

inputFormartPrice.addEventListener('input', (event) => {
  let value = event.target.value.replace(/\D/g, "");
  value = (value / 100).toFixed(2) + "";
  value = value.replace(".", ",");
  value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  event.target.value = "R$ " + value;
});
