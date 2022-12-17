function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('txtano')
  //fAno = formulário ano
  var res = document.getElementById('res')
  if (fAno.value.length == 0 || Number(fAno.value) > ano){
    window.alert('Verifique os dados e tente novamente!')
  } else {
    var fSex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    //Colocar imagens de forma dinâmica

    if (fSex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 14) {
        //Criança
        img.setAttribute('src', 'bebem.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'jovemm.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'adultom.png')
      } else {
        //Idoso
        img.setAttribute('src', 'idosom.png')
      }

    } else if (fSex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 14) {
        //Criança
        img.setAttribute('src', 'bebef.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'jovemf.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'adultof.png')
      } else {
        //Idoso
        img.setAttribute('src', 'idosof.png')
      }
    }
      //Mudar estilo usando JS
    img.style.padding = '15px'
    res.style.textAlign = 'center'
    res.innerHTML = `Dectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }

}