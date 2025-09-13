function startOrder(product) {
  localStorage.setItem('currentProduct', product);
  window.location.href = 'payment.html';
}

function goToForm() {
  const fileInput = document.getElementById("buktiPembayaran");
  if (!fileInput.files || fileInput.files.length === 0) {
    alert("Silakan upload bukti transfer terlebih dahulu!");
    return;
  }

  const currentProduct = localStorage.getItem('currentProduct');
  const isJasteb = currentProduct.toLowerCase().includes("jasteb vvip");

  if (isJasteb) {
    window.location.href = 'form_jasteb.html';
  } else {
    window.location.href = 'form_biasa.html';
  }
}
});
