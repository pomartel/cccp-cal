<template>
  <div id="app">
    <header class="hero is-primary has-shadow">
      <div class="container hero-body">
        <div class="media">
          <figure class="media-left is-hidden">
            <p class="image is-80x80">
              <img src="./assets/images/logo-CYCLEPOP.svg" alt="Logo CYCLEPOP">
            </p>
          </figure>
          <div class="media-cotent">
            <h1 class="title">
              CYCLEPOP
            </h1>
            <p class="subtitle">
              Calendrier des événements
            </p>
          </div>
        </div>
      </div>
    </header>

    <section class="section main-content">
      <div class="container is-desktop">
        <router-view/>
      </div>
    </section>

    <footer class="footer section is-primary">
      <div class="container is-desktop">
        © Copyright {{new Date().getFullYear()}} - CYCLEPOP
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.hero {
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.25);
  z-index: 1; // or else the shadow won't display
}
.hero-body {
  padding: 2rem 0;
}
.media {
  align-items: center;
}
</style>
