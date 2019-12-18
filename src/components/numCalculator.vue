<template>
  <div id="gabrr-calculator">
      <div class="result">
          {{display}}
      </div>
      <div id="numbers-pad">
         <ul>
            <li class="num-pad" @click="padClicked" value="ac">ac</li>
            <li class="num-pad" @click="padClicked" value="delete">:-(</li>
            <li class="num-pad" @click="padClicked" value="%">%</li>
            <li v-bind:key="num" v-for="num in one" class="num-pad" v-bind:value="num" @click="padClicked">{{num}}</li>
            <li class="num-pad" @click="padClicked" value="0">0</li>
            <li class="num-pad" @click="padClicked" value="000">000</li>
            <li class="num-pad" @click="padClicked" value=".">.</li>
         </ul>
      </div>
      <div id="operators">
          <ul>
            <li class="num-pad" @click="padClicked" value="÷">÷</li>
            <li class="num-pad" @click="padClicked" value="*">*</li>
            <li class="num-pad" @click="padClicked" value="-">-</li>
            <li class="num-pad" @click="padClicked" value="+">+</li>
            <li class="num-pad get-result blur" @click="padClicked" value="=">=</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "numCalculator",
    data() {
        return {
            display: 0,
            one: [3, 2, 1, 6, 5, 4, 9, 8, 7].reverse()
        }
    },
    methods: {
        removing: function(string) {
            return string.slice(0, -1);
        },
        percentage: function(num1) {
            return num1 / 100;
        },
        adding: function(num1, num2) {
            return num1 + num2;
        },
        minus: function(num1, num2) {
            return num1 - num2;
        },
        dividing: function(num1, num2) {
            return num1 / num2;
        },
        times: function(num1, num2) {
            return num1 * num2;
        },
        padClicked: function(num) {
            if(this.display === 0) {
                this.display = "";
            } 
            if(num.target.innerText === "ac") {
                this.display = 0
            }
            else if(parseInt(num.target.value)){
                this.display += num.target.innerText;
            } 
            else if(num.target.innerText === ":-(") {
                if(this.display.length <= 1) {
                    this.display = 0;
                } else {
                    this.display = this.removing(this.display);    
                }
            }
            else if(num.target.innerText === "=") {
                let numbersGroup = [[]];
                let operator = [];
                let index = 0;

                for(let i = 0; i < this.display.length; i++) {
                    if(/[0-9]/.test(this.display[i]) || this.display[i] === ".") {
                        numbersGroup[index] += this.display[i]
                    } else {
                        operator.push(this.display[i])
                        index += 1
                        numbersGroup[index] = []
                    }
                }

 
                const res = numbersGroup.reduce((prev, curr) => {
                    for(let sign of operator) {
                        if(sign === "+") {
                            return this.adding(parseFloat(prev), parseFloat(curr))
                        }
                        if(sign === "-") {
                            return this.minus(parseFloat(prev), parseFloat(curr))
                        }
                        if(sign === "÷") {
                            return this.dividing(parseFloat(prev), parseFloat(curr))
                        }
                        if(sign === "*") {
                            return this.times(parseFloat(prev), parseFloat(curr))
                        }
                        if(sign === "%") {
                            return this.percentage(parseFloat(prev))
                        }
                    }
                })
                

                window.localStorage[this.display] = `${this.display} = ${parseFloat(res)}`;
                this.display = `${this.display} = ${parseFloat(res)}`;
                // window.console.log(res)


                // effects when click equal sign
                num.target.classList.remove("blur");
                setTimeout(() => {
                    num.target.classList.add("blur")
                }, 150)

            }
            else if(num.target.innerText) {
                this.display += num.target.innerText;
            } 
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    #gabrr-calculator{
        max-width: 450px;
        width: 90%;
        margin: 9vh auto;
        text-align: center;
    }

    .result{
        margin-bottom: 15%;
    }

    #numbers-pad ul{
        width: 75%;
        float: left;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2px;
    }

    .num-pad{
        padding: 20px 20px;
    }

    #operators{
        float: right;
        width: 25%;
    }
    #operators li{
        margin-bottom: 2px;
        font-size: 122%;
        padding: 17.5px 20px;
    }
    .get-result{
        position: relative;
    }
    .get-result::before{
        content: "";
        z-index: -1;
        width: 50px;
        height: 80%;
        position: absolute;
        transition: box-shadow 200ms ease-in-out;
        background-image: linear-gradient(#D32121, #CB522C);
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .get-result.blur::before{
        box-shadow: 0 0 42px -1px #E26017;
    }


</style>

