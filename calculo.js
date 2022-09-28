function calc(){
let num1 = document.getElementById('somar')
let num2 = document.querySelector('input#somar2')
let res1 = document.getElementById('res')
let tab = document.getElementsByName('text1')
let tempo = document.getElementById('abre')


let data = new Date()
let temp = data.getFullYear()
tempo = temp.getFullYear
let t1 = Number(num1.value)
let t2 = Number(num2.value)
let t3 = ''
let tabuada = ''
//res1.innerHTML += (` O resultado foi: ${t1}+${t2} =${t1+t2} ${t3}`)
//res1.innerHTML += (` O resultado foi: ${tabuada}`)


if (tab[0].checked){
    // t3 = t1+t2
    //res1.innerHTML = (` O resultado da soma foi: ${t1}+${t2} = ${t3}`)
      tabuada  = 'Soma'
      t3 = t1+t2
      res1.innerHTML = (` O resultado da ${tabuada} de: ${t1} + ${t2} foi ${t3} `)
}else if(tab[1].checked){   
    tabuada = 'Multiplicacao'
    t3=t1*t2
    res1.innerHTML = (`O resultado da ${tabuada} de: ${t1} x ${t2} foi: ${t3} `)
    
}
else if(tab[2].checked){   
    tabuada = 'Subtração' 
    t3=  t1 - t2
    res1.innerHTML = (`O resultado da ${tabuada} de: ${t1} - ${t2} foi: ${t3} `)
    
}
else if(tab[3].checked){   
    tabuada = 'Divisão'
    t3 = t1 / t2
    res1.innerHTML = (`O resultado da ${tabuada} de: ${t1} / ${t2} foi: ${t3} `)
    
}

}