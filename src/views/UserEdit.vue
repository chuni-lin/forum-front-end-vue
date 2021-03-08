<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
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
          v-if="user.image"
          :src="user.image"
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
const dummyData = {
  profile: {
    id: 3,
    name: 'user2',
    email: 'user2@example.com',
    password: '$2a$10$NGdYgFWSYFlSx.XJONh8a.KSRCwXdeBLfzHA1gfwH6qZjgCheV6Ae',
    isAdmin: false,
    image: null,
    createdAt: '2021-02-27T15:02:08.000Z',
    updatedAt: '2021-03-01T16:04:18.000Z',
    Comments: [
      {
        id: 7,
        text: 'Odit perspiciatis culpa.',
        UserId: 3,
        RestaurantId: 7,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 7,
          name: 'Cleo Goldner',
          tel: '632-742-8599',
          address: '912 Betty Drive',
          opening_hours: '08:00',
          description: 'Cumque dolorem similique eos rem itaque. Labore nihil qui numquam quis et sint atque qui repellendus. Est quo ut nihil esse dolores inventore quisquam.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=84.7440319095808',
          viewCounts: 106,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-03-01T16:16:18.000Z',
          CategoryId: 7
        }
      },
      {
        id: 12,
        text: 'Consequatur eius ratione consequatur quo voluptatem.',
        UserId: 3,
        RestaurantId: 12,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 12,
          name: 'Destiny Koepp',
          tel: '1-357-682-4344 x1631',
          address: '5784 Tromp Squares',
          opening_hours: '08:00',
          description: 'Nobis omnis ab. Ut quo excepturi. Praesentium veritatis ut dolores quos.\n \rOptio aut unde quasi pariatur. Beatae minus aperiam eveniet sequi reiciendis est corrupti. Sequi placeat animi ipsum sequi. Sit iusto esse libero.\n \rAccusamus facilis non adipisci. Ut alias nihil praesentium. At blanditiis aperiam mollitia et sed harum explicabo error. Est deserunt tempora.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=9.894450272533529',
          viewCounts: 12,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-03-01T10:43:44.000Z',
          CategoryId: 2
        }
      },
      {
        id: 22,
        text: 'Id eveniet doloremque quasi voluptate sit.',
        UserId: 3,
        RestaurantId: 22,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 22,
          name: 'Della Wolf',
          tel: '1-396-972-5271 x98158',
          address: '1335 Deangelo Ports',
          opening_hours: '08:00',
          description: 'Adipisci consequatur id numquam distinctio animi id eum natus.\nFuga facilis laborum est nisi dolorum.\nCupiditate atque ad sed culpa.\nVoluptas voluptatem officia at voluptas in maxime accusamus.\nConsequuntur tenetur voluptas quia ea est dolores laudantium ad aut.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=8.956320091725466',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 4
        }
      },
      {
        id: 24,
        text: 'Distinctio eveniet ut aut quia ab enim ut ex.',
        UserId: 3,
        RestaurantId: 24,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 24,
          name: 'Opal Larson MD',
          tel: '(058) 132-5828 x82783',
          address: '056 Avery Manors',
          opening_hours: '08:00',
          description: 'Quas ea rerum vero laudantium ratione sequi error cumque. Aliquam libero dolor non ut qui dolorum aut cupiditate. Dicta aliquam cum reprehenderit. Mollitia aliquid non culpa et aut.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=96.43707196533782',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 2
        }
      },
      {
        id: 27,
        text: 'Nemo pariatur veniam porro cupiditate repellendus error.',
        UserId: 3,
        RestaurantId: 27,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 27,
          name: 'Wayne Kassulke',
          tel: '(420) 436-8792',
          address: '8690 Jerde Burg',
          opening_hours: '08:00',
          description: 'Et quis sunt.\nEos deleniti autem quasi.\nSimilique et voluptates qui et voluptates eos maiores officiis.\nRatione ad vitae.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=14.224651260741194',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 3
        }
      },
      {
        id: 28,
        text: 'Saepe sunt vitae rerum id nostrum.',
        UserId: 3,
        RestaurantId: 28,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 28,
          name: 'Margaret Hickle Jr.',
          tel: '(829) 563-4938 x15573',
          address: '544 Weber Motorway',
          opening_hours: '08:00',
          description: 'Occaecati quasi sit quod voluptas neque.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=59.23185101522972',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 4
        }
      },
      {
        id: 36,
        text: 'Enim eveniet voluptatem hic nihil quae rerum.',
        UserId: 3,
        RestaurantId: 36,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 36,
          name: 'Malika Romaguera',
          tel: '(623) 973-1284 x094',
          address: '027 Joelle Creek',
          opening_hours: '08:00',
          description: 'aperiam',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=87.85270247725603',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 3
        }
      },
      {
        id: 37,
        text: 'Quis autem sed et quae cupiditate assumenda est ea dicta.',
        UserId: 3,
        RestaurantId: 37,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 37,
          name: 'Joannie Dietrich',
          tel: '(507) 921-3778',
          address: '8441 Vernie Passage',
          opening_hours: '08:00',
          description: 'Suscipit dolore soluta ratione et.\nRepudiandae totam id quo eligendi et.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=91.15518924118642',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 1
        }
      },
      {
        id: 41,
        text: 'Fuga nam at.',
        UserId: 3,
        RestaurantId: 41,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 41,
          name: 'Cary Keeling',
          tel: '1-649-226-4587',
          address: '47419 Thora Ferry',
          opening_hours: '08:00',
          description: 'ipsam',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=43.80439590813159',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 2
        }
      },
      {
        id: 46,
        text: 'Asperiores sunt ea illo voluptas distinctio.',
        UserId: 3,
        RestaurantId: 46,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 46,
          name: 'Sim Parker',
          tel: '1-617-005-9677 x504',
          address: '07058 Wuckert Burgs',
          opening_hours: '08:00',
          description: 'Et magnam soluta dolorum ex. Iure molestiae possimus ipsa porro voluptatem tempore nihil. Nobis ut ea officiis cupiditate. Esse architecto quasi laudantium vel dolorem. Velit architecto recusandae temporibus officiis accusamus molestiae.\n \rRecusandae fuga omnis modi nesciunt. Recusandae earum optio repellat ullam est minus. Maiores dolor iste consequatur totam.\n \rLabore nesciunt corporis natus qui inventore. Vitae eum vel minima. Dolores aspernatur qui sunt vel ducimus in officiis. Et aliquam vero laudantium.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=24.779071573790755',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 5
        }
      },
      {
        id: 63,
        text: 'Praesentium sed incidunt eos consectetur nemo deserunt.',
        UserId: 3,
        RestaurantId: 13,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 13,
          name: 'Miss Green Wisozk',
          tel: '(712) 442-4503',
          address: '718 Juvenal Streets',
          opening_hours: '08:00',
          description: 'Corporis qui est commodi qui ad vel qui libero quaerat.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=85.78750520831242',
          viewCounts: 1,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-03-01T07:20:07.000Z',
          CategoryId: 2
        }
      },
      {
        id: 68,
        text: 'Sed error veniam quia earum tempora.',
        UserId: 3,
        RestaurantId: 18,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 18,
          name: 'Adolphus Kemmer',
          tel: '1-942-133-1908 x466',
          address: '470 Bosco Estate',
          opening_hours: '08:00',
          description: 'Sunt sed placeat laboriosam sapiente est et est sunt.\nAb sapiente sunt ab nam labore excepturi voluptas.\nIure iste accusamus impedit recusandae quo.\nIusto expedita facilis possimus voluptatem eum consectetur ut molestiae aut.\nPerspiciatis impedit nemo quibusdam est dolore fugiat non fuga voluptatibus.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=27.644699787966196',
          viewCounts: 2,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-28T18:29:05.000Z',
          CategoryId: 4
        }
      },
      {
        id: 73,
        text: 'Est laboriosam et nesciunt tempora iusto.',
        UserId: 3,
        RestaurantId: 23,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 23,
          name: 'Burnice Koch',
          tel: '657-891-3541 x163',
          address: '70124 Ofelia Estates',
          opening_hours: '08:00',
          description: 'eius',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=78.57746479795007',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 5
        }
      },
      {
        id: 77,
        text: 'Esse blanditiis quaerat dolorum expedita illum debitis.',
        UserId: 3,
        RestaurantId: 27,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 27,
          name: 'Wayne Kassulke',
          tel: '(420) 436-8792',
          address: '8690 Jerde Burg',
          opening_hours: '08:00',
          description: 'Et quis sunt.\nEos deleniti autem quasi.\nSimilique et voluptates qui et voluptates eos maiores officiis.\nRatione ad vitae.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=14.224651260741194',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 3
        }
      },
      {
        id: 78,
        text: 'Deserunt ut necessitatibus dolorem et.',
        UserId: 3,
        RestaurantId: 28,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 28,
          name: 'Margaret Hickle Jr.',
          tel: '(829) 563-4938 x15573',
          address: '544 Weber Motorway',
          opening_hours: '08:00',
          description: 'Occaecati quasi sit quod voluptas neque.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=59.23185101522972',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 4
        }
      },
      {
        id: 79,
        text: 'Sint labore officiis aut ut illo nulla.',
        UserId: 3,
        RestaurantId: 29,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 29,
          name: 'Simone Hilll',
          tel: '1-409-613-5332',
          address: '1492 Corwin Terrace',
          opening_hours: '08:00',
          description: 'doloribus rerum voluptatem',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=36.958305772286494',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 4
        }
      },
      {
        id: 80,
        text: 'Sed impedit repellendus perspiciatis autem quae molestias omnis earum repellendus.',
        UserId: 3,
        RestaurantId: 30,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 30,
          name: 'Kameron Wintheiser',
          tel: '365-779-5311 x4151',
          address: '326 Kianna Fords',
          opening_hours: '08:00',
          description: 'Aut neque repellendus fugit maiores animi rerum dignissimos alias dolor.\nId assumenda consequatur voluptate sed tenetur explicabo deserunt et qui.\nNihil rerum aut.\nPorro commodi natus ut omnis aut et facere in corrupti.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=76.71875048416778',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 3
        }
      },
      {
        id: 81,
        text: 'Quae id aut rerum ab natus aut.',
        UserId: 3,
        RestaurantId: 31,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 31,
          name: 'Roxanne Barrows',
          tel: '176-961-1095 x912',
          address: '7143 Gunner Glens',
          opening_hours: '08:00',
          description: 'magnam sit consectetur',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=21.413403835935263',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 4
        }
      },
      {
        id: 82,
        text: 'Veritatis corrupti debitis aut rem.',
        UserId: 3,
        RestaurantId: 32,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 32,
          name: 'Amelie Ortiz',
          tel: '(018) 179-1273 x7872',
          address: '619 Cali Ville',
          opening_hours: '08:00',
          description: 'Iusto optio repellendus sunt voluptas.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=15.003641798363997',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-28T16:27:58.000Z',
          CategoryId: 5
        }
      },
      {
        id: 83,
        text: 'Et et laboriosam impedit voluptatem voluptatem est.',
        UserId: 3,
        RestaurantId: 33,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 33,
          name: 'Peggie Mante',
          tel: '425-958-2263',
          address: '59619 Koss Village',
          opening_hours: '08:00',
          description: 'Dolorum commodi ab non expedita ea ad sapiente est.\nQuia dolor eius et et ut et consectetur dignissimos earum.\nRepudiandae et exercitationem.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=3.094252540706277',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 2
        }
      },
      {
        id: 90,
        text: 'Sapiente quia repudiandae qui neque labore debitis itaque ut.',
        UserId: 3,
        RestaurantId: 40,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 40,
          name: 'Nestor Ankunding',
          tel: '(108) 566-2354',
          address: "030 D'Amore Burgs",
          opening_hours: '08:00',
          description: 'Id reiciendis tempore earum maiores temporibus ut. Alias aspernatur odio est. Eos repudiandae et minus voluptatum eum aperiam omnis quod. Quam dicta sit. Quia non recusandae magni odio aut repellendus iste aut.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=95.53445983674041',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 3
        }
      },
      {
        id: 92,
        text: 'Quia doloremque accusamus vitae amet necessitatibus quia.',
        UserId: 3,
        RestaurantId: 42,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 42,
          name: 'Alfred Conroy I',
          tel: '1-424-484-3054 x306',
          address: '003 Christa Ports',
          opening_hours: '08:00',
          description: 'molestias',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=22.474456510489137',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 5
        }
      },
      {
        id: 123,
        text: 'Enim deserunt deleniti.',
        UserId: 3,
        RestaurantId: 23,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 23,
          name: 'Burnice Koch',
          tel: '657-891-3541 x163',
          address: '70124 Ofelia Estates',
          opening_hours: '08:00',
          description: 'eius',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=78.57746479795007',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 5
        }
      },
      {
        id: 124,
        text: 'Velit dolorem voluptatem esse est sequi quo aut tempore debitis.',
        UserId: 3,
        RestaurantId: 24,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 24,
          name: 'Opal Larson MD',
          tel: '(058) 132-5828 x82783',
          address: '056 Avery Manors',
          opening_hours: '08:00',
          description: 'Quas ea rerum vero laudantium ratione sequi error cumque. Aliquam libero dolor non ut qui dolorum aut cupiditate. Dicta aliquam cum reprehenderit. Mollitia aliquid non culpa et aut.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=96.43707196533782',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 2
        }
      },
      {
        id: 125,
        text: 'Architecto laborum corrupti ipsam voluptatem enim mollitia quod nesciunt ipsam.',
        UserId: 3,
        RestaurantId: 25,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 25,
          name: 'Jeanie Ward',
          tel: '520.810.2091 x063',
          address: '45720 Hintz Drive',
          opening_hours: '08:00',
          description: 'Voluptate similique et praesentium nihil deserunt magni. Aspernatur molestiae recusandae reprehenderit. Dolor et illum. Suscipit nesciunt laudantium. Quibusdam qui sint debitis corrupti maiores fugit. Reiciendis molestiae veniam magnam rerum nihil expedita.\n \rVoluptatem et nostrum omnis reprehenderit necessitatibus quia debitis est officiis. Praesentium recusandae reprehenderit dolor quod vitae laboriosam cum est. Sed impedit reprehenderit eos commodi velit. Molestiae voluptatem labore debitis cumque officia sunt fugit quibusdam illum.\n \rRerum deserunt ullam quas natus et. Assumenda voluptatum et architecto. Consequatur esse error vero sequi qui voluptatum voluptatum labore fugiat. Et esse ea aut.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=97.28845867365096',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 2
        }
      },
      {
        id: 127,
        text: 'Dolor error nobis nisi fugit nulla maxime et nisi ea.',
        UserId: 3,
        RestaurantId: 27,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 27,
          name: 'Wayne Kassulke',
          tel: '(420) 436-8792',
          address: '8690 Jerde Burg',
          opening_hours: '08:00',
          description: 'Et quis sunt.\nEos deleniti autem quasi.\nSimilique et voluptates qui et voluptates eos maiores officiis.\nRatione ad vitae.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=14.224651260741194',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 3
        }
      },
      {
        id: 130,
        text: 'Repellendus et voluptas.',
        UserId: 3,
        RestaurantId: 30,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 30,
          name: 'Kameron Wintheiser',
          tel: '365-779-5311 x4151',
          address: '326 Kianna Fords',
          opening_hours: '08:00',
          description: 'Aut neque repellendus fugit maiores animi rerum dignissimos alias dolor.\nId assumenda consequatur voluptate sed tenetur explicabo deserunt et qui.\nNihil rerum aut.\nPorro commodi natus ut omnis aut et facere in corrupti.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=76.71875048416778',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 3
        }
      },
      {
        id: 136,
        text: 'Quaerat eius quaerat ea autem animi voluptatem odio beatae eos.',
        UserId: 3,
        RestaurantId: 36,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 36,
          name: 'Malika Romaguera',
          tel: '(623) 973-1284 x094',
          address: '027 Joelle Creek',
          opening_hours: '08:00',
          description: 'aperiam',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=87.85270247725603',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 3
        }
      },
      {
        id: 143,
        text: 'Deleniti omnis fugiat magni ipsum esse.',
        UserId: 3,
        RestaurantId: 43,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 43,
          name: 'Jacky Will',
          tel: '389-213-0540',
          address: '70752 Arturo Port',
          opening_hours: '08:00',
          description: 'Ipsa ipsum ut dolor voluptatem soluta delectus officia totam.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=3.8012843425531795',
          viewCounts: 6,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-28T18:26:20.000Z',
          CategoryId: 5
        }
      },
      {
        id: 145,
        text: 'Asperiores a eum quasi ea dolor quod quia quo aut.',
        UserId: 3,
        RestaurantId: 45,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 45,
          name: 'Marco Krajcik',
          tel: '(700) 824-8866 x6723',
          address: '00668 Elvis Extension',
          opening_hours: '08:00',
          description: 'fuga',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=68.8968131516027',
          viewCounts: 2,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-28T16:48:10.000Z',
          CategoryId: 4
        }
      },
      {
        id: 146,
        text: 'Nobis neque in rerum eaque voluptatem.',
        UserId: 3,
        RestaurantId: 46,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 46,
          name: 'Sim Parker',
          tel: '1-617-005-9677 x504',
          address: '07058 Wuckert Burgs',
          opening_hours: '08:00',
          description: 'Et magnam soluta dolorum ex. Iure molestiae possimus ipsa porro voluptatem tempore nihil. Nobis ut ea officiis cupiditate. Esse architecto quasi laudantium vel dolorem. Velit architecto recusandae temporibus officiis accusamus molestiae.\n \rRecusandae fuga omnis modi nesciunt. Recusandae earum optio repellat ullam est minus. Maiores dolor iste consequatur totam.\n \rLabore nesciunt corporis natus qui inventore. Vitae eum vel minima. Dolores aspernatur qui sunt vel ducimus in officiis. Et aliquam vero laudantium.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=24.779071573790755',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 5
        }
      },
      {
        id: 149,
        text: 'Eum commodi quo.',
        UserId: 3,
        RestaurantId: 49,
        createdAt: '2021-02-27T15:02:08.000Z',
        updatedAt: '2021-02-27T15:02:08.000Z',
        Restaurant: {
          id: 49,
          name: 'Lucienne Swaniawski',
          tel: '028.225.7896',
          address: '7627 Devan Cliffs',
          opening_hours: '08:00',
          description: 'Eius et voluptas officia est. Perspiciatis amet vel velit ab est. Ea tenetur similique. Id consectetur recusandae voluptatem sit optio nostrum.\n \rConsequatur fugiat ut deleniti. Provident perspiciatis expedita ut eligendi eligendi numquam. Dicta architecto vel. Harum inventore accusantium modi harum in. Tempora laborum similique ut praesentium recusandae.\n \rExplicabo sit dicta facilis voluptate laboriosam a qui. Quas eius incidunt consequatur et dolor deleniti adipisci laudantium et. Eum veritatis enim deserunt dolorem qui.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=52.31067528310129',
          viewCounts: 0,
          createdAt: '2021-02-27T15:02:08.000Z',
          updatedAt: '2021-02-27T15:02:08.000Z',
          CategoryId: 2
        }
      }
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: []
  },
  isFollowed: false
}

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
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      const { id, name, image } = dummyData.profile
      this.user = {
        id,
        name,
        image
      }
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
