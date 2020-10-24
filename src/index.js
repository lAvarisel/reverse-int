module.exports = function reverse (n) {
    if(n.toString().split('')[0] === '-') {
        return `${n.toString().split('').reverse().join().replace(/,/g,'').replace(/-/g,'')}`
    } else  return n.toString().split('').reverse().join().replace(/,/g,'')
}
