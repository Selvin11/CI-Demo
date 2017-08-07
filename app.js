// function timeout (ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done')
//   })
// }

// timeout(100).then((value) => {
//   console.log(value)
// })
import _ from 'lodash'

function component () {
  var element = document.createElement('div')

  /* 需要引入 lodash，下一行才能正常工作 */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())
