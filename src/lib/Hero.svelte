<section>
  <div class="one"><h1>welcome to the haus</h1></div>
  <div class="two column">
    <h3>design resources for the people</h3>
    <button>
      <a href="#">go inside</a>
    </button>
  </div>
</section>

<style lang="scss">
  section{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &>*{
      display: flex;
      height:100vh;
      
    }
    .one{
      text-transform: capitalize;
      justify-content: center;
      align-items: center;
      flex-basis: 70%;

    }
    .two{
      align-items: flex-end;
      gap:2rem;
      text-align: end;
      flex-basis: 30%;

      
    }
 
  }
</style>
