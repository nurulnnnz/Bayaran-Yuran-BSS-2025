document.getElementById('paymentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Ambil nilai dari borang
    const namaAhli = document.getElementById('namaAhli').value;
    const nomborTelefon = document.getElementById('nomborTelefon').value;
    const nomborRumah = document.getElementById('nomborRumah').value;
    const tarikhBayaran = document.getElementById('tarikhBayaran').value;
    const amaunBayaran = document.getElementById('amaunBayaran').value;

    // Hantar data ke Google Apps Script
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzx9DA_95obXNTvQ2cPIxtL5rrY0Lbi-mKNvzW0HtbGpwx8hWxdvpFop_ttkW-GSE8wVw/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                namaAhli,
                nomborTelefon,
                nomborRumah,
                tarikhBayaran,
                amaunBayaran,
            }),
        });
        console.log('Data yang dihantar:', {
    namaAhli,
    nomborTelefon,
    nomborRumah,
    tarikhBayaran,
    amaunBayaran
});

const result = await response.json();
console.log('Respons dari server:', result);

if (response.ok) {
    document.getElementById('statusMessage').textContent = result.message;
} else {
    document.getElementById('statusMessage').textContent = 'Ralat berlaku semasa menghantar data.';
}

        const result = await response.json();
        document.getElementById('statusMessage').textContent = result.message;
   } catch (error) {
    console.error('Ralat semasa menghantar data:', error);
    document.getElementById('statusMessage').textContent = 'Ralat berlaku semasa menghantar data.';
}

});
