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
            image: "iguacu-falls.jpg",
            description:
              "Matar lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
          },
          {
            name: "Matar",
            slug: "matar",
            image: "iguacu-falls.jpg",
            description:
              "Matar lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
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
            slug: "castel",
            image: "iguacu-falls.jpg",
            description:
              "Castel lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
          },

        ]
      },
      {
        id: 3,
        name: 'South',
        slug: 'south',
        description:
          "all about Jerusalem, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.",
        wineries: [
          {
            name: "asdasd",
            slug: "asdasd",
            image: "iguacu-falls.jpg",
            description:
              "asdasd lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
          },

        ]
      },

    ]
  },

})

