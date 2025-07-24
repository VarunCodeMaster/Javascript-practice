function blockFor5Seconds() {
  const end = Date.now() + 5000;
  while (Date.now() < end) {
    // Blocking the thread
  }
  console.log("Blocking Done");
}

console.log("Before Blocking");
blockFor5Seconds();

setTimeout(() => {
  console.log("After Blocking (inside setTimeout)");
}, 0);

console.log("After Blocking Function");
