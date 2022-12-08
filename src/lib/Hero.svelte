<section>
  <div class="one"><h3>welcome to the haus</h3></div>
  <div class="two column">
    <h5>design resources for the people</h5>
    <button>
      <a href="#">go inside</a>
    </button>
  </div>
</section>

<style lang="scss">
  section{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    &>*{
      display: flex;

      
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
      button{
        padding: var(--button-padding);
        
      }
      
    }
 
  }
</style>
