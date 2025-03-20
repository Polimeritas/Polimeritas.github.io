$(document).ready(function () {
  Swal.fire({
    //   title: "Partner Room",
    //   text: "Partner room ..."
    imageUrl: "./img/modal-partner-room.jpg",
    imageWidth: 800,
    imageHeight: 600,
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
