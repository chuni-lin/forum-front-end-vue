<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <Spinner v-if="isLoading" />
    <template v-else>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">
              #
            </th>
            <th scope="col">
              Email
            </th>
            <th scope="col">
              Role
            </th>
            <th
              scope="col"
              width="140"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
          >
            <th scope="row">
              {{ user.id }}
            </th>
            <td>{{ user.email }}</td>
            <td>{{ user.isAdmin ? 'Admin' : 'User' }}</td>
            <td>
              <button
                v-if="user.id !== currentUser.id"
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })"
              >
                set as {{ user.isAdmin ? 'User' : 'Admin' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AdminNav from './../components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  components: {
    AdminNav,
    Spinner
  },
  data () {
    return {
      users: [],
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    this.fetchUser()
  },
  methods: {
    async fetchUser () {
      try {
        this.isLoading = true
        const { data } = await adminAPI.users.get()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.users = data.users
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          type: 'error',
          title: '無法取得會員資料，請稍後再試'
        })
      }
    },
    async toggleUserRole ({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.update({ userId, isAdmin: (!isAdmin).toString() })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin
            }
          }
          return user
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法更新會員角色，請稍後再試'
        })
      }
    }
  }
}
</script>
