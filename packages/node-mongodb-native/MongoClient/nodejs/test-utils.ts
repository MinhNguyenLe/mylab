import { promisify } from "node:util";

const testPromisify = () => {
  console.log(1);
};
function main() {
  const converted = promisify(testPromisify);
  converted();
  console.log(2);
}
main();
