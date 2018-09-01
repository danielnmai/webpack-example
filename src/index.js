import _ from "lodash"
import './style.css'
// import Icon from './icon.png'
// import Data from './data.xml'
import printMe from './print.js'

function component(){
    let element = document.createElement('div')
    let button = document.createElement('button')


    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    // //Add the image
    // let myIcon = new Image()
    // myIcon.src = Icon
    // element.appendChild(myIcon)
    // console.log(Data)

    button.innerHTML = 'Click me!'
    button.onclick = printMe

    element.appendChild(button)

    return element
}

document.body.appendChild(component())