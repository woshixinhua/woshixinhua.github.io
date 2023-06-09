
console.log("hello world!AAAA")
// 变量 ： var let,常量const

const numbers = new Array(1,2,3,4,4,5);

const myname = "Tobey";
console.log(numbers);

console.log(`my name is ${myname.toUpperCase()}`)

import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

