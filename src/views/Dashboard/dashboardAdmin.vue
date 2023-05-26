<template>
  <div class="my-5 ms-5">
    <div class="mb-5">
      <h1 class="text-center">CRUD Operation</h1>
      <hr />
    </div>
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
            <input
              class="form-control"
              type="text"
              v-model="insertNomor"
              placeholder="Nomor Hp"
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
          <th scope="col">No-Hp</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, idx) in donatur" v-bind:key="data.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ data.nama }}</td>
          <td>{{ data.tanggal }}</td>
          <td>{{ data.jumlah }}</td>
          <td>
            <img :src="data.keterangan" alt="struk" style="width: 150px" />
          </td>
          <td>{{ data.nomor_hp }}</td>
          <td>
            <router-link
              :to="{ name: 'updateDonatur', params: { id: data.id } }"
              class="btn btn-warning me-3"
              >Update</router-link
            >
            <button
              type="button"
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

const urlApi = 'http://lutproject.my.id/donasi//readalldonasi.php';
const postUrl = 'http://lutproject.my.id/donasi//insertdonasi.php';
const deleteUrl = 'http://lutproject.my.id/donasi//deletebyid.php';

export default {
  data() {
    return {
      donatur: ref([]),
      insertName: '',
      insertDate: '',
      insertJumlah: '',
      insertNomor: '',
      file: '',
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

      formData.append('keterangan', this.file);
      formData.append('nama', this.insertName);
      formData.append('tanggal', this.insertDate);
      formData.append('jumlah', this.insertJumlah);
      formData.append('nomor_hp', this.insertNomor);
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
          this.insertNomor;
          this.$refs.file.value = '';
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteApi(id) {
      if (confirm('apakah kamu ingin menhapus data ?')) {
        axios
          .get(deleteUrl + '?id=' + id)
          .then((resp) => {
            console.log(resp);
            this.getApi();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
