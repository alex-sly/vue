<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${image}`)" :alt="image" />
    <div class="best__item-title">{{ name }}</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    classItem: {
      type: String,
      require: false,
    },
  },
};
</script>
