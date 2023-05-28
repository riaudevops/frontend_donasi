<script>
import axios from 'axios';
import { ref } from 'vue';

const dataAll = 'https://lutproject.my.id/donasi//readalldonasi.php';
const loginApi = 'https://lutproject.my.id/donasi/login.php';

export default {
  data() {
    return {
      allDonatur: ref([]),
      username: '',
      password: '',
      stts: '',
      data: '',
    };
  },
  mounted() {
    this.getAllDonatur();
  },
  methods: {
    getAllDonatur() {
      axios
        .get(dataAll)
        .then((resp) => {
          console.log(resp);
          this.allDonatur = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login() {
      let formData = new FormData();

      formData.append('username', this.username);
      formData.append('password', this.password);

      axios
        .post(loginApi, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.status == 200 && resp.data.data.username == this.username) {
            // console.log('login berhasil');
            localStorage.setItem('user-info', JSON.stringify(resp.data[0]));
            this.$router.push({ name: 'dashboard' });
          }
          if (resp.message == 'Request failed with status code 404') {
            console.log('gagal login');
          }
        })
        .catch((err) => {
          // console.log(err);
          alert('Username dan Password Kamu Salah!!!');
        });
    },
  },
};
</script>
<template>
  <!--navbar -->
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Masjid Al-Ikhlas</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Masjid Al-Ikhlas
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Silahkan Login</a
              >
            </li>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                v-model="username"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Username" />
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                v-model="password"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Password" />
            </div>
            <button type="button" class="btn btn-primary" v-on:click="login">
              Login
            </button>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- page content -->
  <!-- <img src="../assets/masjid2.jpg" class="img-fluid" alt="..."> -->
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="../assets/masjid1.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block mb-5">
          <h2 style="color: aliceblue">Masjid AL-Ikhlas</h2>
          <p style="color: aliceblue">Jl.Menuju Kebaikan</p>
          <a href="#table"
            ><button type="button" class="btn btn-secondary">
              Selengkapnya
            </button></a
          >
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../assets/masjid2.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block mb-5">
          <h2 style="color: aliceblue">Masjid AL-Ikhlas</h2>
          <p style="color: aliceblue">Jl.Menuju Kebaikan</p>
          <a href="#table"
            ><button type="button" class="btn btn-secondary">
              Selengkapnya
            </button></a
          >
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/masjid3.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block mb-5">
          <h2 style="color: aliceblue">Masjid AL-Ikhlas</h2>
          <p style="color: aliceblue">Jl.Menuju Kebaikan</p>
          <a href="#table"
            ><button type="button" class="btn btn-secondary">
              Selengkapnya
            </button></a
          >
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container mb-5">
    <div class="headerpapan">
      <h1>
        Papan Donasi <br />
        Masjid Al-Ikhlas
      </h1>
    </div>
    <table class="table border table-hover mt-5" id="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama Donatur</th>
          <th scope="col">Tanggal</th>
          <th scope="col">Jumlah</th>
          <th scope="col">Nomor Hp</th>
          <th scope="col">Bukti</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, idx) in allDonatur" v-bind:key="data.id">
          <th scope="row">{{ idx + 1 }}</th>
          <td>{{ data.nama }}</td>
          <td>{{ data.tanggal }}</td>
          <td>{{ data.jumlah }}</td>
          <td>{{ data.nomor_hp }}</td>
          <td>
            <img :src="data.keterangan" alt="struk" style="width: 100px" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.nav-link {
  margin-bottom: 10px;
  font-size: 30px;
  text-align: center;
}

.headerpapan {
  margin-top: 70px;
  text-align: center;
}

/* .img-fluid {
        height: 880px;
        width: 1650px;
    } */
</style>
