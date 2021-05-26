<template>
  <div class="layout">
    <h1>{{ productName }}</h1>
    
    <span>Search: </span> <input type="text" v-model="productSearchQuery" placeholder="product name" />
    <h3>Tổng số lượng: {{ productTotal }}</h3>
    <ul>
        <li v-for="product in productDataListFiltered" :key="product.id">
            {{ product.name }}
        </li>
    </ul>
  </div>
</template>

<script>
import productRepositories from '@/composables/productRepositories'

export default {
  name: 'ProductList',
  props: {
    productName: String
  },
  setup() {
    const { productSearchQuery, productDataListFiltered, productTotal } = productRepositories();

    return {
      productDataListFiltered,
      productSearchQuery,
      productTotal
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
    width: 250px;
    margin: 0 auto;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}
li {
  margin: 0 10px;
  padding: 5px 0;
  border-bottom: 1px solid;
}
ul li:last-child {
    border-bottom: none;
}
h3 {
    text-align: left;
    padding-left: 5px;
}
</style>
