var array = ['A','B','C','D','E']

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (var i in array) {
  if (array.hasOwnProperty(i)) {
    console.log(i,array[i]);
  }
}

for (var i of array) {
  console.log(i);
}
