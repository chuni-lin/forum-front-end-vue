<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 22,
    name: 'Bradley King MD',
    tel: '655.492.4760 x73746',
    address: '3972 Murray Plains',
    opening_hours: '08:00',
    description: 'Qui sunt quas sapiente ipsam sed eaque ut rerum eos.',
    image: 'https://loremflickr.com/320/240/restaurant,food/?random=22.290857858649836',
    viewCounts: 0,
    createdAt: '2020-12-15T06:35:43.000Z',
    updatedAt: '2020-12-15T06:35:43.000Z',
    CategoryId: 4,
    Category: {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z'
    },
    Comments: [
      {
        id: 22,
        text: 'Unde quos quia id enim alias.',
        UserId: 2,
        RestaurantId: 22,
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG',
          isAdmin: true,
          image: 'https://i.imgur.com/PhcKzNf.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:42:25.000Z'
        }
      },
      {
        id: 72,
        text: 'Excepturi cupiditate odio.',
        UserId: 2,
        RestaurantId: 22,
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG',
          isAdmin: true,
          image: 'https://i.imgur.com/PhcKzNf.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:42:25.000Z'
        }
      },
      {
        id: 122,
        text: 'Dicta velit impedit eius praesentium assumenda eos officiis nesciunt.',
        UserId: 2,
        RestaurantId: 22,
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG',
          isAdmin: true,
          image: 'https://i.imgur.com/PhcKzNf.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:42:25.000Z'
        }
      }
    ]
  }
}

export default {
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      }
    }
  },
  created () {
    this.fetchRestaurant()
  },
  methods: {
    fetchRestaurant () {
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant
      this.restaurant = {
        id,
        name,
        categoryName: Category.name,
        commentsLength: Comments.length,
        viewCounts
      }
    }
  }
}
</script>
