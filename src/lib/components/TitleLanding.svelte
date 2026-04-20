<script>
    export let titleText = '',
        white = false,
        left = false,
        green = false
</script>

<style lang="scss">
  .title {
    margin-bottom: 40px;
    position: relative;
    text-transform: uppercase;
    font-size: 30px;
    text-align: center;
    line-height: 1.8;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 5px;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #f60;
    }
  }

  .white {
    color: #fff;
  }

  .left {
    text-align: left;

    &::before {
      left: 50px;
    }
  }

  .green {
    &::before {
      background-color: #30c917;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 22px;
      margin-bottom: 24px;
      line-height: 1.4;

      &::before {
        width: 60px;
        height: 4px;
        top: -20px;
      }
    }

    .left {
      &::before {
        left: 20px;
      }
    }
  }
</style>

<h2 class="title" class:green class:left class:white>{titleText}</h2>
