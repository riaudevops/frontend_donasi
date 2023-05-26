<script></script>
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
            <button type="button" class="btn btn-primary">Login</button>
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
        <tr>
          <td>1</td>
          <td>Aji</td>
          <td>2023-05-20</td>
          <td>Rp.1.000.000</td>
          <td>089618095798</td>
          <td>
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FStruk&psig=AOvVaw04T_3L0vqUdQBLPSvVtF6U&ust=1685231393802000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjQmaeWlP8CFQAAAAAdAAAAABAE"
              alt="struk"
              style="width: 150px" />
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
