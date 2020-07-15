<template>
  <v-card>
    <v-toolbar dark color="indigo">
      <v-btn icon dark @click.native="close">
        <v-icon>close</v-icon>
      </v-btn>
      <v-text-field
        v-model="keyword"
        @input="doSearch"
        hide-details
        append-icon="mic"
        text
        label="Search"
        prepend-inner-icon="seacrh"
        solo-inverted
        ref="txtSearch"
      ></v-text-field>
    </v-toolbar>
    <v-divider></v-divider>
    <v-subheader v-if="keyword.length>0">Result search "{{keyword}}"</v-subheader>
    <v-alert
      :value="items.length==0 && keyword.length>0"
      color="warning"
    >Sorry, but no result were found.</v-alert>
    <v-list two-line v-if="items.length>0">
      <template v-for="(item) in items">
        <v-list-item :key="item.id" @click="close" :to="'/book/' + item.slug">
          <v-list-item-avatar>
            <img :src="getImage('/books/'+item.cover)" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "search",
  data() {
    return {
      keyword: "",
      items: []
    };
  },
  methods: {
    ...mapActions({
      setStatusDialog: "dialog/setStatus"
    }),
    close() {
      this.setStatusDialog(false);
    },
    doSearch() {
      let keyword = this.keyword;
      if (keyword.length > 0) {
        this.axios
          .get("/books/search/" + keyword)
          .then(res => {
            let books = res.data.data;
            this.items = books;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted() {
      if (this.$refs.txtSearch != undefined) {
        this.$nextTick(() => this.$refs.txtSearch.focus());
      }
    }
  }
};
</script>