<template>
  <div  v-for="item in items" :key="item.id" class="col-md-2 col-sm-6">
    <div class="footer-menu">
      <h5 class="widget-title">{{ item.title }}</h5>
      <ul class="menu-list list-unstyled">
        <li
          class="menu-item"
          v-for="navItem in item.navItems"
          :key="navItem.id"
        >
          <router-link :to="navItem.link" class="nav-link">{{
            navItem.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  props: ["items"],
  mounted() {
    console.log('c',this.items)
  }
};
</script>
