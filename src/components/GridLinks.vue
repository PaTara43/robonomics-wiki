<template>

    <nav class="grid-navigation">
        <g-link 
            v-for="item in links" :key="item.to"
            :to="item.to"
        >
            {{$t(item.name)}}
        </g-link>
    </nav>

</template>


<script>

export default {
    props: {
        links: {
            type: Array
        }
    }
}
</script>

<style scoped>

    .grid-navigation {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space);
        margin-bottom: var(--space);

        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    .grid-navigation a {
      transition: 0.2s ease all;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      hyphens: auto;
      padding: var(--space);
      border: 1px solid var(--border-color);
      text-align: center;
      box-shadow: 0.2rem 0.2rem 0 0 var(--link-color);
      border-color: var(--link-color);
      background-color: var(--color-link-background-highlight);
    }

    body[data-theme="dark"]  .grid-navigation a {
        color: var(--color-light);
        box-shadow: 0.2rem 0.2rem 0 0 var(--color-light);
        border-color: var(--color-light);
    }

    .grid-navigation a:hover {
        transform: translateY(-0.2rem);
        box-shadow: 0.2rem 0.2rem 0.8rem var(--link-color);
      }


    body[data-theme="dark"]  .grid-navigation a:hover {
        box-shadow: 0.2rem 0.2rem 0.8rem var(--color-light);
    }

    /* @media screen and (max-width: 800px) {
      .grid-navigation { grid-template-columns: repeat(2, 1fr); }
    } */

    .nav-links .grid-navigation a {
        padding: calc(var(--space) * 1.8);
    }

    @media screen and (max-width: 800px) {
      .grid-navigation { grid-template-columns: 1fr; }
    }

    @media screen and (max-width: 1080px) {

        .grid-navigation {
        margin-bottom: calc(var(--space) * 2);
        }

        .nav-links .grid-navigation a {
            padding: var(--space);
        }
    }

</style>

