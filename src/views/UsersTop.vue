<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import UserCard from './../components/UserCard'

const dummyData = {
  users: [
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG',
      isAdmin: true,
      image: 'https://i.imgur.com/PhcKzNf.jpeg',
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2021-02-22T16:42:25.000Z',
      Followers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG',
          isAdmin: true,
          image: 'https://i.imgur.com/PhcKzNf.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:42:25.000Z',
          Followship: {
            followerId: 2,
            followingId: 2,
            createdAt: '2020-12-13T03:37:28.000Z',
            updatedAt: '2020-12-13T03:37:28.000Z'
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
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: '2021-02-22T10:08:02.000Z',
            updatedAt: '2021-02-22T10:08:02.000Z'
          }
        },
        {
          id: 37,
          name: '熊班長',
          email: 'monalisa@example.com',
          password: '$2a$10$cKM74wfFPqDcby2dvTTlt.It4ENCscYRI3Wrxfs5XvWYbQuO0OkBu',
          isAdmin: true,
          image: 'https://i.imgur.com/MdRdcnZ.jpeg',
          createdAt: '2021-02-22T16:43:13.000Z',
          updatedAt: '2021-02-22T16:45:55.000Z',
          Followship: {
            followerId: 37,
            followingId: 2,
            createdAt: '2021-02-22T16:47:01.000Z',
            updatedAt: '2021-02-22T16:47:01.000Z'
          }
        }
      ],
      FollowerCount: 3,
      isFollowed: true
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
      Followers: [
        {
          id: 1,
          name: '蠔嗲油',
          email: 'root@example.com',
          password: '$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm',
          isAdmin: true,
          image: 'https://i.imgur.com/3keAGHT.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:41:47.000Z',
          Followship: {
            followerId: 1,
            followingId: 1,
            createdAt: '2021-01-05T17:22:26.000Z',
            updatedAt: '2021-01-05T17:22:26.000Z'
          }
        },
        {
          id: 37,
          name: '熊班長',
          email: 'monalisa@example.com',
          password: '$2a$10$cKM74wfFPqDcby2dvTTlt.It4ENCscYRI3Wrxfs5XvWYbQuO0OkBu',
          isAdmin: true,
          image: 'https://i.imgur.com/MdRdcnZ.jpeg',
          createdAt: '2021-02-22T16:43:13.000Z',
          updatedAt: '2021-02-22T16:45:55.000Z',
          Followship: {
            followerId: 37,
            followingId: 1,
            createdAt: '2021-02-22T16:46:30.000Z',
            updatedAt: '2021-02-22T16:46:30.000Z'
          }
        }
      ],
      FollowerCount: 2,
      isFollowed: true
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
      Followers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG',
          isAdmin: true,
          image: 'https://i.imgur.com/PhcKzNf.jpeg',
          createdAt: '2020-12-15T06:35:43.000Z',
          updatedAt: '2021-02-22T16:42:25.000Z',
          Followship: {
            followerId: 2,
            followingId: 3,
            createdAt: '2020-12-13T03:37:29.000Z',
            updatedAt: '2020-12-13T03:37:29.000Z'
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: false
    },
    {
      id: 7,
      name: '123',
      email: 'ben7152000@gmail.com',
      password: '$2a$10$gEUc6f3gn62yaOuq89gQLeUr4FbzGkVyMegUmbvPLEMi4Co76LXni',
      isAdmin: false,
      image: null,
      createdAt: '2021-02-12T09:16:05.000Z',
      updatedAt: '2021-02-12T09:16:05.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 17,
      name: 'sa',
      email: '123@gmail.com',
      password: '$2a$10$7b76MIBXCOZwWQ0Idm1Ul.HKChUtn/.IjTAHkNMZRI/t//tvbREca',
      isAdmin: false,
      image: null,
      createdAt: '2021-02-13T07:41:08.000Z',
      updatedAt: '2021-02-13T07:41:08.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 27,
      name: 'root',
      email: 'root',
      password: '$2a$10$0tt4RHOVuM./uXJpobmPa.ypCUSn8sHT7QnsQX73K6IUK1RtqEqTu',
      isAdmin: false,
      image: null,
      createdAt: '2021-02-19T03:51:00.000Z',
      updatedAt: '2021-02-19T03:51:00.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 37,
      name: '熊班長',
      email: 'monalisa@example.com',
      password: '$2a$10$cKM74wfFPqDcby2dvTTlt.It4ENCscYRI3Wrxfs5XvWYbQuO0OkBu',
      isAdmin: true,
      image: 'https://i.imgur.com/MdRdcnZ.jpeg',
      createdAt: '2021-02-22T16:43:13.000Z',
      updatedAt: '2021-02-22T16:45:55.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    }
  ]
}

export default {
  components: {
    NavTabs,
    UserCard
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      const { users } = dummyData
      this.users = users
    }
  }
}
</script>
