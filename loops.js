function forLoop(array) {
for (let i = 0; i < 25; i++) {

if (i === 1){array.push(`I am ${i} strange loop`)} else {array.push(`I am  ${i} strange loops.`)}}

return array
}

function whileLoop(number) {
  var countdown = number
  while (countdown > 0) {console.log(countdown--)}
return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop(0)
  } while (array.length > 0 && maybeTrue() == false)
  return array
}
