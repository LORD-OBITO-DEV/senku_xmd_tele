function encode(id, dur) {
  const expiry = Date.now() + dur * 24 * 60 * 60 * 1000;
  const raw = `${id}|${expiry}`;
  return Buffer.from(raw).toString("base64");
}

const key = encode("7879830646", 1);
console.log(key);
