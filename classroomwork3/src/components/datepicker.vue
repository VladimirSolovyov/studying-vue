<template>
  <div>
    <input ref="input" :value="value" type="text" class="form-control">
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  watch: {
      value: 'updatePicker'
  },
  mounted() {
    this.initPicker()
  },
  methods: {
      initPicker() {
          const fp = flatpickr(this.$refs.input, {
                dateFormat: 'd.m.Y',
                onChange: (selectedDates, dateStr) => {
                    this.$emit('input', dateStr)
                }
            })
        },
      updatePicker() {
          fp.setDate(this.value)
      }
  }
}
</script>

<style>
</style>
