<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length" class="alert alert-warning">
        Загрузка...
        
    </div>
    <user-list v-else :users="users" />    
  </div>
</template>
<script>
import axios from 'axios'
import UsersList from '@/components/UserList.vue'

export default {
    components: {
        'user-list': UsersList
    },
        data: function () {
            return {
                users: []
            };
        },
        mounted: function () {
            this.loadUsers();
        },
        methods: { 
            loadUsers: function () {
                var self = this;

                axios.get('db.json').then(function (response) {
                    self.users = response.data.users;
                })
            }
        }
       
    }
</script>