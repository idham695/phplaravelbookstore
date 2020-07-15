<template>
  <v-footer dark height="auto" color="grey">
    <v-flex xs12>
      <v-card text tile class="white--text text-xs-center" color="indigo">
        <!-- menu icon media social media -->
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-layout justify-center row wrap>
          <!-- link menu halaman aplikasi -->
          <v-btn v-for="link in links" :key="link" color="white" text rounded>{{ link }}</v-btn>

          <v-flex py-3 white--text xs12 color="primary">
            &copy;2020 - Bookstore powered by
            <strong>Vuetify</strong>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-footer>
</template>
<script>
export default {
  name: "c-footer",
  data: () => ({
    // variabel icon sosial yang ingin ditampilkan
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
    // variabel link halaman yang ingi ditampilkan
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>
