<template>
  <div class="container mt-5 text-center" style="background: url('/src/assets/images/background-pattern.jpg') no-repeat">
    <h2>{{ displayUser }}</h2>
    <router-link class="btn btn-primary mt-3" to="/home"
      >Go to Home</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Welcome",
  mounted() {
    this.isAuthenticated();
  },
  methods: {
    isAuthenticated() {
      const user = this.$store.getters["userStore/isAuthenticated"][0];
      console.log(user)
      if (user == null) {
        this.$router.push("/login");
      }
    },
  },
  computed: {
    displayUser() {
      const user = this.$store.getters["userStore/isAuthenticated"][0];
      if(user == null) return 'Please, login to order groceries!'
      return `Hi ${user.name}! Ready to shop for your favorite groceries?`;
    },
  },
};
</script>
