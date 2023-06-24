<script setup>
import "~/assets/css/not-found.css";
</script>

<template>
  <div class="cover">
    {{ useError() }}
    <h1>Page Not Found <small>Error 404</small></h1>
    <p class="lead">Sorry, an error has occured, Requested page not found.</p>
  </div>
</template>
