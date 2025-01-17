document.getElementById('paymentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Ambil nilai dari borang
    const namaAhli = document.getElementById('namaAhli').value;
    const nomborTelefon = document.getElementById('nomborTelefon').value;
    const nomborRumah = document.getElementById('nomborRumah').value;
    const tarikhBayaran = document.getElementById('tarikhBayaran').value;
    const amaunBayaran = document.getElementById('amaunBayaran').value;

    // Hantar data ke Google Apps Script
    const response = await fetch('https://script.google.com/macros/s/AKfycbzx9DA_95obXNTvQ2cPIxtL5rrY0Lbi-mKNvzW0HtbGpwx8hWxdvpFop_ttkW-GSE8wVw/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ namaAhli, nomborTelefon, nomborRumah, tarikhBayaran, amaunBayaran }),
    });

    const result = await response.json();
    document.getElementById('statusMessage').textContent = result.message;
});
