<template>
  <input
    :class="cssClass"
    :type="inputType"
    :placeholder="inputPlaceholder"
    :aria-label="inputPlaceholder"
    :name="inputName"
    :id="inputName"
    :value="inputType === 'checkbox' ? undefined : modelValue"
    :checked="inputType === 'checkbox' ? modelValue : undefined"
    @input="
      $emit(
        'update:modelValue',
        inputType === 'checkbox' ? $event.target.checked : $event.target.value
      )
    "
  />
</template>

<script>
export default {
  name: "TextInput",
  props: [
    "inputType",
    "inputPlaceholder",
    "cssClass",
    "inputName",
    "inputValue",
    "modelValue",
  ],
};
</script>

<style scoped></style>
