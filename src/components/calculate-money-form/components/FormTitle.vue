<template>
  <section class="header">
    <div class="title-wrapper">
      <h1 class="sweet-title">
        <span data-text="Know">Know</span>
        <span data-text="Your">Your</span>
        <span data-text="Money">Money</span>
      </h1>
    </div>
  </section>
</template>
<script setup>

</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@300;700;900&display=swap");

body {
  font-family: "Exo 2", sans-serif;
  background: rgb(63, 161, 251);
  background: linear-gradient(
          142deg,
          rgba(63, 161, 251, 1) 0%,
          rgba(252, 70, 168, 1) 100%
  );
}

.header {
  max-width: 1200px;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-wrapper {
  display: grid;
  align-items: center;
  justify-content: center;
  transform: skew(0, -10deg);
}

.sweet-title {
  order: 2;
  color: #fde9ff;
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 0.75em;
  text-align: center;
  text-shadow: 3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff,
  3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb,
  6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff,
  6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb,
  9px 7px 1px #4af7ff;

  span {
    display: block;
    position: relative;

    &:before {
      content: attr(data-text);
      position: absolute;
      text-shadow: 2px 2px 1px #e94aa1, -1px -1px 1px #c736f9,
      -2px 2px 1px #e94aa1, 1px -1px 1px #f736f9;
      z-index: 1;
    }

    &:nth-child(1) {
      padding-right: 2.25rem;
      padding-bottom: 20px;
    }

    &:nth-child(2) {
      padding-left: 2.25rem;
      padding-bottom: 20px;
    }

    &:nth-child(3) {
      padding-left: 15.25rem;
    }
  }
}

.disclaimer {
  width: 100%;
  height: 2rem;
  text-align: center;
  color: #fff;

  a {
    color: #fff;
  }
}

</style>
