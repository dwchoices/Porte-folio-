<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio Ultime++ - TAMEKLO Komlan Mawuli</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Roboto', sans-serif; background:#f4f4f9; color:#222; scroll-behavior:smooth; }

/* Header */
header { background: linear-gradient(90deg,#1a1a1a,#333); color:white; padding:5rem 1rem; text-align:center; position:relative; overflow:hidden; }
header h1 { font-size:3rem; margin-bottom:1rem; letter-spacing:2px; }
header h1 span { opacity:0; display:inline-block; animation:fadeInLetter 1s forwards; }
header p { font-size:1.2rem; margin-bottom:1.5rem; animation:fadeInUp 1s ease forwards; }
@keyframes fadeInLetter { to {opacity:1; transform:translateY(0);} from {opacity:0; transform:translateY(-20px);} }
@keyframes fadeInUp { from {opacity:0; transform:translateY(30px);} to {opacity:1; transform:translateY(0);} }

/* Buttons */
.btn { background:#ff6f00; color:white; padding:1rem 2rem; border:none; border-radius:10px; cursor:pointer; font-weight:bold; text-decoration:none; display:inline-block; transition:all 0.3s; }
.btn:hover { background:#e65c00; transform:scale(1.1); box-shadow:0 8px 20px rgba(0,0,0,0.3); }

/* Navigation */
nav { display:flex; justify-content:center; gap:2rem; background:#222; padding:1rem 0; position:sticky; top:0; z-index:1000; }
nav a { color:white; text-decoration:none; font-weight:bold; transition:color 0.3s; }
nav a:hover { color:#ff6f00; }

/* Sections */
section { max-width:1100px; margin:3rem auto; padding:0 1rem; opacity:0; transform:translateY(50px); transition:all 0.8s ease; }
section.visible { opacity:1; transform:translateY(0); }
h2 { text-align:center; margin-bottom:2rem; color:#111; font-size:2rem; position:relative; }
h2::after { content:''; width:60px; height:3px; background:#ff6f00; display:block; margin:0.5rem auto 0; border-radius:2px; }

/* Cards */
.projects, .skills, .testimonials { display:grid; gap:2rem; }
.project-card, .skill-card, .testimonial-card { background:linear-gradient(145deg, #ffffff, #e6f0ff); padding:2rem; border-radius:20px; box-shadow:0 6px 20px rgba(0,0,0,0.1); transition:all 0.5s; position:relative; }
.project-card:hover, .skill-card:hover, .testimonial-card:hover { transform:translateY(-10px) scale(1.02); box-shadow:0 12px 30px rgba(0,0,0,0.25); }
.project-card h3, .skill-card h3, .testimonial-card h3 { margin-bottom:0.7rem; display:flex; align-items:center; gap:0.5rem; }

/* Tooltips for skills */
.skill-card { cursor:pointer; }
.skill-card span.tooltip { visibility:hidden; width:200px; background:#ff6f00; color:white; text-align:center; padding:5px; border-radius:5px; position:absolute; bottom:110%; left:50%; transform:translateX(-50%); opacity:0; transition:opacity 0.3s; }
.skill-card:hover span.tooltip { visibility:visible; opacity:1; }

/* Workflow video */
.video-section { text-align:center; margin:2rem 0; }
iframe { border-radius:15px; max-width:100%; height:400px; transition:transform 0.3s; }
iframe:hover { transform:scale(1.05); }

/* Contact */
#contact p, #contact a { margin:0.5rem 0; }
#contact a.btn { margin-top:1rem; }

/* Footer */
footer { text-align:center; padding:2rem 1rem; background:#1a1a1a; color:white; margin-top:3rem; }

/* Responsive */
@media(min-width:768px) { .projects, .skills, .testimonials { grid-template-columns: repeat(2,1fr); } }
@media(min-width:1024px) { .projects, .skills, .testimonials { grid-template-columns: repeat(3,1fr); } }

/* Scroll reveal for cards */
.project-card, .skill-card, .testimonial-card { opacity:0; transform:translateY(50px); transition:all 0.8s ease; }
.project-card.visible, .skill-card.visible, .testimonial-card.visible { opacity:1; transform:translateY(0); }
</style>
</head>
<body>

<header>
  <h1>
    <!-- Animation letters -->
    <span>T</span><span>A</span><span>M</span><span>E</span><span>K</span><span>L</span><span>O</span> <span>K</span><span>o</span><span>m</span><span>l</span><span>a</span> <span>M</span><span>a</span><span>w</span><span>u</span><span>l</span><span>i</span>
  </h1>
  <p>Full-Stack Developer & Automation Expert | React • Node.js • n8n • AI</p>
  <p>Hello! I'm TAMEKLO, passionate about building high-performing web apps and intelligent workflows. I help clients save time and boost productivity through automation and clean coding.</p>
  <a href="#contact" class="btn">Contact Me Now</a>
</header>

<nav>
  <a href="#projects">Projets</a>
  <a href="#skills">Compétences</a>
  <a href="#workflow">Workflow</a>
  <a href="#testimonials">Avis</a>
  <a href="#contact">Contact</a>
</nav>

<section id="projects">
  <h2>Mes Projets</h2>
  <div class="projects">
    <div class="project-card">
      <h3><i class="fas fa-laptop-code"></i> Portfolio Web Moderne</h3>
      <p>React + HTML/CSS + JS. Design responsive et interface moderne.</p>
      <p><strong>Lien :</strong> <a href="https://github.com/Dwchoices/dw" target="_blank">Voir sur GitHub</a></p>
    </div>
    <div class="project-card">
      <h3><i class="fas fa-cogs"></i> Workflow Automatisé n8n</h3>
      <p>Automation JSON pour gestion clients et Google Sheets.</p>
    </div>
    <div class="project-card">
      <h3><i class="fas fa-chart-line"></i> Dashboard Interactif</h3>
      <p>Visualisation des données clients avec filtres, tri et graphes dynamiques.</p>
    </div>
    <div class="project-card">
      <h3><i class="fas fa-robot"></i> Prototype AI / ML</h3>
      <p>Application ML sur Android pour prédiction de données, intégrant Python et TensorFlow.</p>
    </div>
  </div>
</section>

<section id="skills">
  <h2>Mes Compétences</h2>
  <div class="skills">
    <div class="skill-card"><h3><i class="fas fa-code"></i> Frontend</h3><p>HTML, CSS, JavaScript, React, UI/UX moderne</p><span class="tooltip">Création d'interfaces réactives et modernes, responsive sur tous les écrans.</span></div>
    <div class="skill-card"><h3><i class="fas fa-server"></i> Backend</h3><p>Node.js, Express, API, Bases de données, Automatisation</p><span class="tooltip">Gestion des bases de données, API sécurisées et intégration backend robuste.</span></div>
    <div class="skill-card"><h3><i class="fas fa-robot"></i> Automation & AI</h3><p>n8n, JSON, Python, Machine Learning</p><span class="tooltip">Automatisation des tâches répétitives et intégration IA pour solutions intelligentes.</span></div>
    <div class="skill-card"><h3><i class="fas fa-shield-alt"></i> Sécurité</h3><p>Cybersecurity, protection des données, scripts automatisés</p><span class="tooltip">Protection des données sensibles et scripts sécurisés pour clients exigeants.</span></div>
  </div>
</section>

<section id="workflow">
  <h2>Workflow et Automatisation</h2>
  <p>Je conçois des workflows complets pour automatiser vos tâches professionnelles :</p>
  <ul>
    <li>n8n : automatisation Google Sheets, emails, notifications, API</li>
    <li>Python : scripts pour traitement de données et actions répétitives</li>
    <li>Synchronisation frontend / backend</li>
  </ul>
  <div class="video-section">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Exemple Workflow" allowfullscreen></iframe>
  </div>
</section>

<section id="testimonials">
  <h2>Avis Clients</h2>
  <div class="testimonials">
    <div class="testimonial-card">
      <h3><i class="fas fa-user"></i> Lisa T.</h3>
      <p>"Travail impeccable, livraison rapide et respect des instructions. Hautement recommandé !"</p>
    </div>
    <div class="testimonial-card">
      <h3><i class="fas fa-user"></i> Client Upwork</h3>
      <p>"Très professionnel, comprend rapidement le besoin et propose des solutions efficaces."</p>
    </div>
  </div>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p>📧 Email : claudetameklo91@gmail.com</p>
  <p>📱 WhatsApp / Telegram : +XXX XXXXXXXX</p>
  <p>💼 Portfolio GitHub : <a href="https://github.com/Dwchoices/dw" target="_blank">https://github.com/Dwchoices/dw</a></p>
  <a href="mailto:claudetameklo91@gmail.com" class="btn">Envoyer un message</a>
</section>

<footer>
  <p>© 2025 TAMEKLO Komlan Mawuli. Tous droits réservés.</p>
</footer>

<script>
  // Scroll reveal avec delay pour cartes
  const sections = document.querySelectorAll('section');
  const cards = document.querySelectorAll('.project-card, .skill-card, .testimonial-card');
  window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < triggerBottom){ section.classList.add('visible'); }
    });
    cards.forEach((card,index) => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < triggerBottom){ setTimeout(()=>{card.classList.add('visible');}, index*150); }
    });
  });
</script>

</body>
</html>
