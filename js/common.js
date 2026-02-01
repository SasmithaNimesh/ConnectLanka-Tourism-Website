document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("currentUser");
    const loginItem = document.getElementById("loginItem");

    if (username && loginItem) {
        const avatarUrl = `https://ui-avatars.com/api/?name=${username}&background=00465a&color=fff&rounded=true&bold=true`;

        loginItem.innerHTML = `
            <div class="user-profile-container" onclick="toggleProfileMenu()">
                <img src="${avatarUrl}" class="profile-icon" alt="${username}">
                <div class="profile-dropdown" id="profileDropdown">
                    <div style="padding:10px; border-bottom:1px solid #eee; color:#666; font-size:0.8em;">
                        Signed in as <strong>${username}</strong>
                    </div>
                    <a href="#" onclick="logoutUser()">Log Out</a>
                </div>
            </div>
        `;
    }
});

function toggleProfileMenu() {
    const dropdown = document.getElementById("profileDropdown");
    if (dropdown) dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function logoutUser() {
    localStorage.removeItem("currentUser");
    window.location.reload();
}
