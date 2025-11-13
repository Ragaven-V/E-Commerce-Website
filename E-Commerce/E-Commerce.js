
const orders = ['Order #1: Laptop', 'Order #2: Phone'];
const wishlist = ['Laptop', 'Headphones'];
const reviews = ['Great product! - User1', 'Fast delivery - User2'];


function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}


document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const message = document.getElementById('regMessage');

    if (!name) {
        message.textContent = 'Name is required.';
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = 'Invalid email format.';
        return;
    }
    if (password.length < 6) {
        message.textContent = 'Password must be at least 6 characters.';
        return;
    }

    message.textContent = 'Registration successful!';
  
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = 'Invalid email format.';
        return;
    }
    if (!password) {
        message.textContent = 'Password is required.';
        return;
    }

    message.textContent = 'Login successful!';
    
});


document.addEventListener('DOMContentLoaded', function() {
    const ordersList = document.getElementById('ordersList');
    orders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = order;
        ordersList.appendChild(li);
    });

    const wishlistEl = document.getElementById('wishlist');
    wishlist.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        wishlistEl.appendChild(li);
    });

    const reviewsEl = document.getElementById('reviews');
    reviews.forEach(review => {
        const li = document.createElement('li');
        li.textContent = review;
        reviewsEl.appendChild(li);
    });
});


function reportIssue(issue) {
    document.getElementById('reportMessage').textContent = `Reported: ${issue}. We will look into it.`;
}