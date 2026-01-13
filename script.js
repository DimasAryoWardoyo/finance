document.getElementById('kasMasuk').onclick = () => {
  alert('Form Tambah Kas Masuk');
};

document.getElementById('kasKeluar').onclick = () => {
  alert('Form Tambah Kas Keluar');
};

const ctx = document.getElementById('chart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Kas Masuk',
        data: [400, 700, 850, 1200, 1100, 1500],
        borderColor: '#2ecc71',
        tension: 0.3
      },
      {
        label: 'Kas Keluar',
        data: [200, 450, 550, 700, 650, 900],
        borderColor: '#ff6b6b',
        tension: 0.3
      }
    ]
  }
});
