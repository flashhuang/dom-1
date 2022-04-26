const div = dom.find('#test>.red')[0]
console.log(div)

dom.style(div, 'color', 'red')


const divList = dom.find('.red')
console.log(div)

dom.each(divList, (n)=> console.log(n))