export function stringComparator(
  a: string,
  b: string,
  { ignoreCapitalization = true } = {}
) {
  let stringA = String(a);
  let stringB = String(b);

  if (ignoreCapitalization) {
    stringA = stringA.toLowerCase(); // ignore upper and lowercase
    stringB = stringB.toLowerCase(); // ignore upper and lowercase
  }

  if (stringA === stringB) {
    return 0;
  }

  // stringA before stringB
  if (stringA < stringB) {
    return -1;
  }

  // stringA after stringB
  return 1;
}
