<template>
  <section class="py-5">
    <div class="container-fluid">
      <div
        class="bg-secondary py-5 my-5 rounded-5"
        :style="{
          backgroundImage: `url(${contactData.image})`,
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div class="container my-5">
          <div class="row">
            <div class="col-md-6 p-5">
              <div class="section-header">
                <h2
                  class="section-title display-4"
                  v-html="contactData.title"
                ></h2>
              </div>
              <p>
                {{ contactData.content }}
              </p>
            </div>
            <div class="col-md-6 p-5">
              <form @submit.prevent="submitFormdata">
                <template
                  v-for="formField in contactData.formFields"
                  :key="formField.id"
                >
                  <div class="mb-3" v-if="formField.type !== 'checkbox'">
                    <label :for="formField.name" class="form-label">
                      {{ formField.label }}
                    </label>
                    <TextInput
                      v-model="formData[formField.name]"
                      :inputType="formField.type"
                      :cssClass="formField.class"
                      :id="formField.name"
                      :name="formField.name"
                      :inputPlaceholder="formField.placeHolder"
                    />
                  </div>
                  <div class="form-check form-check-inline mb-3" v-else>
                    <label class="form-check-label" :for="formField.name">
                      <TextInput
                        v-model="formData[formField.name]"
                        :inputType="formField.type"
                        :cssClass="formField.class"
                        :id="formField.name"
                        :name="formField.name"
                        :inputPlaceholder="formField.placeHolder"
                      />
                      {{ formField.label }}
                    </label>
                  </div>
                </template>
                <div class="d-grid gap-2">
                  <Button
                    :buttonType="contactData.buttonType.type"
                    :buttonClass="contactData.buttonType.class"
                    :buttonText="contactData.buttonType.text"
                  />
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
import Button from "../common/Button.vue";
import TextInput from "../common/TextInput.vue";

export default {
  name: "ContactUs",
  components: {
    TextInput,
    Button,
  },
  data() {
    return {
      formData: {
        subscribe: false
      },
    };
  },
  mounted() {
    this.fetchContactData();
  },
  methods: {
    fetchContactData() {
      this.$store.dispatch("contactStore/fetchContactItem");
    },

    submitFormdata() {
        console.log('form data: ', this.formData)
        if(this.$store.dispatch('contactStore/addUserData', this.formData)){
            window.location.reload();
        }
    }
  },
  computed: {
    contactData() {
      console.log(this.$store.state.contactStore.contactData);
      return this.$store.state.contactStore.contactData;
    },
  },
};
</script>
