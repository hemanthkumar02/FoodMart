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
                <!-- Email input -->
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example1"
                    class="form-control"
                    v-model="formData.email"
                    placeholder="ab@email.com"
                  />
                </div>

                <!-- Password input -->
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    class="form-control"
                    placeholder="password"
                    v-model="formData.password"
                  />
                </div>

                <!-- 2 column grid layout for inline styling -->
                <div class="row mb-4">
                  <div class="col d-flex justify-content-center">
                    <!-- Checkbox -->
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="form2Example31"
                        checked
                      />
                      <label class="form-check-label" for="form2Example31">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div class="col">
                    <!-- Simple link -->
                    <a href="#!">Forgot password?</a>
                  </div>
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

                <!-- Register buttons -->
                <div class="text-center">
                  <p>Not a member? <a href="/sign-up">Register</a></p>
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
  name: "Login",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (await this.$store.dispatch("userStore/login", this.formData)) {
        this.$router.push("/");
      }
    },
  },
};
</script>
