import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areas: [
      {
        id: 1,
        name: 'North',
        slug: 'north',
        description:
          "all about North, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.",
        wineries: [
          {
            name: "Matar",
            slug: "matar",
            image: "vineyard1.jpg",
            description:
              "Matar lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
            , wines: [

              {

                name: 'CB',
                type: 'red',
                blend: 'Sauvignon Blanc, Sémillon',
                vintage: '2016',
                rating: 3.9,
                image: '//images.vivino.com/thumbs/Fs3-3b7ARFi139O-BlEvVw_pb_x600.png',
                price: 250,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
              },
              {

                name: 'Sauvignon Blanc - Semillon',
                type: 'white',
                blend: 'Sauvignon Blanc, Sémillon',
                vintage: '2020',
                rating: 3.9,
                image: '//images.vivino.com/thumbs/7x2OGFJsSjKtoMNLeko5mw_pb_x600.png',
                price: 85,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). '
              },
              {
                name: 'Cumulus',
                type: 'red',
                blend: 'Primitivo',
                vintage: '2018',
                rating: 4.5,
                image: '//images.vivino.com/thumbs/E0bI97iaR2KZzFGsysMU1g_pb_x600.png',
                price: 100,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
              {
                name: 'Petit Verdot',
                type: 'red',
                blend: 'Primitivo',
                vintage: '2018',
                rating: 3,
                image: '//images.vivino.com/thumbs/oyB0C64NQw-q8XVJBIlUhw_pb_x600.png',
                price: 100,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },

            ],

          },
          {
            name: "Galil Mountain Winery",
            slug: "galil",
            image: "vineyard5.jpg",
            description: "In the Upper Galilee, near Kibbutz Yiron, we discovered the beauty of a free-flowing connection with nature. Experiencing this connection led to the establishment of a winery whose approach and actions are free and creative. We work with nature, and generate sustainable relationships with the earth and the vineyards growing from within it. It’s important for us to maintain that which exists. To serve life in this environment. To give back."
            , wines: [

              {

                name: 'Yiron',
                type: 'red',
                blend: 'Sauvignon Blanc, Sémillon',
                vintage: '2017',
                rating: 4.2,
                image: '//images.vivino.com/thumbs/NWu7LOnXTPesXYibscG_LA_pb_x600.png',
                price: 100,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
              },
              {

                name: 'Meron',
                type: 'red',
                blend: 'Merlot, Petit Verdot',
                vintage: '2020',
                rating: 3.9,
                image: '//images.vivino.com/thumbs/WEOB31aWTn2SaW6O8gLrzA_pb_x600.png',
                price: 85,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). '
              },
              {
                name: 'Avivim',
                type: 'white',
                blend: 'Primitivo',
                vintage: '2018',
                rating: 3,
                image: '//images.vivino.com/thumbs/1Ne4-rugQGmMrZUPuzW3YQ_pb_x600.png',
                price: 55,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
              {
                name: 'Ella',
                type: 'red',
                blend: 'Primitivo',
                vintage: '2018',
                rating: 3.5,
                image: '//images.vivino.com/thumbs/ddKYVqgGRASq2qdVgizxEA_pb_x600.png',
                price: 100,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },

            ],
          },

        ]
      },
      {
        id: 2,
        name: 'Jerusalem',
        slug: 'jerusalem',
        description:
          "all about Jerusalem, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.",
        wineries: [
          {
            name: "Castel",
            slug: "catel",
            image: "vineyard6.jpg",
            description:
              "Castel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.m."
            , wines: [
              {

                name: 'Grand Vin Rouge',
                type: 'white',
                blend: 'Sauvignon Blanc, Sémillon',
                vintage: '2018',
                rating: 5,
                image: '//images.vivino.com/thumbs/gAdcvrH5T3yiJoeFLK-uuw_pb_x600.png',
                price: 200,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). '
              },
              {

                name: 'Petit Castel',
                type: 'red',
                blend: 'Merlot, Ugni blanc, Cabernet Sauvignon',
                vintage: '2019',
                rating: 4.3,
                image: '//images.vivino.com/thumbs/HXYxbwvmT4a6vM1p4Wrp2w_pb_x600.png',
                price: 100,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
              },

              {
                name: 'Blanc du Castel ',
                type: 'red',
                blend: 'Chardonnay',
                vintage: '2019',
                rating: 3.8,
                image: '//images.vivino.com/thumbs/4QLoHOoASaKvdidevjIk1A_pb_x600.png',
                price: 100,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
              {
                name: 'Rosé du Castel',
                type: 'rose',
                blend: 'Merlot, Cabernet Franc, Malbec',
                vintage: '2020',
                rating: 3,
                image: '//images.vivino.com/thumbs/KXb-lXq_T8WPcy3P0Ulwhw_pb_x600.png',
                price: 85,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
              {
                name: 'La Vie Rouge ',
                type: 'rose',
                blend: 'Merlot, Cabernet Franc, Malbec',
                vintage: '2016',
                rating: 3,
                image: '//images.vivino.com/thumbs/g5WgmuPMTQmCY0ZUdm-mpA_pb_x600.png',
                price: 76,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
            ],

          },
          {
            name: "Flam",
            slug: "flam",
            image: "vineyard7.jpg",
            description: "In the Upper Galilee, near Kibbutz Yiron, we discovered the beauty of a free-flowing connection with nature. Experiencing this connection led to the establishment of a winery whose approach and actions are free and creative. We work with nature, and generate sustainable relationships with the earth and the vineyards growing from within it. It’s important for us to maintain that which exists. To serve life in this environment. To give back."
            , wines: [

              {

                name: 'Noble',
                type: 'red',
                blend: 'Sauvignon Blanc, Sémillon',
                vintage: '2017',
                rating: 4.2,
                image: '//images.vivino.com/thumbs/PjqwTrD8TVa3PAtMjZi7Nw_pb_x600.png',
                price: 350,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
              },
              {

                name: 'Cabernet Sauvignon Reserve',
                type: 'red',
                blend: 'Merlot, Petit Verdot',
                vintage: '2015',
                rating: 4.3,
                image: '//images.vivino.com/thumbs/CAy31S7CSgeTQuo7rTyZNA_pb_x600.png',
                price: 120,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). '
              },
              {
                name: 'Classico',
                type: 'red',
                blend: 'Cabernet Franc, Merlot, Petit Verdot, Shiraz/Syrah, Cabernet Sauvignon',
                vintage: '2019',
                rating: 3,
                image: '//images.vivino.com/thumbs/RBrJBow-T3uxzL57QRm1Ew_pb_x600.png',
                price: 96,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
              {
                name: 'Camellia Blanc',
                type: 'white',
                blend: 'Primitivo',
                vintage: '2018',
                rating: 3.5,
                image: '//images.vivino.com/thumbs/qO1npJ-wSC2FT4XjTQ5u3w_pb_x600.png',
                price: 85,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
              {
                name: 'Syrah Reserve',
                type: 'red',
                blend: 'Syra',
                vintage: '2018',
                rating: 3.5,
                image: '//images.vivino.com/thumbs/zyPjivl2Rr-K-6qezLx2lg_pb_x600.png',
                price: 85,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
            ],
          },

        ]
      },
      {
        id: 3,
        name: 'South',
        slug: 'south',
        description:
          "all about south of israel, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.",
        wineries: [
          {
            name: "Ramat Negev",
            slug: "ramatnegev",
            image: "vineyard8.jpg",
            description:
              "asdasd lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
            , wines: [

              {

                name: 'Kadesh Barnea ',
                type: 'red',
                blend: 'Cabernet Sauvignon',
                vintage: '2017',
                rating: 4.2,
                image: '//images.vivino.com/thumbs/nvLCYvDPSeSkxl2b0FPmcw_pb_x600.png',
                price: 350,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
              },
              {

                name: 'Neve Midbar',
                type: 'red',
                blend: 'Merlot, Petit Verdot',
                vintage: '2015',
                rating: 4.3,
                image: '//images.vivino.com/thumbs/mub0H3fyRDGUR3_qVQ-Mdw_pb_x600.png',
                price: 120,
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). '
              },
              {
                name: 'Ramat Negev',
                type: 'red',
                blend: 'Cabernet Franc, Merlot, Petit Verdot, Shiraz/Syrah, Cabernet Sauvignon',
                vintage: '2019',
                rating: 3,
                image: '//images.vivino.com/thumbs/FB7ivmsyRGKrNicI2SF_wA_pb_x600.png',
                price: 96,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
              {
                name: 'Kadesh Barnea ',
                type: 'red',
                blend: 'Primitivo',
                vintage: '2018',
                rating: 3.5,
                image: '//images.vivino.com/thumbs/VvspaU_uQDGmfjkMydZT-Q_pb_x600.png',
                price: 85,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
              {
                name: 'Kadesh Barnea Negev',
                type: 'red',
                blend: 'Syra',
                vintage: '2018',
                rating: 3.5,
                image: '//images.vivino.com/thumbs/VvspaU_uQDGmfjkMydZT-Q_pb_x600.png',
                price: 85,
                description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. "
              },
            ],
          },


        ]
      },

    ]
  },

})

