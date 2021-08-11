

export const deleteCart = (id) => {


  let object = JSON.parse(localStorage.getItem('order'));
  let delet = object.filter(e => e.id !== id);
  localStorage.setItem('order', JSON.stringify(delet));
  return delet;
}