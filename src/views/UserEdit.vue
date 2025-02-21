<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >

        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isProcessing"
      >
        {{ isProcessing ? '資料更新中...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UserEdit',
  data () {
    return {
      id: 0,
      image: '',
      name: '',
      email: '',
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser (user) {
      this.setUser()
    }
  },
  created () {
    const { id } = this.$route.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUser()
  },
  methods: {
    setUser () {
      this.id = this.currentUser.id
      this.image = this.currentUser.image
      this.name = this.currentUser.name
      this.email = this.currentUser.email
    },
    async handleSubmit (e) {
      try {
        if (!this.name) {
          Toast.fire({
            type: 'warning',
            title: '您尚未填寫姓名'
          })
          return
        }
        const form = e.target
        const formData = new FormData(form)
        this.isProcessing = true
        const { data } = await usersAPI.update({
          userId: this.id,
          formData
        })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'user', params: { id: this.id } })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          type: 'error',
          title: '無法更新使用者資料，請稍後再試'
        })
      }
    },
    handleFileChange (e) {
      const { files } = e.target
      if (files.length === 0) {
        this.user.image = ''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.image = imageURL
      }
    }
  }
}
</script>
