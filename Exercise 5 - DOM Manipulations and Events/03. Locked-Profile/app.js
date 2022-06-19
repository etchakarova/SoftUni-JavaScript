function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', toggle));

    function toggle(e) {
        let profile = e.target.parentElement;
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            let profileInfo = profile.querySelector('div');

            if (e.target.textContent === "Show more") {
                profileInfo.style.display = "block";
                e.target.textContent = "Hide it"

            } else {
                profileInfo.style.display = "";
                e.target.textContent = "Show more"
            }
        }
    }
}