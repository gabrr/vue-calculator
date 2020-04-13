<template>
  <nav id="navbar">
      <div class="historyLink">History</div>
      <div class="menu">
          <div class="lign"></div>
          <div class="lign"></div>
      </div>
      <div class="logo">Gabrr.</div>
  </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
#navbar{
    width: 100%;
    max-width: 450px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #fff;
}

.historyLink {
    text-align: left;
    padding: 20px 20%;
    font-size: 90%;
    font-weight: 400;
}

.menu{
    text-align: right;
    padding: 20px 30px;
    position: relative;
}

.logo{
    margin-top: 1vh;
    grid-column: span 2;
    grid-row: 2;
    font-weight: 600;
    font-size: 120%;
}


/* the menu effect */
.lign{
    background-color: #fff;
    position: absolute;
    right: 20%;
}

.lign:nth-child(1) {
    width: 30px;
    height: 2px;
    top: 26px;
}
.lign:nth-child(2) {
    width: 20px;
    height: 2px;
    top: 33px;
}


</style>