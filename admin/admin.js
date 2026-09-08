const API_URL = 'http://localhost:8080/api';

// ======================================================
// ADMIN LOGIN
// ======================================================

const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

if (loginForm) {
  loginForm.addEventListener('submit', async event => {
    event.preventDefault();

    loginError.textContent = '';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        loginError.textContent =
          result.message || 'Invalid email or password.';
        return;
      }

      // Vérifier que l'utilisateur est Admin
      if (result.data.role !== 'Admin') {
        loginError.textContent =
          'Access denied. Admin account required.';
        return;
      }

      // Sauvegarder le token
      localStorage.setItem('adminToken', result.data.token);

      // Sauvegarder les informations admin
      localStorage.setItem(
        'adminUser',
        JSON.stringify({
          id: result.data.id,
          email: result.data.email,
          role: result.data.role
        })
      );

      // Redirection vers dashboard
      window.location.href = 'dashboard.html';

    } catch (error) {
      console.error('Login error:', error);

      loginError.textContent =
        'Unable to connect to the server.';
    }
  });
}


// ======================================================
// PROTECTION DU DASHBOARD
// ======================================================

const isDashboard = document.querySelector('.admin-shell');

if (isDashboard) {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    window.location.href = 'login.html';
  }
}


// ======================================================
// SIDEBAR NAVIGATION
// ======================================================

const adminLinks = document.querySelectorAll('.sidebar-link');
const sections = document.querySelectorAll('.admin-content');
const pageTitle = document.getElementById('pageTitle');

if (adminLinks.length) {

  adminLinks.forEach(link => {

    link.addEventListener('click', () => {

      const sectionId = link.dataset.section;

      // Remove active
      adminLinks.forEach(item => {
        item.classList.remove('active');
      });

      // Add active
      link.classList.add('active');

      // Hide all sections
      sections.forEach(section => {
        section.classList.add('hidden');
      });

      // Show selected section
      const section = document.getElementById(sectionId);

      if (section) {
        section.classList.remove('hidden');
      }

      // Change title
      if (pageTitle) {
        pageTitle.textContent =
          sectionId.charAt(0).toUpperCase() +
          sectionId.slice(1);
      }
    });

  });

}


// ======================================================
// LOGOUT
// ======================================================

const logoutBtn = document.getElementById('logoutBtn');

if (logoutBtn) {

  logoutBtn.addEventListener('click', async () => {

    const token = localStorage.getItem('adminToken');

    try {

      if (token) {

        await fetch(`${API_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      }

    } catch (error) {

      console.error('Logout error:', error);

    }

    // Supprimer les données locales
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');

    // Retour login
    window.location.href = 'login.html';
  });

}


// ======================================================
// ALERT
// ======================================================

function showAlert(message) {
  alert(message);
}