const coins = document.querySelectorAll(".coin");

coins.forEach(coin => {
  const sound = new Audio("assets/sounds/coin.wav");

  coin.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play();
  });
});

// Animate coin to move across screen
coins.forEach(coin => {
  let position = 0;
  let direction = 1; // 1 = right, -1 = left
  const speed = 2;
  
  function moveCoin() {
    position += speed * direction;
    
    // Get the width of the viewport and coin
    const maxPosition = window.innerWidth - coin.offsetWidth;
    
    // Reverse direction at edges
    if (position >= maxPosition) {
      position = maxPosition;
      direction = -1;
    } else if (position <= 0) {
      position = 0;
      direction = 1;
    }
    
    coin.style.position = 'absolute';
    coin.style.left = position + 'px';
    
    requestAnimationFrame(moveCoin);
  }
  
  moveCoin();
});


const powerUps = document.querySelectorAll(".power-up");

powerUps.forEach(item => {
  const sound = new Audio("assets/sounds/powerup.wav");

  item.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play();
  });
});


const pipes = document.querySelectorAll(".pipe");

pipes.forEach(pipe => {
  const sound = new Audio("assets/sounds/pipe.wav");

  pipe.addEventListener("click", () => {
    sound.play();
  });
});


const blocks = document.querySelectorAll(".block");

blocks.forEach((block, index) => {
  block.addEventListener("click", () => {
    if (block.textContent === "?") {
      block.textContent = ["WIP", "LAB", "IDEA"][index];
    }
  });
});


const castle = document.querySelector(".world-castle");
const victorySound = new Audio("assets/sounds/victory.wav");

let played = false;

castle.addEventListener("mouseenter", () => {
  if (!played) {
    victorySound.play();
    played = true;
  }
});

// Experience tab switching
const companyTabs = document.querySelectorAll(".company-tab");
const jobPanels = document.querySelectorAll(".job-panel");

if (companyTabs.length > 0 && jobPanels.length > 0) {
  companyTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const company = tab.dataset.company;
      
      // Remove active from all tabs and panels
      companyTabs.forEach(t => t.classList.remove("active"));
      jobPanels.forEach(p => {
        p.style.display = "none";
        p.classList.remove("active");
      });
      
      // Add active to clicked tab and corresponding panel
      tab.classList.add("active");
      const activePanel = document.querySelector(`.job-panel[data-company="${company}"]`);
      if (activePanel) {
        activePanel.style.display = "block";
        activePanel.classList.add("active");
      }
    });
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});