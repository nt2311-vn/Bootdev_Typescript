function main(): void {
  console.log(welcome("Toan"));
}

function welcome(name: string) {
  return `Hello, ${name.toLowerCase()}`;
}
main();
