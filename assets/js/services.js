// Services data and pricing for Hair Corporation
const servicesData = {
    "women_haircuts": {
        "title": "Женские стрижки",
        "services": [
            {
                "name": "Стрижка женская (мастер)",
                "price_hc": "8000-12000",
                "price_ht": "8000-12000",
                "duration": "60 мин"
            },
            {
                "name": "Стрижка женская (топ-мастер)",
                "price_hc": "15000-20000",
                "price_ht": "15000-20000",
                "duration": "60 мин"
            },
            {
                "name": "Стрижка женская (арт-директор)",
                "price_hc": "25000-30000",
                "price_ht": "уточняйте",
                "duration": "90 мин"
            },
            {
                "name": "Челка",
                "price_hc": "3000-5000",
                "price_ht": "3000-5000",
                "duration": "30 мин"
            }
        ]
    },
    "men_haircuts": {
        "title": "Мужские стрижки",
        "services": [
            {
                "name": "Стрижка мужская",
                "price_hc": "6000-10000",
                "price_ht": "6000-10000",
                "duration": "45 мин"
            },
            {
                "name": "Стрижка + борода",
                "price_hc": "8000-12000",
                "price_ht": "8000-12000",
                "duration": "60 мин"
            },
            {
                "name": "Детская стрижка (до 12 лет)",
                "price_hc": "4000-6000",
                "price_ht": "4000-6000",
                "duration": "30 мин"
            }
        ]
    },
    "styling": {
        "title": "Укладка",
        "services": [
            {
                "name": "Укладка на короткие волосы",
                "price_hc": "4000-6000",
                "price_ht": "4000-6000",
                "duration": "30 мин"
            },
            {
                "name": "Укладка на средние волосы",
                "price_hc": "5000-7000",
                "price_ht": "5000-7000",
                "duration": "45 мин"
            },
            {
                "name": "Укладка на длинные волосы",
                "price_hc": "6000-8000",
                "price_ht": "6000-8000",
                "duration": "60 мин"
            },
            {
                "name": "Вечерняя укладка",
                "price_hc": "8000-12000",
                "price_ht": "8000-12000",
                "duration": "90 мин"
            }
        ]
    },
    "coloring": {
        "title": "Окрашивание",
        "services": [
            {
                "name": "Окрашивание в 1 тон (корни)",
                "price_hc": "8000-12000",
                "price_ht": "8000-12000",
                "duration": "120 мин"
            },
            {
                "name": "Окрашивание в 1 тон (длина)",
                "price_hc": "12000-18000",
                "price_ht": "12000-18000",
                "duration": "150 мин"
            },
            {
                "name": "Сложное окрашивание (мелирование)",
                "price_hc": "20000-35000",
                "price_ht": "20000-35000",
                "duration": "180-240 мин"
            },
            {
                "name": "Балаяж/Шатуш",
                "price_hc": "25000-40000",
                "price_ht": "25000-40000",
                "duration": "180-240 мин"
            },
            {
                "name": "Total Blond",
                "price_hc": "35000-50000",
                "price_ht": "35000-50000",
                "duration": "240-300 мин"
            },
            {
                "name": "Выход из черного",
                "price_hc": "40000-60000",
                "price_ht": "40000-60000",
                "duration": "300-360 мин"
            },
            {
                "name": "Тонирование",
                "price_hc": "6000-10000",
                "price_ht": "6000-10000",
                "duration": "60 мин"
            }
        ]
    },
    "treatments": {
        "title": "Уходы и восстановление",
        "services": [
            {
                "name": "Ботокс для волос",
                "price_hc": "15000-25000",
                "price_ht": "15000-25000",
                "duration": "120 мин"
            },
            {
                "name": "Кератиновое выпрямление",
                "price_hc": "20000-35000",
                "price_ht": "20000-35000",
                "duration": "180 мин"
            },
            {
                "name": "Spa-уход",
                "price_hc": "8000-15000",
                "price_ht": "8000-15000",
                "duration": "90 мин"
            },
            {
                "name": "Глубокое восстановление",
                "price_hc": "10000-18000",
                "price_ht": "10000-18000",
                "duration": "120 мин"
            }
        ]
    },
    "perms": {
        "title": "Биозавивка и объем",
        "services": [
            {
                "name": "Биозавивка",
                "price_hc": "18000-30000",
                "price_ht": "18000-30000",
                "duration": "180 мин"
            },
            {
                "name": "Прикорневой объем",
                "price_hc": "12000-20000",
                "price_ht": "12000-20000",
                "duration": "120 мин"
            },
            {
                "name": "Химическая завивка",
                "price_hc": "15000-25000",
                "price_ht": "15000-25000",
                "duration": "150 мин"
            }
        ]
    },
    "additional": {
        "title": "Дополнительные услуги",
        "services": [
            {
                "name": "Ламинирование волос",
                "price_hc": "12000-18000",
                "price_ht": "12000-18000",
                "duration": "90 мин"
            },
            {
                "name": "Оформление бровей",
                "price_hc": "3000-5000",
                "price_ht": "3000-5000",
                "duration": "30 мин"
            },
            {
                "name": "Окрашивание бровей",
                "price_hc": "2000-3000",
                "price_ht": "2000-3000",
                "duration": "20 мин"
            },
            {
                "name": "Ламинирование ресниц",
                "price_hc": "8000-12000",
                "price_ht": "8000-12000",
                "duration": "60 мин"
            },
            {
                "name": "Маникюр",
                "price_hc": "6000-10000",
                "price_ht": "6000-10000",
                "duration": "60 мин"
            },
            {
                "name": "Педикюр",
                "price_hc": "8000-12000",
                "price_ht": "8000-12000",
                "duration": "90 мин"
            }
        ]
    }
};

