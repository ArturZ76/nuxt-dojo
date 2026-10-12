<template>
  <div>
    <h2>About</h2>
    <p v-if="data">{{ data }}</p>
    <p>Lorem ipsum dolor sit amet, consect</p>
  </div>
</template>

<script setup>
const { data } = useFetch('/api/ninja?name=mario', {
  method: 'post',
  body: { age: 30 }

})
</script>

<style>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>