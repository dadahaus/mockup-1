<footer>
  <h3 class="one">don't hesitate to contact us</h3>
  <div class="two">
    <div>
      <h4>Choose your ideation</h4>
      <button>go see</button>
    </div>
    <div>
      <h4>Choose your ideation</h4>
      <button>go see</button>
    </div>
    <div>
      <h4>Choose your ideation</h4>
      <button>go see</button>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    min-width: 100vw;
    padding: 4rem;
    gap: 2rem;
    .one {
      text-transform: uppercase;
      flex-basis: 50%;
    }
    .two {
      display: flex;
      flex-flow: column;
      flex-basis: 50%;
      width: 100%;
      gap: 5rem;
      button {
        padding: var(--button-padding);
      }
      & > * {
        display: flex;
        justify-content: space-between;


        &:nth-child(2) {
          flex-direction: row-reverse;
        }
      }
    }
  }
</style>
