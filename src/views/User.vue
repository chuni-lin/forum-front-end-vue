<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <!-- user profile -->
        <UserProfileCard
          :user="user"
          :is-current-user="currentUser.id === user.id"
          :initial-is-followed="isFollowed"
        />
        <div class="row">
          <div class="col-md-4">
            <!-- user followings card -->
            <UserFollowingsCard :followings="followings" />
            <br>
            <!-- user followers card -->
            <UserFollowersCard :followers="followers" />
          </div>
          <div class="col-md-8">
            <!-- user comments card -->
            <UserCommentsCard :comments="comments" />
            <br>
            <!-- user favorite restaurant card -->
            <UserFavoritedRestaurantsCard :favorited-restaurants="favoritedRestaurants" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue'
import UserFollowingsCard from '../components/UserFollowingsCard.vue'
import UserFollowersCard from '../components/UserFollowersCard.vue'
import UserCommentsCard from '../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from '../components/UserFavoritedRestaurantsCard.vue'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
    return {
      user: {
        id: -1,
        name: '',
        email: '',
        image: '',
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followersLength: 0,
        followingsLength: 0
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser (userId) {
      try {
        const { data } = await usersAPI.get({ userId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { profile, isFollowed } = data
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants
        } = profile
        const commentSet = new Set()
        this.comments = Comments.filter(
          comment =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        )
        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length
        }
        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.favoritedRestaurants = FavoritedRestaurants
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>
