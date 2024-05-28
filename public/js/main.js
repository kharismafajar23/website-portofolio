const kontakInfo = [
  { icon: 'bx bx-envelope', title: 'Email', info: 'restuistyo@gmail.com', link: 'mailto:restuistyo@gmail.com' },
  { icon: 'bx bxl-whatsapp', title: 'WhatsApp', info: '+62 878 2433 6313', link: 'https://wa.me/6287824336313' },
  { icon: 'bx bxl-messenger', title: 'Messenger', info: 'Kharisma Fajar', link: 'https://m.me/kharisma.fajar.77' },
];

const daftarSosialMedia = [
  { nama: 'Instagram', icon: 'bx bxl-instagram-alt', link: 'https://www.instagram.com/kharisma_fajar23' },
  { nama: 'Facebook', icon: 'bx bxl-facebook-square', link: 'https://web.facebook.com/kharisma.fajar.77' },
  { nama: 'Github', icon: 'bx bxl-github', link: 'https://github.com/kharismafajar23' },
  { nama: 'Linkedin', icon: 'bx bxl-linkedin', link: 'https://www.linkedin.com/in/kharisma-fajar-054117185/' },
];

// Add Shadow in header
function scrollHeader() {
  const header = document.querySelector('header');
  if (this.scrollY >= 50) header.classList.add('shadow-md');
  else header.classList.remove('shadow-md');
}
window.addEventListener('scroll', scrollHeader);

function alpineData() {
  return {
    toggle: 0,
  };
}

function portofolioData() {
  return {
    daftarPortofolio: [],
    initData: function () {
      axios
        .get('https://latihanapi-241804.firebaseio.com/daftarPortofolio.json', {})
        .then((response) => {
          this.daftarPortofolio = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  };
}

function sertifikatData() {
  return {
    daftarSertifikat: [],
    initData: function () {
      axios
        .get('https://latihanapi-241804.firebaseio.com/daftarSertifikat.json', {})
        .then((response) => {
          this.daftarSertifikat = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  };
}

function showModal() {
  const portofolioModal = document.querySelectorAll('.portofolio_modal');
  const portoBtn = document.querySelectorAll('.modal_btn');
  const closeBtn = document.querySelectorAll('.close_modal');

  let modal = function (modalClick) {
    portofolioModal[modalClick].classList.remove('hidden');
    portofolioModal[modalClick].classList.add('grid');
  };

  portoBtn.forEach((mb, i) => {
    mb.addEventListener('click', () => {
      modal(i);
    });
  });

  closeBtn.forEach((close) => {
    close.addEventListener('click', () => {
      portofolioModal.forEach((portoModal) => {
        portoModal.classList.add('hidden');
        portoModal.classList.remove('grid');
      });
    });
  });
}

// Kirim Form Pesan
function kirimPesan() {
  const nama = document.getElementById('input_nama').value;
  const email = document.getElementById('input_email').value;
  const pesan = document.getElementById('input_pesan').value;
  const serviceID = 'service_ftx19nv';
  const templateID = 'template_2gpxsd3';

  if (nama !== '' && email !== '' && pesan !== '') {
    emailjs;
    emailjs
      .send(serviceID, templateID, {
        to_name: 'Kharisma Fajar',
        nama: nama,
        email: email,
        pesan: pesan,
      })
      .then((res) => {
        document.getElementById('input_nama').value = '';
        document.getElementById('input_email').value = '';
        document.getElementById('input_pesan').value = '';
        console.log(res);
        alert('Pesan anda telah dikirim. Terima kasih');
      })
      .catch((err) => console.log(err));
  } else {
    alert('Mohon isi form terlebih dahulu');
  }
}
