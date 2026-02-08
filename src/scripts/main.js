function masckPhone(value) {
  let phone = value.replace(/\D/g, "");

  phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
  phone = phone.replace(/(\d{5})(\d)/, "$1-$2");

  phone = phone.substring(0, 15);

  return phone;
}
