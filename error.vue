<script setup>
const { statusCode, message } = useError().value;
</script>

<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
    <div>
      <h1>Error {{ statusCode }}</h1>
      <h5 class="text-body">Sorry, an error has occured. {{ message }}</h5>
    </div>
  </div>
</template>
