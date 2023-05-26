<template>
  <div class="m-5 border border-radius p-5">
    <h1 class="mb-4">Edit Donatur</h1>
    <input
      class="form-control"
      type="text"
      v-model="updateNameDonatur"
      placeholder="Nama Donatur"
      aria-label="default input example" /><br />
    <input
      class="form-control"
      type="date"
      v-model="updateTanggal"
      placeholder="Tanggal"
      aria-label="default input example" /><br />
    <input
      class="form-control"
      type="text"
      v-model="updateJumlah"
      placeholder="Jumlah Donasi"
      aria-label="default input example" /><br />
    <div class="mb-3">
      <input class="form-control" type="file" ref="file" />
      <img :src="file" alt="struk" style="width: 120px; margin-top: 10px" />
    </div>

    <div class="mt-5">
      <router-link to="/dashboard" class="btn btn-secondary me-5"
        >Back
      </router-link>
      <button
        type="button"
        class="btn btn-primary"
        v-on:click="updateDonatur()">
        Update Donatur
      </button>
    </div>
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

const urlSelect = 'http://localhost/donasibackend/selectbyid.php';
const urlUpdate = 'http://localhost/donasibackend/updatebyid.php';

export default {
  data() {
    return {
      selectDonatur: ref([]),
      updateNameDonatur: '',
      updateTanggal: '',
      updateJumlah: '',
      file: '',
    };
  },
  mounted() {
    this.getDonatur();
  },
  methods: {
    getDonatur() {
      axios
        .post(
          urlSelect,
          {
            id: this.$route.params.id,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((resp) => {
          console.log(resp);
          this.selectDonatur = resp.data;
          this.updateNameDonatur = this.selectDonatur.donatur;
          this.updateTanggal = this.selectDonatur.tanggal;
          this.updateJumlah = this.selectDonatur.jumlah;
          this.file = this.selectDonatur.bukti;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updateDonatur() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();

      formData.append('id', this.$route.params.id);
      formData.append('donatur', this.updateNameDonatur);
      formData.append('tanggal', this.updateTanggal);
      formData.append('jumlah', this.updateJumlah);
      formData.append('bukti', this.file);

      axios
        .post(urlUpdate, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((resp) => {
          console.log(resp.data);
          this.getDonatur();
          // alert('data berhasil di update');
          // this.insertName = '';
          // this.insertDate = '';
          // this.insertJumlah = '';
          // this.$refs.file.value = '';
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