// Generate price table HTML
function generatePriceTable() {
    let tableHTML = '<div class="services-table">';
    
    Object.keys(servicesData).forEach(categoryKey => {
        const category = servicesData[categoryKey];
        tableHTML += `
            <div class="service-category">
                <h3 class="category-title">${category.title}</h3>
                <div class="services-grid">
        `;
        
        category.services.forEach(service => {
            tableHTML += `
                <div class="service-item hc ht">
                    <div class="service-info">
                        <h4 class="service-name">${service.name}</h4>
                        <span class="service-duration">${service.duration}</span>
                    </div>
                    <div class="service-prices">
                        <div class="price-item hc-price">
                            <span class="branch-label">HC:</span>
                            <span class="price">${service.price_hc} ₸</span>
                        </div>
                        <div class="price-item ht-price">
                            <span class="branch-label">ХТ:</span>
                            <span class="price">${service.price_ht} ₸</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        tableHTML += `
                </div>
            </div>
        `;
    });
    
    tableHTML += '</div>';
    return tableHTML;
}

// Add price table styles
function addPriceTableStyles() {
    const styles = `
        .services-table {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .service-category {
            margin-bottom: 50px;
        }
        
        .category-title {
            color: var(--color-accent);
            font-size: 28px;
            margin-bottom: 30px;
            text-align: center;
            position: relative;
        }
        
        .category-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background-color: var(--color-accent);
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 20px;
        }
        
        .service-item {
            background-color: var(--color-dark-gray);
            border-radius: var(--border-radius);
            padding: 25px;
            border: 1px solid transparent;
            transition: var(--transition);
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-item:hover {
            border-color: var(--color-accent);
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .service-info {
            margin-bottom: 20px;
        }
        
        .service-name {
            color: var(--color-white);
            font-size: 18px;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        .service-duration {
            color: var(--color-gray);
            font-size: 14px;
            background-color: var(--color-black);
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
        }
        
        .service-prices {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .price-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            background-color: var(--color-black);
            border-radius: 6px;
        }
        
        .branch-label {
            color: var(--color-accent);
            font-weight: 600;
            font-size: 14px;
        }
        
        .price {
            color: var(--color-white);
            font-weight: 600;
            font-size: 16px;
        }
        
        /* Filter states */
        .service-item.hc.hidden-ht .ht-price {
            display: none;
        }
        
        .service-item.ht.hidden-hc .hc-price {
            display: none;
        }
        
        @media (max-width: 768px) {
            .services-grid {
                grid-template-columns: 1fr;
            }
            
            .service-item {
                padding: 20px;
            }
            
            .service-name {
                font-size: 16px;
            }
            
            .price-item {
                padding: 6px 10px;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// Initialize price table
function initPriceTable() {
    const priceTableContainer = document.querySelector('.services-content');
    if (priceTableContainer) {
        // Replace {{PRICE_TABLE}} placeholder
        const placeholder = priceTableContainer.innerHTML;
        if (placeholder.includes('{{PRICE_TABLE}}')) {
            priceTableContainer.innerHTML = placeholder.replace('{{PRICE_TABLE}}', generatePriceTable());
        } else {
            priceTableContainer.innerHTML = generatePriceTable();
        }
        
        addPriceTableStyles();
        initServiceFiltering();
    }
}

// Enhanced service filtering
function initServiceFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceItems = document.querySelectorAll('.service-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            
            serviceItems.forEach(item => {
                const hcPrice = item.querySelector('.hc-price');
                const htPrice = item.querySelector('.ht-price');
                
                // Reset visibility
                item.classList.remove('hidden-hc', 'hidden-ht');
                hcPrice.style.display = 'flex';
                htPrice.style.display = 'flex';
                
                if (filter === 'hc') {
                    // Show only HC prices
                    htPrice.style.display = 'none';
                    item.classList.add('hidden-ht');
                } else if (filter === 'ht') {
                    // Show only HT prices
                    hcPrice.style.display = 'none';
                    item.classList.add('hidden-hc');
                }
                
                // Animate item appearance
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            });
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for the main content to load
    setTimeout(initPriceTable, 100);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { servicesData, generatePriceTable, initPriceTable };
}

