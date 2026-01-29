document.addEventListener("DOMContentLoaded", function () {
    
    // Kita cek dulu apakah elemen canvas ada, agar tidak error
    const canvasElement = document.getElementById('chart');

    if (canvasElement) {
        const ctx = canvasElement.getContext('2d');

        new Chart(ctx, {
            type: 'bar', // Gunakan 'bar' agar lebih cocok untuk perbandingan bulanan
            data: {
                // Label Bulan sesuai data di Tabel Dashboard (3 bulan terakhir)
                labels: ['Oktober 2025', 'November 2025', 'Desember 2025'],
                datasets: [
                    {
                        label: 'Kas Masuk',
                        // Data sesuai tabel: 120rb, 150rb, 130rb
                        data: [120000, 150000, 130000],
                        backgroundColor: '#2ecc71', // Hijau
                        borderRadius: 5,
                        borderWidth: 0
                    },
                    {
                        label: 'Kas Keluar',
                        // Data Simulasi
                        data: [20000, 50000, 30000],
                        backgroundColor: '#ff6b6b', // Merah
                        borderRadius: 5,
                        borderWidth: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Wajib false agar grafik tidak gepeng/hilang
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            // Menambahkan format Rp di Tooltip
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('id-ID', { 
                                        style: 'currency', 
                                        currency: 'IDR',
                                        minimumFractionDigits: 0 
                                    }).format(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f0f0f0'
                        },
                        ticks: {
                            // Menambahkan 'Rp' di sumbu Y
                            callback: function(value) {
                                return 'Rp ' + (value / 1000) + 'rb'; 
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    } else {
        console.error("Canvas element dengan id 'chart' tidak ditemukan!");
    }
});