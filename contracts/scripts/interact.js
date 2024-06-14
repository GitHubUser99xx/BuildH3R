// interact.js

async function main() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);
  
  console.log("Updating the message...");
  const tx = await helloWorldContract.update("This is the new message.");
  await tx.wait();
}
main();