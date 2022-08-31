'use strict'

const herois = [
    'Iron - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

const criarCard = (heroi)=>{
    const main = document.querySelector('main')
    const div = document.createElement('div')
    const heroiSeparado = heroi.split(' - ')
    console.log(heroiSeparado)
    div.classList.add('cards')
    div.innerHTML = `
        <ul>
            <li class='heros'>
            <h2>${heroiSeparado[0]}  </h2>
            ${heroiSeparado[1]}
            </li>
        </ul>
    `
    main.appendChild(div)
}
herois.forEach(criarCard)