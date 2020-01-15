// removing: function(string) {
//             return string.slice(0, -1);
//         },
//         percentage: function(num1) {
//             return num1 / 100;
//         },
//         adding: function(num1, num2) {
//             return num1 + num2;
//         },
//         minus: function(num1, num2) {
//             return num1 - num2;
//         },
//         dividing: function(num1, num2) {
//             return num1 / num2;
//         },
//         times: function(num1, num2) {
//             return num1 * num2;
//         },
//         let new_num = num.target === undefined ? num : num.target.innerText

// if (this.display === 0) {
//     this.display = "";
// }
// if (new_num === "ac") {
//     this.display = 0
// } else if (parseInt(new_num)) {
//     this.display += new_num;
// } else if (new_num === ":-(") {
//     if (this.display.length <= 1) {
//         this.display = 0;
//     } else {
//         this.display = this.removing(this.display);
//     }
// } else if (new_num === "=") {
//     let numbersGroup = [
//         []
//     ];
//     let operator = [];
//     let index = 0;

//     for (let i = 0; i < this.display.length; i++) {
//         if (/[0-9]/.test(this.display[i]) || this.display[i] === ".") {
//             numbersGroup[index] += this.display[i]
//         } else {
//             operator.push(this.display[i])
//             index += 1
//             numbersGroup[index] = []
//         }
//     }


//     const res = numbersGroup.reduce((prev, curr) => {
//         for (let sign of operator) {
//             if (sign === "+") {
//                 return this.adding(parseFloat(prev), parseFloat(curr))
//             }
//             if (sign === "-") {
//                 return this.minus(parseFloat(prev), parseFloat(curr))
//             }
//             if (sign === "÷") {
//                 return this.dividing(parseFloat(prev), parseFloat(curr))
//             }
//             if (sign === "*") {
//                 return this.times(parseFloat(prev), parseFloat(curr))
//             }
//             if (sign === "%") {
//                 return this.percentage(parseFloat(prev))
//             }
//         }
//     })


//     window.localStorage[this.display] = `${this.display} = ${parseFloat(res)}`;
//     this.display = `${this.display} = ${parseFloat(res)}`;
//     // window.console.log(res)


//     // effects when click equal sign
//     num.target.classList.remove("blur");
//     setTimeout(() => {
//         num.target.classList.add("blur")
//     }, 150)

// } else if (new_num) {
//     this.display += new_num;
// }
//         keyboard: function() {
//             document.addEventListener("keypress", (e) => {
//                 this.padClicked(e.key)
//             })
//         }
//     },

export const deleting = () => window.console.log("its working deletion")