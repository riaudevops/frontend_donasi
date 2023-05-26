<template>
  <div class="m-5 border border-radius p-5">
    <h1 class="mb-4">Edit Donatur</h1>
    <input
      class="form-control"
      type="text"
      placeholder="Nama Donatur"
      aria-label="default input example" /><br />
    <input
      class="form-control"
      type="date"
      placeholder="Tanggal"
      aria-label="default input example" /><br />
    <input
      class="form-control"
      type="text"
      placeholder="Jumlah Donasi"
      aria-label="default input example" /><br />
    <input
      class="form-control"
      type="text"
      placeholder="Nomor HP"
      aria-label="default input example" /><br />
    <div class="mb-3">
      <input class="form-control" type="file" ref="file" />
      <img :src="file" alt="struk" style="width: 120px; margin-top: 10px" />
    </div>

    <div class="mt-5">
      <button class="btn btn-secondary me-5">Back</button>
      <button type="button" class="btn btn-primary">Update Donatur</button>
    </div>
  </div>
</template>
<script></script>
