<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="loading" class="alert alert-warning">
      Загрузка...        
    </div>
    <div v-if="!users.length">
      Нет пользователей
    </div>
    <user-list v-else :users="users" />    

    <button type="button" class="btn btn-primary" @click="loadUsers">
      Обновить
    </button>

  </div>
</template>
<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  components: {
    UserList
  },
  data: () => ({
    users: [],
    loading: true
  }),

  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      this.loading = true

      axios.get('http://localhost:3000/users').then(response => {
        this.users = response.data
        this.loading = false
      })
      //.catch(error => console.log(error))
    }
  }
}
</script>
