<template lang="pug">
  v-navigation-drawer(app)
    v-list-item
        v-list-item-content
          v-list-item-title(class="title")
            | Baratíssima
          v-list-item-subtitle
            | Seja bem vindo
    v-divider
    v-list-item(link)
      v-list-item-icon
        v-icon  mdi-tag
      v-list-item-content
        v-list-item-title Ofertas do dia
    v-list-item(link)
      v-list-item-icon
        v-icon  mdi-cellphone-android
      v-list-item-content
        v-list-item-title Eletrônicos
    v-list-item(link)
      v-list-item-icon
        v-icon  mdi-bookshelf
      v-list-item-content
        v-list-item-title Livros


</template>
