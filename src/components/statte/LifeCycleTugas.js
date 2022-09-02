import React from "react";
import "../statte/lf.css";
const Api = [
  {
    nama: "gelas",
    harga: 3000,
    stoct: 50,
  },
  {
    nama: "piring",
    harga: 5000,
    stoct: 50,
  },
  {
    nama: "plastik",
    harga: 1000,
    stoct: 50,
  },
];

export default class Lifecycletugas extends React.Component {
  constructor() {
    super();
    this.state = {
      totalHarga: 0,
      products: [],
      cartsitem: [],
    };
  }

  componentDidMount() {
    this.setState({ products: Api });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartsitem.length !== this.state.cartsitem.length) {
      let totalHarga = 0;
      for (let cart of this.state.cartsitem) {
        totalHarga = totalHarga + cart.harga;
      }

      this.setState({ totalHarga: totalHarga });
    }
  }

  tambah(produks) {
    console.log("masuk");
    const keranjang = [...this.state.cartsitem];
    keranjang.push(produks);
    this.setState({ cartsitem: keranjang });
  }
  hapus(item) {
    console.log("hapus");
    const keranjanghps = [...this.state.cartsitem];
    keranjanghps.splice(keranjanghps.indexOf(item), 1);
    this.setState({ cartsitem: keranjanghps });
  }

  render() {
    return (
      <>
        {/* <ul>
          {this.state.products.map((product) => (
            <li>
              {product.nama} | Rp. {product.harga} | {product.stoct} |
              <button onClick={() => this.tambah(product)}>Tambah</button>
            </li>
          ))}
        </ul> */}
        <p>Produk</p>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Barang</th>
              <th>Stok</th>
              <th>Tambah</th>
            </tr>
          </thead>
          {this.state.products.map((barang) => (
            <tbody>
              <tr>
                <td>{barang.nama}</td>
                <td>{barang.harga}</td>
                <td>{barang.stoct}</td>
                <td>
                  <button onClick={() => this.tambah(barang)}>Tambah</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <p>Daftar Keranjang</p>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Barang</th>
              <th>Stok</th>
              <th>Hapus</th>
            </tr>
          </thead>
          {this.state.cartsitem.map((cart) => (
            <tbody>
              <tr>
                <td>{cart.nama}</td>
                <td>{cart.harga}</td>
                <td>{cart.stoct}</td>
                <td>
                  <button onClick={() => this.hapus(cart)}>Hapus</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <p>Total Harga: {this.state.totalHarga}</p>
      </>
    );
  }
}
