<section class={$$props.class}>
  <h3 class="one">chooooooose your ideation</h3>
  <div class="two">
    <a href="http://"><div></div></a>
    
  
  </div>
  <h5 class="three">design resources for the people</h5>
  <h5 class="four">design resources for the people</h5>
  <h5 class="five">design resources for the people</h5>
</section>

<style lang="scss">
  .section {
    position: relative;
    &__4 {
      overflow: hidden;
      background: center/ cover no-repeat #eee url("../../assets/bgr-2.gif");
      gap: 3rem;
      .one{
        max-width: 10ch;
        text-align: center;
        margin-bottom: -6rem;
        z-index: 99;
      }
      .two{
        display: flex;
        gap: 1rem;
        &>*{
          height: var(--big);
          width: var(--small);
          &:nth-child(1){background: center/ cover no-repeat #eee url("../../assets/1.png");}
          
        }
      }
    }
    h5{
        max-width: 15ch;

    }
    .three{
       

      position: absolute;
      top: 50%;
      left: 10%;
      transform: translatey(-50%);
    }
      .four{

      position: absolute;
      bottom: 10%;
      right: 10%;
    }  .five{
      position: absolute;
      top: 10%;
      right: 10%;
    }
  }
</style>
