<section class={$$props.class}>
  <h3 class="one">choose your ideation</h3>
  <div class="two">
    <a href="http://"><div></div></a>
    <a href="http://"><div></div></a>
    <a href="http://"><div></div></a>
    
  
  </div>
  <h5 class="three">design resources for the people</h5>

</section>

<style lang="scss">
  .section {
    position: relative;
    flex-flow: column;
    &__2 {
      overflow: hidden;
      background: center/ cover no-repeat #eee url("../../assets/bgr-2.gif");
      gap: 3rem;
      .one{
        max-width: 25ch;
        text-align: center;

        z-index: 99;
      }
      .two{
        display: flex;
        gap: 1rem;
        &>*{
          height: var(--small);
          width: var(--medium);
          &:nth-child(1){background: center/ cover no-repeat #eee url("../../assets/1.png");}
          &:nth-child(2){background: center/ cover no-repeat #eee url("../../assets/1.png");}
          &:nth-child(3){background: center/ cover no-repeat #eee url("../../assets/1.png");}
          
        }
      }
    }
    h5{
        max-width: 15ch;

    }
    .three{
       

      position: absolute;
      top: 10%;
      left: 10%;

    }
     
  }
</style>
