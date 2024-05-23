// TODO Link Indicator
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}
item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})
// TODO End Link Indicator

// TODO Scrol Top

let toTop = document.getElementById('toTop');
toTop.style.display = 'none';
window.addEventListener('scroll', () => {
    if (this.scrollY > 500) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }
})
toTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// TODO End Scrol Top

// TODO Start Form

function Login() {
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        if (email === "jabinsarsaragih@gmail.com" && pass === "123") {
            alert("Selamat anda berhasil login");
        } else {
            alert("Username dan password anda salah!");
        }
    }

// TODO End Form