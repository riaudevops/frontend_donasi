<template>
  <div class="container my-5 ms-5">
    <div class="mb-5">
      <h1 class="text-center">CRUD Operation Donatur</h1>
      <hr />
    </div>
    <!-- Button trigger modal -->
    <div class="d-flex justify-content-between">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Tambah Donatur
      </button>
      <button @click="logout" class="btn btn-primary">LogOut</button>
    </div>

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
              v-model="insertNama"
              placeholder="Nama Donatur"
              aria-label="default input example" /><br />
            <input
              class="form-control"
              type="date"
              v-model="insertTanggal"
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
              v-model="insertNomorHp"
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
              v-on:click="postDonatur()">
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
          <th scope="col">No-Hp</th>
          <th scope="col">Struk</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, idx) in donatur">
          <td>{{ idx + 1 }}</td>
          <td>{{ data.nama }}</td>
          <td>{{ data.tanggal }}</td>
          <td>Rp.{{ data.jumlah }}</td>
          <td>{{ data.nomor_hp }}</td>
          <td>
            <img :src="data.keterangan" alt="struk" style="width: 150px" />
          </td>
          <td>
            <router-link
              :to="{ name: 'updateDonatur', params: { id: data.id } }"
              class="btn btn-warning me-3"
              >Update</router-link
            >
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="deleteDonatur(data.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

const allData = 'https://lutproject.my.id/donasi/readalldonasi.php';
const postApi = 'https://lutproject.my.id/donasi/insertdonasi.php';
const delApi = 'https://lutproject.my.id/donasi//deletebyid.php';

export default {
  data() {
    return {
      donatur: ref([]),
      insertNama: '',
      insertTanggal: '',
      insertJumlah: '',
      insertNomorHp: '',
      file: '',
    };
  },
  mounted() {
    this.readData();
  },
  methods: {
    readData() {
      axios
        .get(allData)
        .then((resp) => {
          console.log(resp);
          this.donatur = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postDonatur() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();

      formData.append('nama', this.insertNama);
      formData.append('tanggal', this.insertTanggal);
      formData.append('jumlah', this.insertJumlah);
      formData.append('nomor_hp', this.insertNomorHp);
      formData.append('keterangan', this.file);

      axios
        .post(postApi, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((resp) => {
          console.log(resp.data);
          this.readData();
          this.insertNama = '';
          this.insertJumlah = '';
          this.insertNomorHp = '';
          this.insertTanggal = '';
          this.$refs.file.value = '';
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteDonatur(id) {
      if (confirm('Apakah anda ingin mendelete data ??')) {
        axios
          .get(delApi + '?id=' + id)
          .then((resp) => {
            console.log(resp);
            this.readData();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    logout() {
      if (confirm('Apakah kamu ingin LogOut ?')) {
        this.$router.push('/');
      }
    },
  },
};
</script>
