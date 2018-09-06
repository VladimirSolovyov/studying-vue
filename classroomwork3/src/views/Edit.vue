<template>
  <div>
    Редактирование пользователя с ID - {{ id }}

    <div v-if="!user">
      Loader...
    </div>
    <template v-else>
        
      <user-form v-model="user" />

      <button type="button" class="btn btn-primary" @click="save">
        Сохранить
      </button>

      <pre> {{ user }}</pre>
    </template>
    
  </div>
</template>

<script>
import axios from '@/axios.js'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'Edit',
  components: {
    UserForm
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return parseInt(this.$route.params.id, 10)
    },

    restUrl() {
      return `/users/${this.id}`
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    redirectToList() {
      this.$router.push('/users')
    },

    save() {
      this.$validator.validateAll()
      if (this.errors.any()) {
        debugger;
        alert('Что-то не заполнено!')
        return
      }

      axios
        .patch(this.restUrl, this.user)
        .then(() => this.redirectToList())
        .catch(error => console.error(error))
    },

    updateUser() {
      console.log('updateUser')
    },

    loadUser() {
      axios
        .get(this.restUrl)
        .then(response => {
          this.user = response.data
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
