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

    <div class="form-group">
      <label>URL картинки</label>
      <br>
      <img :src="localUser.picture" class="img-thumbnail">
      <input
        v-model="localUser.picture"
        type="text"
        class="form-control">
      <input ref="avatar" type="file" class="hidden" @change="uploadAvatar">

      <button type="button" class="btn btn-primary" @click="selectNewImage">
        Загрузить новый
      </button>
    </div>

    <div class="form-group">
      <label>Дата регистрации - Закончил на 16.08 минута 36</label>
      <datepicker v-model="localUser.registered" />
    </div>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'UserForm',
  components: {
    Datepicker: () => import('@/components/datepicker.vue')
  },
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
    },
    selectNewImage() {
      this.$refs.avatar.click()
    },

    uploadAvatar() {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.avatar.files[0])
      // Добавляем ключ от IMGUR
      // https://api.imgur.com/oauth2/addclient
      const config = {
        headers: {
          Authorization: 'Client-ID 3bef0b8892d4b04'
        }
      }
      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.localUser.picture = response.data.link
          this.$refs.avatar.value = ''
        })
    }
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
