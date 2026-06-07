// js/auth-guard.js
async function checkAuth() {
  const { data: { session } } = await window.supabaseClient.auth.getSession();
  
  // If no session exists, redirect to login
  if (!session) {
    window.location.href = 'login.html'; // Adjust path if needed
  }
}

// Run the check immediately
checkAuth();

// Optional: Listen for sign-outs to force redirect immediately
window.supabaseClient.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') {
    window.location.href = 'login.html';
  }
});