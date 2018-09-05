<template>
  <div>
    Редактирование пользователя с ID - {{ id }}

    <div v-if="!user">
      Loader...
    </div>
    <template v-else>
        
      <user-form v-model="user" />

      <button type="button" class="btn btn-primary" @click="save">
        Сохранить - 55 minute 16.08
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
