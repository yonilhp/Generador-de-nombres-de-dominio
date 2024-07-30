let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
// eslint-disable-next-line no-console
console.log(pronoun);
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      // eslint-disable-next-line no-console
      console.log(`${p}${a}${n}.com`);
    }
  }
}
