<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="row no-gutters"
      >
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img
              class="card-img"
              :src="restaurant.image | emptyImage"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import { emptyImageFilter } from './../utils/mixins'

const dummyData = {
  restaurants: [
    {
      id: 26,
      name: 'Carson Collins',
      tel: '471-440-3141',
      address: '1632 Marietta Summit',
      opening_hours: '08:00',
      description: 'aut',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=64.4841358103108',
      viewCounts: 8,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2021-01-10T17:37:30.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG',
          isAdmin: true,
          image: 'https://i.imgur.com/PhcKzNf.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:42:25.000Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 26,
            createdAt: '2020-04-17T04:35:49.000Z',
            updatedAt: '2020-04-17T04:35:49.000Z'
          }
        },
        {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password: '$2a$10$IgMneSD6HZiHt0C6we./cOPyq70YhAWNZEqC4YTtJHK8ejgS1J/3q',
          isAdmin: false,
          image: null,
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2020-12-15T06:35:43.000Z',
          Favorite: {
            UserId: 3,
            RestaurantId: 26,
            createdAt: '2020-07-15T19:27:21.000Z',
            updatedAt: '2020-07-15T19:27:21.000Z'
          }
        },
        {
          id: 1,
          name: '蠔嗲油',
          email: 'root@example.com',
          password: '$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm',
          isAdmin: true,
          image: 'https://i.imgur.com/3keAGHT.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:41:47.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 26,
            createdAt: '2021-02-25T04:39:13.000Z',
            updatedAt: '2021-02-25T04:39:13.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 3
    },
    {
      id: 12,
      name: 'Merl Wolf',
      tel: '1-848-603-6470 x7813',
      address: '0233 Lura Bridge',
      opening_hours: '08:00',
      description: 'Facilis aspernatur sint odit deleniti et.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=70.10281112790923',
      viewCounts: 1,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2021-02-19T06:25:53.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG',
          isAdmin: true,
          image: 'https://i.imgur.com/PhcKzNf.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:42:25.000Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 12,
            createdAt: '2021-01-23T12:31:47.000Z',
            updatedAt: '2021-01-23T12:31:47.000Z'
          }
        },
        {
          id: 1,
          name: '蠔嗲油',
          email: 'root@example.com',
          password: '$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm',
          isAdmin: true,
          image: 'https://i.imgur.com/3keAGHT.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:41:47.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 12,
            createdAt: '2021-02-25T01:57:59.000Z',
            updatedAt: '2021-02-25T01:57:59.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 2
    },
    {
      id: 9,
      name: 'Esteban Conn',
      tel: '(925) 432-9834 x4118',
      address: '2245 Jalon Vista',
      opening_hours: '08:00',
      description: 'Magnam autem sed id molestiae nihil quia.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=9.434835967288935',
      viewCounts: 69,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2021-02-24T11:34:58.000Z',
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 27,
          name: 'root',
          email: 'root',
          password: '$2a$10$0tt4RHOVuM./uXJpobmPa.ypCUSn8sHT7QnsQX73K6IUK1RtqEqTu',
          isAdmin: false,
          image: null,
          createdAt: '2021-02-19T03:51:00.000Z',
          updatedAt: '2021-02-19T03:51:00.000Z',
          Favorite: {
            UserId: 27,
            RestaurantId: 9,
            createdAt: '2021-02-19T03:52:12.000Z',
            updatedAt: '2021-02-19T03:52:12.000Z'
          }
        },
        {
          id: 77,
          name: 'w',
          email: 'w@w.w',
          password: '$2a$10$Pl73ykEJnKnXVcj.P6vKz.Ga/mIHwcK3rbJRYtClBYgHkbBpzL/wK',
          isAdmin: false,
          image: null,
          createdAt: '2021-02-25T05:52:07.000Z',
          updatedAt: '2021-02-25T05:52:07.000Z',
          Favorite: {
            UserId: 77,
            RestaurantId: 9,
            createdAt: '2021-02-25T05:52:32.000Z',
            updatedAt: '2021-02-25T05:52:32.000Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 2
    },
    {
      id: 8,
      name: 'Louisa Cummerata MD',
      tel: '1-734-755-5111 x47387',
      address: '6622 Johnson Wall',
      opening_hours: '08:00',
      description: 'Nostrum magni sit.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=32.944417729082055',
      viewCounts: 19,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2021-02-24T16:08:10.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG',
          isAdmin: true,
          image: 'https://i.imgur.com/PhcKzNf.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:42:25.000Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 8,
            createdAt: '2021-01-23T12:44:12.000Z',
            updatedAt: '2021-01-23T12:44:12.000Z'
          }
        },
        {
          id: 1,
          name: '蠔嗲油',
          email: 'root@example.com',
          password: '$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm',
          isAdmin: true,
          image: 'https://i.imgur.com/3keAGHT.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:41:47.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 8,
            createdAt: '2021-02-25T04:39:23.000Z',
            updatedAt: '2021-02-25T04:39:23.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 2
    },
    {
      id: 3267,
      name: '天竺鼠車車主題餐廳',
      tel: 'puipui',
      address: '卡加布列島',
      opening_hours: '15:00',
      description: 'Pui Pui Molcar (Japanese: PUI PUI モルカー, Hepburn: P',
      image: 'https://i.imgur.com/scgmLqn.jpeg',
      viewCounts: 7,
      createdAt: '2021-02-22T16:27:50.000Z',
      updatedAt: '2021-02-24T16:05:59.000Z',
      CategoryId: 3027,
      FavoritedUsers: [
        {
          id: 37,
          name: '熊班長',
          email: 'monalisa@example.com',
          password: '$2a$10$cKM74wfFPqDcby2dvTTlt.It4ENCscYRI3Wrxfs5XvWYbQuO0OkBu',
          isAdmin: true,
          image: 'https://i.imgur.com/MdRdcnZ.jpeg',
          createdAt: '2021-02-22T16:43:13.000Z',
          updatedAt: '2021-02-22T16:45:55.000Z',
          Favorite: {
            UserId: 37,
            RestaurantId: 3267,
            createdAt: '2021-02-22T16:47:44.000Z',
            updatedAt: '2021-02-22T16:47:44.000Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 3257,
      name: '墨西哥粽',
      tel: '0228825252',
      address: '台北市中山區',
      opening_hours: '11:00',
      description: '統神端火鍋是台灣網路惡搞迷因，常見型態是利用看似正常的標題及連結縮圖，配上會引人想點入的時事議題以網',
      image: 'https://i.imgur.com/vdP5qX6.jpeg',
      viewCounts: 19,
      createdAt: '2021-02-22T16:22:14.000Z',
      updatedAt: '2021-02-24T16:06:39.000Z',
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 37,
          name: '熊班長',
          email: 'monalisa@example.com',
          password: '$2a$10$cKM74wfFPqDcby2dvTTlt.It4ENCscYRI3Wrxfs5XvWYbQuO0OkBu',
          isAdmin: true,
          image: 'https://i.imgur.com/MdRdcnZ.jpeg',
          createdAt: '2021-02-22T16:43:13.000Z',
          updatedAt: '2021-02-22T16:45:55.000Z',
          Favorite: {
            UserId: 37,
            RestaurantId: 3257,
            createdAt: '2021-02-22T16:47:50.000Z',
            updatedAt: '2021-02-22T16:47:50.000Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 3247,
      name: 'L專S賣D',
      tel: '0800666666',
      address: '台北市大安區',
      opening_hours: '04:20',
      description: 'Lv70以上 / 70級前獲得的技能點數需使用完畢 / 已轉職成為火毒巫師or冰雷巫師or僧侶的角色',
      image: 'https://i.imgur.com/wj6dlqF.jpeg',
      viewCounts: 9,
      createdAt: '2021-02-19T17:26:40.000Z',
      updatedAt: '2021-02-23T04:13:21.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 37,
          name: '熊班長',
          email: 'monalisa@example.com',
          password: '$2a$10$cKM74wfFPqDcby2dvTTlt.It4ENCscYRI3Wrxfs5XvWYbQuO0OkBu',
          isAdmin: true,
          image: 'https://i.imgur.com/MdRdcnZ.jpeg',
          createdAt: '2021-02-22T16:43:13.000Z',
          updatedAt: '2021-02-22T16:45:55.000Z',
          Favorite: {
            UserId: 37,
            RestaurantId: 3247,
            createdAt: '2021-02-22T16:46:20.000Z',
            updatedAt: '2021-02-22T16:46:20.000Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 35,
      name: 'Elbert Crooks',
      tel: '(256) 244-1709 x484',
      address: '014 Emilia Islands',
      opening_hours: '08:00',
      description: 'Ipsa commodi enim tempora veritatis delectus autem',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=57.28831374116059',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: '蠔嗲油',
          email: 'root@example.com',
          password: '$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm',
          isAdmin: true,
          image: 'https://i.imgur.com/3keAGHT.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:41:47.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 35,
            createdAt: '2021-02-25T02:42:20.000Z',
            updatedAt: '2021-02-25T02:42:20.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 20,
      name: 'Kaleigh Predovic',
      tel: '681-366-1294 x013',
      address: '351 Bonnie Underpass',
      opening_hours: '08:00',
      description: 'omnis',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=31.978313952200253',
      viewCounts: 4,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2021-02-18T13:59:55.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: '蠔嗲油',
          email: 'root@example.com',
          password: '$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm',
          isAdmin: true,
          image: 'https://i.imgur.com/3keAGHT.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:41:47.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 20,
            createdAt: '2021-01-24T06:09:04.000Z',
            updatedAt: '2021-01-24T06:09:04.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 18,
      name: 'Alverta Kiehn',
      tel: '(566) 311-3714',
      address: '500 Lind Pass',
      opening_hours: '08:00',
      description: 'Labore unde itaque sequi amet similique commodi.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=2.2037785436574087',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: '蠔嗲油',
          email: 'root@example.com',
          password: '$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm',
          isAdmin: true,
          image: 'https://i.imgur.com/3keAGHT.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:41:47.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 18,
            createdAt: '2021-02-25T02:20:00.000Z',
            updatedAt: '2021-02-25T02:20:00.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    }
  ]
}

export default {
  components: {
    NavTabs
  },
  mixins: [emptyImageFilter],
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteFavorite (restaurant) {
      restaurant.isFavorited = false
    },
    addFavorite (restaurant) {
      restaurant.isFavorited = true
    }
  }
}
</script>
