// 1. request를 이용하여 site의 HTML Source Code 가져오기
// var request = require("request");

// function getpage(link, callback){
//   request({
//     url: link,
//   }, function(error, response, body) {
//     let start = 0
//     let end = 0
//     for (let i = 0; i < body.length; i++) {
//       if (body[i] === '<' && body[i+1] === 't' && body[i+2] === 'a' && body[i+3] === 'b' && body[i+4] === 'l') {
//         start = i
//       }
//       if (body[i] === '/' && body[i+1] === 't' && body[i+2] === 'a' && body[i+3] === 'b' && body[i+4] === 'l') {
//         end = i + 8
//         let table_ele = ''
//         for (i = start; i < end; i++) {
//           table_ele = table_ele + body[i]
//         }
//         callback(table_ele)
//       }
//     }
//   })
// }

// function getdata(data){
//   console.log(data)
// }

// getpage("https://github.com/edugieun/Algorithm-Solving/blob/master/Array/0000_Bomber1(D3%2C%20Matrix)/bomber1.py", getdata)

// 2. axios를 이용하여 가져오기
// const axios = require('axios')
// axios.get('https://github.com/edugieun/Algorithm-Solving/blob/master/Array/0000_Bomber1(D3%2C%20Matrix)/bomber1.py')
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.log(err)
//   })


// 3. ajax를 이용하여 가져오기
var $ = require('jQuery');
 
$("<h1>Include this using jquery</h1>").appendTo("body");
console.log($("body").html());