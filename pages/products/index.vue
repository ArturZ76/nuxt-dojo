<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>


definePageMeta({
  layout: 'products'
})
//fetch products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [
    {
      name: 'description',
      content: 'Products in Nuxt Dojo'
    }
  ],
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