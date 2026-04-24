// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Cart Management using LocalStorage
    let cart = JSON.parse(localStorage.getItem('flavourFeastCart')) || [];

    const updateCartCount = () => {
        const cartCountEl = document.getElementById('cart-count');
        if (cartCountEl) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountEl.textContent = totalItems;
        }
    };
    
    // Initialize cart count
    updateCartCount();

    // 3. Home Page Logic
    const foodGrid = document.getElementById('food-grid');
    if (foodGrid && typeof foodItems !== 'undefined') {
        
        // Render Food Items
        const renderFoodItems = (items) => {
            foodGrid.innerHTML = '';
            
            if (items.length === 0) {
                foodGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No food items found matching your criteria.</p>';
                return;
            }

            items.forEach(item => {
                const isPremium = item.rating >= 4.8;
                const card = document.createElement('div');
                card.className = 'food-card';
                card.innerHTML = `
                    <div class="food-img-wrapper">
                        <img src="${item.image}" alt="${item.name}" class="food-img" 
                             onload="this.classList.add('loaded')" 
                             onerror="this.src='https://via.placeholder.com/400x300?text=Food'">
                        ${isPremium ? '<div style="position: absolute; top: 10px; left: 10px; background: #ffc107; color: #000; padding: 3px 8px; border-radius: 10px; font-size: 0.8rem; font-weight: bold;">Premium</div>' : ''}
                    </div>
                    <div class="food-info">
                        <span class="food-category">${item.category}</span>
                        <h3 class="food-name">${item.name}</h3>
                        <div class="food-meta">
                            <span class="food-price">$${item.price.toFixed(2)}</span>
                            <span class="food-rating"><i class="fas fa-star"></i> ${item.rating}</span>
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${item.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                `;
                foodGrid.appendChild(card);
            });
        };

        // Initial Render
        renderFoodItems(foodItems);

        // Global Add to Cart function
        window.addToCart = (id) => {
            const item = foodItems.find(f => f.id === id);
            if (item) {
                const existingItem = cart.find(c => c.id === id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ ...item, quantity: 1 });
                }
                localStorage.setItem('flavourFeastCart', JSON.stringify(cart));
                updateCartCount();
                
                // Optional: Show a mini toast/alert here
                // alert(`${item.name} added to cart!`);
            }
        };

        // Filtering Logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const category = e.target.getAttribute('data-filter');
                if (category === 'all') {
                    renderFoodItems(foodItems);
                } else {
                    const filtered = foodItems.filter(item => item.category === category);
                    renderFoodItems(filtered);
                }
                
                // Reset search when filter is clicked
                const searchInput = document.getElementById('search-input');
                if(searchInput) searchInput.value = '';
            });
        });

        // Live Search Logic
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
                
                let filtered = foodItems;
                
                if (activeFilter !== 'all') {
                    filtered = filtered.filter(item => item.category === activeFilter);
                }
                
                filtered = filtered.filter(item => item.name.toLowerCase().includes(searchTerm));
                renderFoodItems(filtered);
            });
        }
        
        // Cart redirect check
        const cartIconBtn = document.getElementById('cart-icon');
        if(cartIconBtn) {
            cartIconBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if(cart.length === 0) {
                    alert("Your cart is empty");
                } else {
                    window.location.href = 'checkout.html';
                }
            });
        }
    }

    // 4. Checkout Page Logic
    const cartItemsContainer = document.getElementById('cart-items-list');
    if (cartItemsContainer) {
        
        const renderCartItems = () => {
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty. <br><a href="index.html#menu" style="color: var(--primary); margin-top: 1rem; display: inline-block;">Go back to menu</a></div>';
                document.getElementById('summary-subtotal').textContent = '$0.00';
                document.getElementById('summary-total').textContent = '$0.00';
                document.getElementById('summary-delivery').textContent = '$0.00';
                return;
            }

            let subtotal = 0;
            
            cart.forEach(item => {
                subtotal += item.price * item.quantity;
                
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h3 class="cart-item-title">${item.name}</h3>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <input type="text" class="qty-input" value="${item.quantity}" readonly>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeItem(${item.id})"><i class="fas fa-trash"></i></button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });

            const deliveryFee = 5.00;
            const total = subtotal + deliveryFee;

            document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('summary-delivery').textContent = `$${deliveryFee.toFixed(2)}`;
            document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
        };

        window.updateQty = (id, change) => {
            const itemIndex = cart.findIndex(c => c.id === id);
            if (itemIndex > -1) {
                cart[itemIndex].quantity += change;
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
                localStorage.setItem('flavourFeastCart', JSON.stringify(cart));
                renderCartItems();
                updateCartCount();
            }
        };

        window.removeItem = (id) => {
            cart = cart.filter(c => c.id !== id);
            localStorage.setItem('flavourFeastCart', JSON.stringify(cart));
            renderCartItems();
            updateCartCount();
        };

        renderCartItems();

        // Place order
        const placeOrderBtn = document.getElementById('place-order-btn');
        if (placeOrderBtn) {
            placeOrderBtn.addEventListener('click', () => {
                if (cart.length === 0) {
                    alert("Your cart is empty. Please add items to place an order.");
                    return;
                }
                
                alert("Order placed successfully! Thank you for choosing Flavour Feast.");
                cart = [];
                localStorage.setItem('flavourFeastCart', JSON.stringify(cart));
                window.location.href = 'index.html';
            });
        }
    }
    
    // 5. Auth form basic handling (prevent default)
    const loginForm = document.getElementById('login-form');
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Login functionality to be connected to backend!");
        });
    }
});
