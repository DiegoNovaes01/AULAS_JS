function calc(){
    let b1 = window.document.getElementById('text')
   // let b2 = window.document.getElementById('text2')
    let b3 = window.document.getElementById('tab')
    let nun1 = Number(b1.value)
 //   let nun2 = Number(b2.value)
    let resultado = nun1
   //
 //  item.value = b3
   //b3.appendChild(item)
   //item.text = `${nun1} + ${nun2}+ ${resultado} ` 

   if (b1.value.length == 0) {
    window.alert(`digita alguma coisa`)
   } else{
    let n = Number(b1.value)
    let c = 1
    b3.innerHTML = ``
    while ( c<=10){
        let item = document.createElement('option')
        item.text =`${nun1} x ${c} =  ${resultado*c} `
        item.value = `b3${c}`
        b3.appendChild(item)
        c++
    }

   }

   // dados.innerHTML = (`Numero esse ${nun1} + ${nun2}+ ${b3} ${item}``)
}