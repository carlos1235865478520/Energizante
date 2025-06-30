document.addEventListener('DOMContentLoaded', () => {
  const openVentajasModal = document.getElementById('openVentajasModal');
  const ventajasModal = document.getElementById('ventajasModal');

  const openIngredientesModal = document.getElementById('openIngredientesModal');
  const ingredientesModal = document.getElementById('ingredientesModal');

  const openContactModal = document.getElementById('openContactModal');
  const contactModal = document.getElementById('contactModal');

  const openProductosModal = document.getElementById('openProductosModal');
  const productosModal = document.getElementById('productosModal');

  // Función para cerrar todos los modales
  function cerrarModales() {
    [ventajasModal, ingredientesModal, contactModal, productosModal].forEach(modal => {
      modal?.classList.remove('active');
    });
    document.body.style.overflow = '';
  }

  // Abrir modal de ventajas
  if (openVentajasModal && ventajasModal) {
    openVentajasModal.addEventListener('click', e => {
      e.preventDefault();
      cerrarModales();
      ventajasModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Abrir modal de ingredientes
  if (openIngredientesModal && ingredientesModal) {
    openIngredientesModal.addEventListener('click', e => {
      e.preventDefault();
      cerrarModales();
      ingredientesModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Abrir modal de contacto
  if (openContactModal && contactModal) {
    openContactModal.addEventListener('click', e => {
      e.preventDefault();
      cerrarModales();
      contactModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Abrir modal de productos
  if (openProductosModal && productosModal) {
    openProductosModal.addEventListener('click', e => {
      e.preventDefault();
      cerrarModales();
      productosModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Cerrar modales al hacer clic en cualquier otro enlace del menú que no sean los botones de abrir modales
  document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      if (
        link.id !== 'openVentajasModal' &&
        link.id !== 'openIngredientesModal' &&
        link.id !== 'openContactModal' &&
        link.id !== 'openProductosModal'
      ) {
        cerrarModales();
      }
    });
  });

  // Cerrar modales al hacer clic fuera del contenido
  [ventajasModal, ingredientesModal, contactModal, productosModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          cerrarModales();
        }
      });
    }
  });

  // Cerrar modales con botón "X" (botones con clase 'cerrar-modal')
  document.querySelectorAll('.cerrar-modal').forEach(btn => {
    btn.addEventListener('click', cerrarModales);
  });
});
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');   // Activa o desactiva la animación del botón
  navList.classList.toggle('open');     // Muestra u oculta el menú
});

// Cierra el menú cuando se hace clic en un enlace
document.querySelectorAll('#nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    hamburger.classList.remove('open');
  });
});
