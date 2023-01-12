//JS FUNCIONANDO NO BOTÃO CONTAR
function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  //DADOS FALTANDO
  if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossível contar!'
    //window.alert('[ERRO] Faltam dados!')
    
  } else {
    res.innerHTML = 'Contando: <br>'
    // let SENDO STRING RECEBE VALOR NUMÉRICO
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    //PASSO ZERO
    if (p <= 0) {
      window.alert('Passo inválido. Considerando PASSO 1')
      p = 1
    }

    //CONTAGEM + EMOJI
    if (i < f){
      //CONTAGEM CRESCENTE
      for(let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }

    } else {
      //CONTAGEM DECRESCENTE
      for(let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F448}`
      }
    }
    res.innerHTML += ` \u{1F3C1}`
  }
}

