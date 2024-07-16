export function tribonacci( signature, n ) {
  while (signature.length < n) {
    signature.push(signature.slice(-3).reduce((a, b) => a + b));
  }
  return signature.slice(0, n);
}
