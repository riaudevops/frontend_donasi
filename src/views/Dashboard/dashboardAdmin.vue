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
      <button class="btn btn-primary">LogOut</button>
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
            <button type="button" class="btn btn-primary">
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
          <td>
            <button class="btn btn-warning me-3">Update</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script></script>
