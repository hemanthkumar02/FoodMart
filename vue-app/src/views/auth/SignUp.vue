<template>
  <section>
    <div class="container-fluid">
      <div
        class="bg-secondary py-5 my-5 rounded-5"
        style="
          background: url(/src/assets/images/bg-leaves-img-pattern.png)
            no-repeat;
        "
      >
        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
              <form @submit.prevent="handleSubmit">
                <!-- Name input -->
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    name="name"
                    v-model="formData.name"
                    placeholder="Name"
                  />
                </div>

                <!-- Email input -->
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example1"
                    class="form-control"
                    name="email"
                    v-model="formData.email"
                    placeholder="abc@email.com"
                  />
                </div>

                <!-- Password input -->
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    class="form-control"
                    placeholder="password"
                    name="password"
                    v-model="formData.password"
                  />
                </div>
                <!-- Submit button -->
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  class="btn btn-primary btn-block mb-4"
                >
                  Sign in
                </button>

                <div class="text-center">
                  <p>If already registered! please login <a href="/login">Login</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      const user = this.$store.getters['userStore/findUserEmail'](this.formData.email);
      if (!user) {
        if(this.$store.dispatch("userStore/signUp", this.formData)) {
            this.$router.push('/login')
        }
      } else {
        console.log('User already present')
      }
    },
  },
};
</script>
