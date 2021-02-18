const endpoint_url = 'https://51018009.p-web.click/srvfinal/api';

function getPinjaman() {
  fetch(endpoint_url + "/pinjaman/pinjamanmahasiswa")
  .then(status)
  .then(json)
  .then(function(data){
    var tb_header = `
      <table id="tb_pinjaman">
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Judul Buku</th>
			<th>Tanggal dipinjam</th>
            <th>Tanggal kembali</th>
            <th>Tanggal dikembalikan</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    $("#dttable").html(tb_header);
    $("#tb_title").html("Pinjaman");

    $('#tb_pinjaman').DataTable({
      "data": data.pinjaman,
      "columns": [
        {"data": "nim"},
        {"data": "nama"},
        {"data": "judulbuku"},
		{"data": "TPinjam"},
        {"data": "TKembali"},
		{"data": "TDikembalikan"}
      ]
    });
    $('select').formSelect();
  })
  .catch(error);
}

function getBuku(){
  fetch(endpoint_url + "/buku/buku")
  .then(status)
  .then(json)
  .then(function(data){
    var tb_header = `
      <table id="tb_buku">
        <thead>
          <tr>
            <th>Nomor Buku</th>
            <th>Judul Buku</th>
            <th>Penerbit</th>
            <th>Pengarang/th>
			<th>Tahun Terbit/th>
          </tr>
        </thead>
      <tbody></tbody>
    </table>
    `;

    $("#dttable").html(tb_header);
    $("#tb_title").html("buku");

    $('#tb_buku').DataTable({
      "data": data.rooms,
      "columns": [
        {"data": "nobuku"},
        {"data": "judulbuku"},
        {"data": "penerbit"},
        {"data": "pengarang"},
		{"data": "tahunterbit"}
      ]
    });
    $('select').formSelect();
  })
  .catch(error);
}
