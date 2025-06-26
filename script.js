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
    }); // <-- Cierre agregado aquí
});

// MODAL VENTAJAS
const openVentajasModal = document.getElementById('openVentajasModal');
const ventajasModal = document.getElementById('ventajasModal');

// MODAL INGREDIENTES
const openIngredientesModal = document.getElementById('openIngredientesModal');
const ingredientesModal = document.getElementById('ingredientesModal');

// Función para cerrar todos los modales
function cerrarModales() {
    ventajasModal?.classList.remove('active');
    ingredientesModal?.classList.remove('active');
    document.body.style.overflow = '';
}

// Abrir modal de ventajas
if (openVentajasModal && ventajasModal) {
    openVentajasModal.addEventListener('click', (e) => {
        e.preventDefault();
        cerrarModales(); // Cierra cualquier otro modal
        ventajasModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Abrir modal de ingredientes
if (openIngredientesModal && ingredientesModal) {
    openIngredientesModal.addEventListener('click', (e) => {
        e.preventDefault();
        cerrarModales(); // Cierra cualquier otro modal
        ingredientesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Cerrar modales al hacer clic en cualquier otro enlace del menú
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        if (link.id !== 'openVentajasModal' && link.id !== 'openIngredientesModal') {
            cerrarModales();
        }
    });
});
