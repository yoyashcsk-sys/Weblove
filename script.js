
const btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.innerHTML = `
        <div class="stars"></div>

        <div class="container">

            <h1>Dear ❤️</h1>

            <p id="typing"></p>

        </div>
        `;

        document.body.style.opacity = "1";

        const message =
        "Before you read this... There is something I truly need to tell you.";

        let i = 0;

        const typing = setInterval(() => {

            document.getElementById("typing").innerHTML += message.charAt(i);

            i++;

            if (i >= message.length) {

                clearInterval(typing);

            }

        }, 55);

    }, 1000);

});
