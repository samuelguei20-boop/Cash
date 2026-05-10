‎// POPUP
‎
‎const popup =
‎document.getElementById("popup");
‎
‎function showPopup(message){
‎
‎  popup.innerText = message;
‎
‎  popup.classList.add("show");
‎
‎  setTimeout(() => {
‎
‎    popup.classList.remove("show");
‎
‎  },2000);
‎
‎}
‎
‎/* ========================= */
‎/* ACTION BUTTONS */
‎/* ========================= */
‎
‎const actionButtons =
‎document.querySelectorAll(".action-btn");
‎
‎actionButtons.forEach(button => {
‎
‎  button.addEventListener("click", () => {
‎
‎    showPopup(
‎      "Service disponible bientôt"
‎    );
‎
‎    if(navigator.vibrate){
‎
‎      navigator.vibrate(40);
‎
‎    }
‎
‎  });
‎
‎});
‎
‎/* ========================= */
‎/* MODE CLAIR / SOMBRE */
‎/* ========================= */
‎
‎const themeBtn =
‎document.getElementById("themeBtn");
‎
‎themeBtn.addEventListener("click", () => {
‎
‎  document.body.classList.toggle(
‎    "light-mode"
‎  );
‎
‎  if(
‎    document.body.classList.contains(
‎      "light-mode"
‎    )
‎  ){
‎
‎    themeBtn.innerHTML =
‎    '<i class="fa-solid fa-sun"></i>';
‎
‎  }else{
‎
‎    themeBtn.innerHTML =
‎    '<i class="fa-solid fa-moon"></i>';
‎
‎  }
‎
‎});
‎
‎/* ========================= */
‎/* NAVIGATION */
‎/* ========================= */
‎
‎const homeBtn =
‎document.getElementById("homeBtn");
‎
‎const giftBtn =
‎document.getElementById("giftBtn");
‎
‎const marketBtn =
‎document.getElementById("marketBtn");
‎
‎const profileBtn =
‎document.getElementById("profileBtn");
‎
‎/* Sections */
‎
‎const homeSection =
‎document.getElementById("homeSection");
‎
‎const giftSection =
‎document.getElementById("giftSection");
‎
‎const marketSection =
‎document.getElementById("marketSection");
‎
‎const profileSection =
‎document.getElementById("profileSection");
‎
‎/* Nav buttons */
‎
‎const navButtons =
‎document.querySelectorAll(".nav-btn");
‎
‎/* RESET */
‎
‎function resetSections(){
‎
‎  homeSection.classList.add("hidden");
‎
‎  giftSection.classList.add("hidden");
‎
‎  marketSection.classList.add("hidden");
‎
‎  profileSection.classList.add("hidden");
‎
‎}
‎
‎/* RESET NAV */
‎
‎function resetNav(){
‎
‎  navButtons.forEach(btn => {
‎
‎    btn.classList.remove("active");
‎
‎  });
‎
‎}
‎
‎/* HOME */
‎
‎homeBtn.addEventListener("click", () => {
‎
‎  resetSections();
‎
‎  resetNav();
‎
‎  homeSection.classList.remove("hidden");
‎
‎  homeBtn.classList.add("active");
‎
‎});
‎
‎/* GIFTS */
‎
‎giftBtn.addEventListener("click", () => {
‎
‎  resetSections();
‎
‎  resetNav();
‎
‎  giftSection.classList.remove("hidden");
‎
‎  giftBtn.classList.add("active");
‎
‎});
‎
‎/* MARKET */
‎
‎marketBtn.addEventListener("click", () => {
‎
‎  resetSections();
‎
‎  resetNav();
‎
‎  marketSection.classList.remove("hidden");
‎
‎  marketBtn.classList.add("active");
‎
‎});
‎
‎/* PROFILE */
‎
‎profileBtn.addEventListener("click", () => {
‎
‎  resetSections();
‎
‎  resetNav();
‎
‎  profileSection.classList.remove("hidden");
‎
‎  profileBtn.classList.add("active");
‎
‎});
‎
‎/* ========================= */
‎/* CENTRE LOGO */
‎/* ========================= */
‎
‎const centerBtn =
‎document.querySelector(".center-btn");
‎
‎centerBtn.addEventListener("click", () => {
‎
‎  showPopup(
‎    "Baby Cash Coin"
‎  );
‎
‎});
‎
‎/* ========================= */
‎/* MODIFIER NOM */
‎/* ========================= */
‎
‎const editBtn =
‎document.querySelector(".edit-btn");
‎
‎editBtn.addEventListener("click", () => {
‎
‎  let newName = prompt(
‎    "Modifier votre nom"
‎  );
‎
‎  if(newName){
‎
‎    document.querySelector(
‎      ".name-box h2"
‎    ).innerText = newName;
‎
‎    showPopup(
‎      "Nom enregistré"
‎    );
‎
‎  }
‎
‎});
‎
‎/* ========================= */
‎/* ENREGISTRER PROFIL */
‎/* ========================= */
‎
‎const saveBtn =
‎document.querySelector(".save-btn");
‎
‎saveBtn.addEventListener("click", () => {
‎
‎  showPopup(
‎    "Profil enregistré"
‎  );
‎
‎});
‎
‎/* ========================= */
‎/* DECONNEXION */
‎/* ========================= */
‎
‎const logoutBtn =
‎document.querySelector(".logout-btn");
‎
‎logoutBtn.addEventListener("click", () => {
‎
‎  showPopup(
‎    "Déconnexion..."
‎  );
‎
‎});
‎
