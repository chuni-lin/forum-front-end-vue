<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link
            :to="{name: 'admin-restaurant-edit', params: {id: restaurant.id}}"
            class="btn btn-link"
          >
            Edit
          </router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
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
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
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
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 16,
      name: 'Syble Abbott',
      tel: '017.576.7286',
      address: '7407 Schuppe Wall',
      opening_hours: '08:00',
      description: 'Et temporibus doloribus qui est tempora est. Et consectetur assumenda quia minima suscipit. Sint vero consequatur cum ullam suscipit numquam. Harum et consectetur. Ut dolorem quam.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=24.87564642221516',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 17,
      name: 'Miss Stephen Sawayn',
      tel: '1-935-583-1943 x8155',
      address: '3077 Darrion Wells',
      opening_hours: '08:00',
      description: 'officiis voluptatem placeat',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=12.52831928971565',
      viewCounts: 1,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2021-01-10T17:06:19.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 18,
      name: 'Alverta Kiehn',
      tel: '(566) 311-3714',
      address: '500 Lind Pass',
      opening_hours: '08:00',
      description: 'Labore unde itaque sequi amet similique commodi.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=2.2037785436574087',
      viewCounts: 2,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2021-02-25T18:59:02.000Z',
      CategoryId: 1,
      Category: null
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
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 21,
      name: 'Murphy Luettgen',
      tel: '009.091.3706',
      address: '63796 Mohr Union',
      opening_hours: '08:00',
      description: 'Sed commodi et vitae ratione. Minus qui et eligendi magnam et itaque voluptate. Nisi nisi ea nemo et. Aut id quod sint magnam similique et.\n \rQuas beatae libero rerum atque mollitia quis ut. Et expedita omnis qui eum et ut eos. Sed nihil quam iste.\n \rAdipisci reprehenderit deserunt dolore maxime. Consequatur et at delectus voluptates nesciunt atque facere. Et et minima deleniti quasi quo molestiae. Et possimus veritatis sint debitis.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=76.51998236538115',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 2,
      Category: null
    },
    {
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
      CategoryId: 2,
      Category: null
    },
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
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 28,
      name: 'Darrion Heaney',
      tel: '321.110.3263 x381',
      address: '02721 Sarai Estates',
      opening_hours: '08:00',
      description: 'Omnis nam qui a quam similique quaerat quaerat et rem.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=65.6301461653418',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 2,
      Category: null
    },
    {
      id: 29,
      name: 'Heidi Hills',
      tel: '990.448.8313 x28638',
      address: '754 Myah Spurs',
      opening_hours: '08:00',
      description: 'Atque quis autem et quod ea maiores.\nVoluptatem similique sit aliquid omnis rem et.\nAut aperiam est quod quibusdam qui.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=9.31146126664737',
      viewCounts: 2,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2021-02-21T17:33:44.000Z',
      CategoryId: 1,
      Category: null
    },
    {
      id: 30,
      name: 'Adella Beier',
      tel: '1-783-490-1787 x9508',
      address: '601 Sarina Station',
      opening_hours: '08:00',
      description: 'Sed harum soluta illo eum commodi numquam. Tempore in tempore eum sunt aperiam cum optio. Debitis eos voluptatem vitae omnis tenetur voluptatem. Praesentium molestias sed aspernatur quo quis et dolore aut accusamus. Necessitatibus cumque blanditiis occaecati similique ex fugiat dolores distinctio.\n \rRem dolorem voluptatem dolor odio officia. Unde totam sed laborum cum. Voluptates et nihil sit ab. Voluptatem dolores nam et velit corporis rerum non reiciendis. Rerum accusamus blanditiis sequi aut asperiores quas quo.\n \rAutem omnis totam ut. Sit sed doloremque impedit quos quia quo illo perferendis. Atque maiores dolor. Debitis officiis est et aut quisquam aut debitis. Eligendi iure ut. Qui quaerat aspernatur corporis saepe omnis repudiandae repudiandae.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=48.463502950499326',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 1,
      Category: null
    },
    {
      id: 31,
      name: 'Elroy Fay',
      tel: '702.175.7764 x4946',
      address: '98347 Reginald Shoal',
      opening_hours: '08:00',
      description: 'quidem',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=39.96407087921388',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 32,
      name: 'Ismael Davis',
      tel: '(910) 474-5755',
      address: '85565 Devon Vista',
      opening_hours: '08:00',
      description: 'Rerum ea eum eaque eum sit sint exercitationem. Quia quas velit soluta dolore eius rerum consequatur.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=42.23235299994717',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 1,
      Category: null
    },
    {
      id: 33,
      name: 'Darrell Heathcote',
      tel: '(082) 347-8052 x78579',
      address: '468 Brooks Shoal',
      opening_hours: '08:00',
      description: 'voluptas voluptate laboriosam',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=24.94089318572208',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 2,
      Category: null
    },
    {
      id: 34,
      name: 'Desiree Turner',
      tel: '(136) 698-7228 x8145',
      address: '52609 Witting Key',
      opening_hours: '08:00',
      description: 'ab',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=64.88630742520563',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 1,
      Category: null
    },
    {
      id: 35,
      name: 'Elbert Crooks',
      tel: '(256) 244-1709 x484',
      address: '014 Emilia Islands',
      opening_hours: '08:00',
      description: 'Ipsa commodi enim tempora veritatis delectus autem ipsam quo qui.\nMinima quis aut non aspernatur.\nSoluta ducimus ipsa dolores ipsam veritatis sit.\nLaboriosam dolore non reprehenderit quibusdam facilis minima ut.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=57.28831374116059',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 2,
      Category: null
    },
    {
      id: 36,
      name: 'Abel Rogahn IV',
      tel: '933-901-1731 x269',
      address: '38490 Hickle Fork',
      opening_hours: '08:00',
      description: 'dolor',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=44.715555525014935',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 38,
      name: 'Hope Haag',
      tel: '660.610.3903',
      address: '17593 Lea Forge',
      opening_hours: '08:00',
      description: 'Et numquam accusamus accusantium aut deleniti.\nVoluptatem omnis ut hic non tenetur dolor.\nSuscipit nostrum architecto et.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=92.35509178326073',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 2,
      Category: null
    },
    {
      id: 39,
      name: 'Filiberto Armstrong',
      tel: '(136) 189-7401 x6258',
      address: '1977 Rosie Freeway',
      opening_hours: '08:00',
      description: 'quibusdam numquam et',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=44.67470243442469',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 40,
      name: 'Weldon Parker',
      tel: '902-698-6168 x9734',
      address: '3979 Ryan Curve',
      opening_hours: '08:00',
      description: 'Distinctio ut mollitia nostrum. Consequatur dolores voluptatem amet qui corporis tenetur earum. Omnis repellendus enim.\n \rNeque optio quisquam autem consequatur velit porro. Aliquam iure magni ut earum. Ut recusandae non repudiandae quidem doloribus. Officiis quia suscipit nisi animi autem.\n \rAspernatur molestiae et. Et eum consequuntur. At rerum rerum quaerat culpa dolor. Vel omnis at velit repudiandae. Officiis perspiciatis qui voluptas quis.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=25.659382269167264',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 2,
      Category: null
    },
    {
      id: 41,
      name: 'Viola Dickinson',
      tel: '(981) 787-9710 x4515',
      address: '752 Koch River',
      opening_hours: '08:00',
      description: 'ea quidem occaecati',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=61.95476669228548',
      viewCounts: 0,
      createdAt: '2020-12-15T06:35:43.000Z',
      updatedAt: '2020-12-15T06:35:43.000Z',
      CategoryId: 2,
      Category: null
    },
    {
      id: 3247,
      name: 'L專S賣D',
      tel: '0800666666',
      address: '台北市大安區',
      opening_hours: '04:20',
      description: 'Lv70以上 / 70級前獲得的技能點數需使用完畢 / 已轉職成為火毒巫師or冰雷巫師or僧侶的角色\r\n1.艾納斯島 / 冰原雪域 / 長老公館 / 找NPC三轉教官對話\r\n2.返回維多利亞島 / 魔法森林 / 圖書館 / 找NPC漢斯對話 , 接受任務得知必須打倒漢斯分身\r\n3.分身在:次元裂縫 巫婆森林II，水晶道路往前直進入異次元世界，發現漢斯分身，限時20分鐘內打倒取得黑符，點選光明水晶回魔法森林，給予漢斯"黑符"，可獲得"力量項鏈"\r\n4.取得力量項鏈，回冰原雪域找法師長老對話，他會要求你接受智慧的考驗\r\n5.帶著黑暗水晶成品到 尖銳的絕壁II右上方 / 雪原聖地最下方 / 找NPC神聖之石。\r\n　點選神聖之石，回答五個問題，全答對可得到"智慧項鍊"，並交回給法師長老即可轉職。\r\n6.完成轉職後獲得一點技能點數，其後每次升級各三點技能點數\r\n■回答錯誤，被黑聖石退出問答，若要再次進行需再交一顆黑暗水晶成品。\r\n■試煉場內沒有商店，進入前請先做好萬全準備。\r\n■LV70~LV120技能點數共151點。',
      image: 'https://i.imgur.com/wj6dlqF.jpeg',
      viewCounts: 9,
      createdAt: '2021-02-19T17:26:40.000Z',
      updatedAt: '2021-02-23T04:13:21.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 3257,
      name: '墨西哥粽',
      tel: '0228825252',
      address: '台北市中山區',
      opening_hours: '11:00',
      description: '統神端火鍋是台灣網路惡搞迷因，常見型態是利用看似正常的標題及連結縮圖，配上會引人想點入的時事議題以網路釣魚[註 1]，連結實際被導向至暱稱為統神端火鍋的影片，或其他不相干的影片。迷因內容是於2020年發布在YouTube的影片，內容為一名男廚房人員端著一個大鍋並不慎滑倒在地，因其體態與背影神似台灣實況主統神，使影片被命名為〈統神 面臨財務危機 被迫兼差打工 辛酸畫面流出〉[註 2][註 3]。最初僅有統神粉絲在統神實況時誘導統神觀看端火鍋影片，到了2021年2月間統神端火鍋被廣泛運用為網路釣魚[註 4]。除「統神端火鍋」外，「冰冰姊泡湯」即台灣藝人白冰冰在日本泡溫泉所拍攝的實況影片，亦是同一時期釣魚影片的大宗，此外這行為因廣泛流傳，造成多數人對其產生反感，也致使許多人在短時間內不願意點擊他人給予的資訊連結。',
      image: 'https://i.imgur.com/vdP5qX6.jpeg',
      viewCounts: 19,
      createdAt: '2021-02-22T16:22:14.000Z',
      updatedAt: '2021-02-24T16:06:39.000Z',
      CategoryId: 4,
      Category: null
    },
    {
      id: 3267,
      name: '天竺鼠車車主題餐廳',
      tel: 'puipui',
      address: '卡加布列島',
      opening_hours: '15:00',
      description: "Pui Pui Molcar (Japanese: PUI PUI モルカー, Hepburn: Pui Pui Morukā, \"Pui Pui Cavy-Car\") is a Japanese Stop-Motion short anime series produced by Shin-Ei Animation[1] and Japan Green Hearts in cooperation with Bandai Namco Entertainment. The series is directed and written by Tomoki Misato, with Misato and the staff in Japan Green Hearts designing the characters and models and Shota Kowatsu composing the music. It began airing in Japan on TV Tokyo through its Kinder TV Children's Variety Program on January 5, 2021.[2] The series' title is a play on the words Marmot (a name associated with Guinea pigs) and Car, which reflects the main characters.\r\n\r\nUpon its release, it was received positively by fans and critics through its simple storyline in each episode.",
      image: 'https://i.imgur.com/scgmLqn.jpeg',
      viewCounts: 7,
      createdAt: '2021-02-22T16:27:50.000Z',
      updatedAt: '2021-02-24T16:05:59.000Z',
      CategoryId: 3027,
      Category: {
        id: 3027,
        name: '天竺鼠料理',
        createdAt: '2021-02-22T16:25:42.000Z',
        updatedAt: '2021-02-22T16:25:42.000Z'
      }
    },
    {
      id: 3277,
      name: '渋谷カオマンガイ',
      tel: '07044333908',
      address: 'guhlkl',
      opening_hours: '03:42',
      description: 'hkj;l;ll;;ojououo',
      image: 'https://i.imgur.com/xhYU03C.jpeg',
      viewCounts: 3,
      createdAt: '2021-02-24T07:42:14.000Z',
      updatedAt: '2021-02-24T16:07:44.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2020-12-15T06:35:43.000Z'
      }
    },
    {
      id: 3297,
      name: '時代遅れの洋食屋 おきな堂',
      tel: '567800',
      address: 'DIKJJOUYF',
      opening_hours: '16:12',
      description: 'FTGUOJOKKK',
      image: 'https://i.imgur.com/OEr7USM.jpeg',
      viewCounts: 0,
      createdAt: '2021-02-24T08:09:51.000Z',
      updatedAt: '2021-02-24T08:09:51.000Z',
      CategoryId: 3022,
      Category: {
        id: 3022,
        name: '法式料理',
        createdAt: '2021-01-10T17:54:10.000Z',
        updatedAt: '2021-01-10T17:54:10.000Z'
      }
    },
    {
      id: 3367,
      name: '誠記越南麵食館',
      tel: '245678999',
      address: '106台北市大安區永康街6巷1號',
      opening_hours: '17:46',
      description: '湯牛肉清燉河粉、炸春捲、乾拌牛肉意麵、河粉，咖哩牛肉河粉都好吃',
      image: 'https://i.imgur.com/Lp3gwkm.jpg',
      viewCounts: 0,
      createdAt: '2021-02-24T09:45:51.000Z',
      updatedAt: '2021-02-24T09:45:51.000Z',
      CategoryId: 3022,
      Category: {
        id: 3022,
        name: '法式料理',
        createdAt: '2021-01-10T17:54:10.000Z',
        updatedAt: '2021-01-10T17:54:10.000Z'
      }
    },
    {
      id: 3407,
      name: '天竺鼠車車',
      tel: '123456',
      address: '日本來的',
      opening_hours: '12:00',
      description: 'pui pui',
      image: 'https://i.imgur.com/1uLkta2.jpeg',
      viewCounts: 2,
      createdAt: '2021-02-25T17:01:35.000Z',
      updatedAt: '2021-02-25T18:55:13.000Z',
      CategoryId: 3027,
      Category: {
        id: 3027,
        name: '天竺鼠料理',
        createdAt: '2021-02-22T16:25:42.000Z',
        updatedAt: '2021-02-22T16:25:42.000Z'
      }
    },
    {
      id: 3417,
      name: '小噗噗餐館',
      tel: '0800puipuipui',
      address: '一號鼠籠',
      opening_hours: '07:30',
      description: 'puipui',
      image: null,
      viewCounts: 0,
      createdAt: '2021-02-25T17:05:37.000Z',
      updatedAt: '2021-02-25T17:05:37.000Z',
      CategoryId: 3027,
      Category: {
        id: 3027,
        name: '天竺鼠料理',
        createdAt: '2021-02-22T16:25:42.000Z',
        updatedAt: '2021-02-22T16:25:42.000Z'
      }
    },
    {
      id: 3427,
      name: '賣噹噹',
      tel: '12345',
      address: '台中市東區',
      opening_hours: '01:11',
      description: '麥當勞得來速外送～',
      image: null,
      viewCounts: 1,
      createdAt: '2021-02-25T17:12:19.000Z',
      updatedAt: '2021-02-25T18:56:36.000Z',
      CategoryId: 6,
      Category: {
        id: 6,
        name: '美式料理',
        createdAt: '2020-12-15T06:35:43.000Z',
        updatedAt: '2021-01-08T08:07:13.000Z'
      }
    },
    {
      id: 3457,
      name: '麻小二',
      tel: '06-12345678',
      address: '台南市永康區大橋二街206號',
      opening_hours: '14:35',
      description: '',
      image: 'https://i.imgur.com/8mJzASx.jpeg',
      viewCounts: 0,
      createdAt: '2021-02-26T06:36:17.000Z',
      updatedAt: '2021-02-26T06:36:17.000Z',
      CategoryId: 0,
      Category: null
    }
  ]
}

export default {
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
    deleteRestaurant (restaurantId) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      )
    }
  }
}
</script>
