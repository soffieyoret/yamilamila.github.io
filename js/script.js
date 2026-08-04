// Dynamic current year setup
document.getElementById('current-year').innerText = new Date().getFullYear();

// Mobile Menu Toggle logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// FAQ Toggle Functionality
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.icon-box');

    // Toggle current answer
    content.classList.toggle('hidden');

    // Rotate icon
    if (content.classList.contains('hidden')) {
        icon.style.transform = 'rotate(0deg)';
    } else {
        icon.style.transform = 'rotate(180deg)';
    }
}

// Filterable Portfolio Gallery
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('#portfolio-filters button');

    buttons.forEach(btn => {
        btn.classList.remove('bg-oliva', 'text-marfil', 'border-oliva');
        btn.classList.add('bg-marfil', 'text-carbon', 'border-roble/40');
    });

    if (event && event.target) {
        event.target.classList.add('bg-oliva', 'text-marfil', 'border-oliva');
        event.target.classList.remove('bg-marfil', 'border-roble/40');
    }

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Project Modal Details Data Store
const projectsData = {
    'MILA-DESIGN': {
        title: "Residencia Mila Design",
        category: "Residencial & Interiorismo",
        image: "assets/mila-design.jpeg",
        description: "Proyecto integral en madera de roble, marmolados y acentos verde oliva. Planos ejecutivos completos de albañilería, instalaciones sanitarias y amoblamiento."
    },
    'MILA-COCINA': {
        title: "Cocina & Comedor Integrado",
        category: "Remodelación de Interiores",
        image: "assets/cocina-comedor.jpeg",
        description: "Combinación de decoración con un espacio unificado y optimizado en la cocina."
    },
    'MILA-LIVING': {
        title: "Proyectos a medida",
        category: "Interiorismo Residencial",
        image: "assets/10.jpeg",
        description: "Combinamos armonía y calidad en la elección de los materiales."
    },
    'MILA-SUITE': {
        title: "Dormitorio Principal Suite",
        category: "Comercial",
        image: "assets/15.jpeg",
        description: "Hacemos realidad tu negocio."
    },
    'ESTUDIO-MILA': {
        title: "Showroom & Oficina Comercial",
        category: "Comercial",
        image: "assets/estudio-mila.jpeg",
        description: "Puesta en valor comercial con circulaciones dinámicas, acondicionamiento acústico y tonos verdes orgánicos."
    },
    'REFORM-MILA': {
        title: "Proyectos desde cero",
        category: "Obra & Planos",
        image: "assets/13.jpeg",
        description: "Renders, planos y texturas."
    },
    'BAÑO-MILA': {
        title: "Sanitario Relax & Microcemento",
        category: "Interiorismo • Spa Bath",
        image: "assets/5.jpeg",
        description: "Texturas en el porcelanato y detalles oro en griferías."
    }
};

function openProjectModal(key) {
    const data = projectsData[key] || projectsData['MILA-DESIGN'];
    const modalContent = document.getElementById('modal-content');

    if (modalContent) {
        modalContent.innerHTML = `
            <div class="space-y-6">
                <img src="${data.image}" class="w-full h-80 object-cover rounded-[2px] border border-oliva/30">
                <div>
                    <span class="text-roble text-[0.7rem] uppercase tracking-widest font-bold block">${data.category} • ${data.area}</span>
                    <h2 class="text-3xl font-bold text-marfil mt-1">${data.title}</h2>
                    <p class="text-xs text-olivaLight font-bold uppercase mt-0.5">${data.location}</p>
                </div>
                <p class="text-marfil/90 text-sm font-light leading-relaxed">${data.description}</p>
                <div class="p-4 bg-carbon/80 rounded-[2px] border border-oliva/30 grid grid-cols-2 gap-4 text-xs">
                    <div>
                        <span class="text-marfil/60 block">Matrícula / Dirección:</span>
                        <span class="font-bold text-olivaLight">Yamila Mila (MMO)</span>
                    </div>
                    <div>
                        <span class="text-marfil/60 block">Entregables:</span>
                        <span class="font-bold text-olivaLight">Planos + Renders + Cómputo</span>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById('project-modal').classList.remove('hidden');
}

function closeProjectModal() {
    document.getElementById('project-modal').classList.add('hidden');
}

// Form Submit Handler
function handleFormSubmit(e) {
    e.preventDefault();
    showToast("¡Consulta recibida! Te responderé a la brevedad.");
    e.target.reset();
}

function showToast(text) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-text').innerText = text;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3500);
}
