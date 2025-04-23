// script.js
const translations = {
  en: {
    home: 'Home',
    menu: 'Menu',
    about: 'About Us',
    reservations: 'Reservations',
    contact: 'Contact',
    gallery: 'Gallery',
    reviews: 'Testimonials',
    directions: 'Get Directions',
    call: 'Call',
    email: 'Email',
    hours: 'Hours: Sun–Wed 10AM–12AM | Thu–Sat 10AM–2AM',
    drinks: 'Drinks',
    seafood: 'Seafood',
    appetizers: 'Appetizers',
    snacks: 'Tasty Snacks',
    'food-menu': 'Special Food Menu',
    'special-dishes': 'Special Dishes',
    'burritos-meats': 'Burritos & Meats',
    torres: 'Torres',
    welcome_section: 'Welcome Section',
    hero_instruction: '[HERO IMAGE GOES HERE] This prime real-estate is your hero banner—swap in a stunning, high-resolution photo of your signature dish or your vibrant dining room. It sets the tone for every visitor’s first impression.',
    intro_message: '[WELCOME MESSAGE HERE] Use this space to greet guests and tell them what makes La Malquerida special. A short, punchy sentence or two is perfect: “Bold Mexican seafood, handcrafted cocktails, and a lively atmosphere await you.”',
    our_story: 'Our Story',
    mission: 'Mission & Values',
    team: 'Meet the Team',
    testimonials: 'Testimonials'
  },
  es: {
    home: 'Inicio',
    menu: 'Menú',
    about: 'Nosotros',
    reservations: 'Reservaciones',
    contact: 'Contacto',
    gallery: 'Galería',
    reviews: 'Testimonios',
    directions: 'Direcciones',
    call: 'Llamar',
    email: 'Correo electrónico',
    hours: 'Horario: Dom–Mié 10AM–12AM | Jue–Sáb 10AM–2AM',
    drinks: 'Bebidas',
    seafood: 'Mariscos',
    appetizers: 'Aperitivos',
    snacks: 'Botanas',
    'food-menu': 'Menú Especial',
    'special-dishes': 'Platillos Especiales',
    'burritos-meats': 'Burritos y Carnes',
    torres: 'Torres',
    welcome_section: 'Sección de Bienvenida',
    hero_instruction: '[AQUÍ VA LA IMAGEN PRINCIPAL] Este espacio es tu banner principal—coloca una foto de alta resolución de tu platillo estrella o de tu vibrante comedor. Marca el tono para cada visitante.',
    intro_message: '[MENSAJE DE BIENVENIDA AQUÍ] Usa este espacio para saludar a los clientes y decirles qué hace especial a La Malquerida. Una frase breve y directa: “Mariscos mexicanos audaces, cócteles artesanales y ambiente vibrante te esperan.”',
    our_story: 'Nuestra Historia',
    mission: 'Misión y Valores',
    team: 'Conoce al Equipo',
    testimonials: 'Testimonios'
  }
};

let currentLang = 'en';

function updateText() {
  document.querySelectorAll('[data-i18n-key]').forEach(el => {
    const key = el.getAttribute('data-i18n-key');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateText();
  const toggleBtn = document.getElementById('languageToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentLang = (currentLang === 'en') ? 'es' : 'en';
      toggleBtn.textContent = currentLang === 'en'
        ? '🌐 ENGLISH / ESPAÑOL'
        : '🌐 ESPAÑOL / ENGLISH';
      updateText();
    });
  }
});
