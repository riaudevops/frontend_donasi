<template>
  <div class="my-5 ms-5">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      Tambah Donatur
    </button>

    <!-- Modal Insert -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Data</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input
              class="form-control"
              type="text"
              v-model="insertName"
              placeholder="Nama Donatur"
              aria-label="default input example" /><br />
            <input
              class="form-control"
              type="date"
              v-model="insertDate"
              placeholder="Tanggal"
              aria-label="default input example" /><br />
            <input
              class="form-control"
              type="text"
              v-model="insertJumlah"
              placeholder="Jumlah Donasi"
              aria-label="default input example" /><br />
            <div class="mb-3">
              <input
                class="form-control"
                type="file"
                ref="file"
                id="formFile" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
              Batal
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="postApi()">
              Tambah Donatur
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-5">
    <table class="table border">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama Donatur</th>
          <th scope="col">Tanggal</th>
          <th scope="col">Jumlah</th>
          <th scope="col">Struk</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in donatur" v-bind:key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.donatur }}</td>
          <td>{{ data.tanggal }}</td>
          <td>{{ data.jumlah }}</td>
          <td><img :src="data.bukti" alt="struk" style="width: 150px" /></td>
          <td>
            <router-link
              :to="{ name: 'updateDonatur', params: { id: data.id } }"
              class="btn btn-warning me-3"
              >Update</router-link
            >
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              v-on:click="deleteApi(data.id)"
              class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';

const urlApi = 'http://localhost/donasibackend/readalldonasi.php';
const postUrl = 'http://localhost/donasibackend/insertdonasi.php';
const deleteUrl = 'http://localhost/donasibackend/deletebyid.php';

export default {
  data() {
    return {
      donatur: ref([]),
      insertName: '',
      insertDate: '',
      insertJumlah: '',
      file: '',
      dialogDelete: false,
    };
  },

  mounted() {
    this.getApi();
  },

  methods: {
    getApi() {
      axios
        .get(urlApi)
        .then((resp) => {
          console.log(resp);
          this.donatur = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    postApi() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();

      formData.append('bukti', this.file);
      formData.append('donatur', this.insertName);
      formData.append('tanggal', this.insertDate);
      formData.append('jumlah', this.insertJumlah);
      axios
        .post(postUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((resp) => {
          console.log(resp.data);
          this.getApi();
          this.insertName = '';
          this.insertDate = '';
          this.insertJumlah = '';
          this.$refs.file.value = '';
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteApi(id) {
      if (confirm('Apakah anda ingin mendelete data ?')) {
        axios
          .delete(deleteUrl + '?id=' + id)
          .then((resp) => {
            this.getApi();
            console.log(resp);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
