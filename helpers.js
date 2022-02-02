const { createHmac } = require("crypto");

function getHash() {
  const txt = "Hello World";
  const hash = createHmac("SHA256", "secretkey")
    .update(txt, "utf-8")
    .digest("base64");

  return hash;
}
console.log(getHash());
//getHash()