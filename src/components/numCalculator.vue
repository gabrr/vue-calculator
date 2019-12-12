<template>
  <div id="gabrr-calculator">
      <div class="result">
          {{result}}
      </div>
      <div id="numbers-pad">
         <ul>
             <li class="num-pad" @click="result + 1" value="1">1</li>
             <li class="num-pad" value="2">2</li>
             <li class="num-pad" value="3">3</li>
             <li class="num-pad" value="4">4</li>
             <li class="num-pad" value="5">5</li>
             <li class="num-pad" value="6">6</li>
             <li class="num-pad" value="7">7</li>
             <li class="num-pad" value="8">8</li>
             <li class="num-pad" value="9">9</li>
             <li class="num-pad" value="0">0</li>
             <li class="num-pad" value="000">000</li>
             <li class="num-pad" style="background-color: rgba(255, 0, 0, 0.65)" value="erase">C</li>
         </ul>
      </div>
      <div id="operations">
          <ul>
              <li>+</li>
              <li>-</li>
              <li>X</li>
              <li>%</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    el: "#gabrr-calculator",
    name: "numCalculator",
    data() {
        return {
            line: 0,
            result: 0
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
        width: 95%;
        margin: auto;
        text-align: center;
    }

    #numbers-pad ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2px;
    }

    .num-pad{
        background-color: rgba(39, 39, 39, 0.65);
        padding: 20px 0;
    }

    #operations ul{
        display: flex;
        margin: auto;
        place-content: center;
        margin: 10px 0;
    }
    #operations li{
        padding: 20px 10%;
    }
    .result{
        margin-bottom: 20px;
    }

</style>