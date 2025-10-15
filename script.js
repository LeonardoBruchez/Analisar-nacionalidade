function calcular() {
  var pais = document.querySelector('input#txt2')
  var res = document.querySelector('div#res')
  var res2 = document.querySelector('div#res2')
  var res3 = document.querySelector('div#res3')
 
  var PaisUpperCase = pais.value.toLowerCase()

  res.style.textAlign = 'center'
  res.style.marginBlock = '3rem'

  res2.style.textAlign = 'center'
  res2.style.marginBlock = '1rem'
  
  res3.style.textAlign = 'center'
  res3.style.marginBlock = '1rem'

  res2.textContent = ''
  res3.textContent = ''
  
  res.textContent = `Seu país de origem é ${pais.value}`
  if (PaisUpperCase === 'brasil' || PaisUpperCase === 'brazil') {
    res2.textContent = `Você é 
    Brasileiro!`
  } else {
    res3.textContent = 'Você é Estrangeiro!'
  }
}




