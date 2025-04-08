const contactUs = document.getElementById('contactUs');
const makeAppointment = document.getElementById('makeAppointment');


// Home Page
document.querySelectorAll(".panel").forEach(panel => {
  panel.addEventListener("click", () => {
    window.location.href = panel.getAttribute("data-url");
  });
});

// PM Page
document.querySelectorAll(".scroll-container img").forEach(img => {
  img.addEventListener("click", function() {
    img.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center"});
  });
});
// SCROLL TO IMAGE
document.querySelectorAll(".scroll-container-thumbs img").forEach(thumb => {
  //thumb.addEventListener("mouseenter", function() {
  thumb.addEventListener("click", function() {
    const targetId = this.getAttribute("data-target");
    const targetImage = document.getElementById(targetId);

    if (targetImage) {
      targetImage.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center"});
      //thumb.style.border = "3px solid #D3D3D3"
    }
  });

  // thumb.addEventListener("mouseleave", function() {
  //   thumb.style.border = "0px solid #D3D3D3"; // Reset to original border
  // });
});


//
contactUs.addEventListener('click', function() {
    window.location.href = "mailto:expeditioner001@gmail.com?subject=New Brakes&body=Hello Expeditioner Mechanics,%0AI am interested in new brakes but I have a question.";
});
makeAppointment.addEventListener('click', async function() {
  window.location.href = "appointment.html";
});

//
// Apointment
//
//






function toggleDropdown() {
  document.getElementById("dropdown-menu-years").classList.toggle("show");
}
// Close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
fetch('csv/years.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.trim().split('\n').slice(1); // skip header
    const dropdown = document.getElementById('dropdown-menu-years');
    dropdown.innerHTML = ''; // clear existing items

    lines.forEach(year => {
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = year;

      // Add event listener to each item
      a.addEventListener('click', function() {
        // Update the button text
        document.querySelector('.btn-text').textContent = year;
        // Hide the dropdown after selecting a year
        dropdown.classList.remove('show');
      });

      dropdown.appendChild(a);
    });
  });
