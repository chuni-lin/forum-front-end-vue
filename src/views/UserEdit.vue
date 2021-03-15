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
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserEdit',
  data () {
    return {
      user: {
        id: -1,
        name: '',
        image: ''
      }
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
    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      for (const [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
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
