import "./contact.css";

export function LoadContactPage() {
    const div = document.getElementById("content");

    if (div) {
        div.textContent = "";
        div.className = "";
        div.classList.add("contact");

        const h1 = document.createElement("h1");
        h1.textContent = "Contact Us";

        const phone = document.createElement("p");
        phone.textContent = "Phone: +40 700 000 000";

        const email = document.createElement("p");
        email.textContent = "Email: info@portoflamechicken.com";

        const address = document.createElement("p");
        address.textContent = "Address: Timișoara, Romania";

        const hours = document.createElement("p");
        hours.textContent = "Opening Hours: Monday - Sunday, 11:00 - 22:00";

        div.appendChild(h1);
        div.appendChild(phone);
        div.appendChild(email);
        div.appendChild(address);
        div.appendChild(hours);
    }
}