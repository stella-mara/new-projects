function tabuada() {
let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')

//CONVERTER
if (num.value.length == 0){
  window.alert('Por favor, digite um número.')
} else {
  let n = Number(num.value)
  let c = 1
  //LIMPAR SELECT
  tab.innerHTML = ' '
  while (c <= 10) {
    //ADICIONAR ELEMENTOS NO SELECT
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tab${c}`
    tab.appendChild(item)
    c++
  }

}

}