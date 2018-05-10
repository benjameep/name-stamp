var words = require('./words.json')

module.exports = function(){
  var now = Math.floor(Date.now()), n = []
  while(now){
    n.unshift(now%words.length)
    now = Math.floor(now/words.length)
  }
  return n.slice(-2).map(i => words[i].slice(0,1).toUpperCase() + words[i].slice(1)).join('')
}

console.log(module.exports())