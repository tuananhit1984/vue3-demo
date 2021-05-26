import { productData } from './../constants/product'
import { ref, onMounted, watch, computed } from 'vue'

export default function productRepositories() {
  const productDataListFiltered = ref([]);
  const productSearchQuery = ref('');
  const productTotal = computed(() => {
      return productDataListFiltered.value.length;
  })

  const filterProductByName = () => {
    if (productSearchQuery.value) {
        productDataListFiltered.value = productData.filter(p => p.name.toLowerCase().includes(productSearchQuery.value));
    } else {
        productDataListFiltered.value = productData;
    }
  }

  onMounted(filterProductByName);
  watch(productSearchQuery, filterProductByName);

  return {
    productSearchQuery,
    productDataListFiltered,
    productTotal,
    filterProductByName
  }
}