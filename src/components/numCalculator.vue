<template>
  <div id="gabrr-calculator">
      <div class="result">
          {{display}}
      </div>
      <div id="numbers-pad">
         <ul>
            <li class="num-pad" value="ac">ac</li>
            <li class="num-pad" value="delete">:-(</li>
            <li class="num-pad" value="%">%</li>
            <li v-bind:key="num" v-for="num in one" class="num-pad" v-bind:value="num">{{num}}</li>
            <li class="num-pad" value="0">0</li>
            <li class="num-pad" value="000">000</li>
            <li class="num-pad" value=".">.</li>
         </ul>
      </div>
      <div id="operators">
          <ul>
            <li class="num-pad" value="÷">÷</li>
            <li class="num-pad" value="*">*</li>
            <li class="num-pad" value="-">-</li>
            <li class="num-pad" value="+">+</li>
            <li class="num-pad get-result blur" value="=">=</li>
          </ul>
      </div>
  </div>
</template>

<script>
import funcs from "../functions/"

export default {
    name: "numCalculator",
    data() {
        return {
            display: 0,
            one: [3, 2, 1, 6, 5, 4, 9, 8, 7].reverse()
        }
    },
    mounted() {
        funcs.typing()
    },
    methods: {
        updating: function() {
            this.display += funcs.typing()
        }
    },
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    #gabrr-calculator{
        max-width: 450px;
        width: 90%;
        margin: 8vh auto;
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
        cursor: pointer;
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


