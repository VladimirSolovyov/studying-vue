<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input v-model="localUser.firstName" type="text" class="form-control">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input v-model="localUser.lastName" type="text" class="form-control">
    </div>

    <div class="form-group">
      <label>О нас</label>
      <textarea v-model="localUser.about" type="text" class="form-control"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user',
    event: 'megaevent'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: {}
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  mounted() {
    this.localUser = this.user
  },
  methods: {
    updateUser() {
      this.$emit('megaevent', Object.assign({}, this.localUser))
    }
  }
}
</script>

<style scoped>
</style>
