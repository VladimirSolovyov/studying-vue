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
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updatePicker'
  },
  mounted() {
    this.initPicker()
  },
  beforeDestroy() {
    this.fp.destroy()
  },
  methods: {
    initPicker() {
      this.fp = flatpickr(this.$refs.input, {
        dateFormat: 'd.m.Y',
        onChange: (selectedDates, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },

    updatePicker() {
      if (this.fp) this.fp.setDate(this.value)
    }
  }
}
</script>

<style>
</style>
