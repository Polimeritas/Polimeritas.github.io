$(document).ready(function () {
  Swal.fire({
    //   title: "Partner Room",
    //   text: "Partner room ..."
    imageUrl: "./img/content/popupjeruk.jpg",
    imageWidth: 1080,
    imageHeight: 720,
    confirmButtonText: "Learn more",
    imageAlt: "Custom image",
    customClass: {
      popup: "custom-swal-size",
    },
    showCloseButton: true,
  }).then((x) => {
    if (x.isConfirmed) {
      window.location.href = "partner-room.html";
    }
  });
});
