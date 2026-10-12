<template>
    <div>

        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const uri = 'https://fakestoreapi.com/products/' + id

//fetch
const { data: product } = await useFetch(uri, { key: id })


if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found...', fatal: true })//fatal very important to handle ban link
}

definePageMeta({
    layout: 'products'
})


</script>