const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
});

// Cierra el menú hamburguesa al seleccionar cualquier opción
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('open');
    });
});

// MODAL VENTAJAS
const openVentajasModal = document.getElementById('openVentajasModal');
const ventajasModal = document.getElementById('ventajasModal');

// MODAL INGREDIENTES
const openIngredientesModal = document.getElementById('openIngredientesModal');
const ingredientesModal = document.getElementById('ingredientesModal');

// MODAL CONTACTO
const openContactModal = document.getElementById('openContactModal');
const contactModal = document.getElementById('contactModal');

// Función para cerrar todos los modales
function cerrarModales() {
    ventajasModal?.classList.remove('active');
    ingredientesModal?.classList.remove('active');
    contactModal?.classList.remove('active');
    document.body.style.overflow = '';
}

// Abrir modal de ventajas
if (openVentajasModal && ventajasModal) {
    openVentajasModal.addEventListener('click', (e) => {
        e.preventDefault();
        cerrarModales();
        ventajasModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Abrir modal de ingredientes
if (openIngredientesModal && ingredientesModal) {
    openIngredientesModal.addEventListener('click', (e) => {
        e.preventDefault();
        cerrarModales();
        ingredientesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Abrir modal de contacto
if (openContactModal && contactModal) {
    openContactModal.addEventListener('click', (e) => {
        e.preventDefault();
        cerrarModales();
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Cerrar modales al hacer clic en cualquier otro enlace del menú
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        if (
            link.id !== 'openVentajasModal' &&
            link.id !== 'openIngredientesModal' &&
            link.id !== 'openContactModal'
        ) {
            cerrarModales();
        }
    });
});

// Cerrar modales al hacer clic fuera del contenido
[ventajasModal, ingredientesModal, contactModal].forEach(modal => {
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                cerrarModales();
            }
        });
    }
});

// Cerrar modales con botón "X"
document.querySelectorAll('.cerrar-modal').forEach(btn => {
    btn.addEventListener('click', cerrarModales);
});
