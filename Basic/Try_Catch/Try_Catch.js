try {
  console.log('1');
  throw err;
} catch (e) {
  console.log('2');
} finally {
  console.log("3");
}
