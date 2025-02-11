
document.getElementById("sendRequest").addEventListener("click", startSimulation);

function startSimulation() {
    const method = document.getElementById("method").value;
    let simulationBox = document.getElementById("simulationBox");
    let securityBox = document.getElementById("security");
    let networkBox = document.getElementById("networkFlow");

    // Step 1: Simulate DNS resolution
    simulationBox.innerHTML = "1️⃣ Resolving DNS for jsonplaceholder.typicode.com...";
    setTimeout(() => {
        simulationBox.innerHTML += "\n🌍 DNS Resolved! IP Address Found.";
        networkBox.innerHTML = "[Network] Establishing TCP Connection...";

        // Step 2: Simulate TCP Handshake
        setTimeout(() => networkBox.innerHTML += "\n📡 Step 1: SYN Sent (Client -> Server)", 2000);
        setTimeout(() => networkBox.innerHTML += "\n🔁 Step 2: SYN-ACK Received (Server -> Client)", 4000);
        setTimeout(() => networkBox.innerHTML += "\n✅ Step 3: ACK Sent - Connection Established!", 6000);

        // Step 3: Simulate TLS Handshake
        setTimeout(() => {
            networkBox.innerHTML += "\n🔒 TLS Handshake: Secure HTTPS Connection Established";
            simulationBox.innerHTML += "\n2️⃣ Sending HTTP Request...";
            
            // Step 4: Fetch real API responses
            fetchJsonPlaceholderResponse(method);
            fetchReqResResponse(method);
        }, 9000);
        
    }, 3000);

    // Simulate security mechanisms
    setTimeout(() => {
        securityBox.innerHTML = "[Security] Security Headers Applied:\n - Secure Cookies\n - XSS Protection\n - Content Security Policy\n - Rate Limiting Enabled";
    }, 11000);
}

function fetchJsonPlaceholderResponse(method) {
    let responseBox = document.getElementById("jsonPlaceholderResponse");
    let url = `https://jsonplaceholder.typicode.com/posts/1`;

    if (method === "POST") url = `https://jsonplaceholder.typicode.com/posts`;
    if (method === "PUT" || method === "DELETE") url = `https://jsonplaceholder.typicode.com/posts/1`;

    fetch(url, { method: method })
    .then(response => response.json())
    .then(data => {
        responseBox.innerHTML = `🔹 <b>JSONPlaceholder Response</b>\n`;
        responseBox.innerHTML += `🔹 Status: 200 OK\nHeaders:\n`;

        responseBox.innerHTML += `\nResponse Body:\n${JSON.stringify(data, null, 2)}`;
    })
    .catch(error => {
        responseBox.innerHTML = `❌ Error Fetching JSONPlaceholder: ${error}`;
    });
}

function fetchReqResResponse(method) {
    let responseBox = document.getElementById("reqresResponse");
    let url = `https://reqres.in/api/users/2`;

    if (method === "POST") url = `https://reqres.in/api/users`;
    if (method === "PUT" || method === "DELETE") url = `https://reqres.in/api/users/2`;

    fetch(url, { method: method })
    .then(response => response.json())
    .then(data => {
        responseBox.innerHTML = `🔹 <b>ReqRes Response</b>\n`;
        responseBox.innerHTML += `🔹 Status: 200 OK\nHeaders:\n`;

        responseBox.innerHTML += `\nResponse Body:\n${JSON.stringify(data, null, 2)}`;
    })
    .catch(error => {
        responseBox.innerHTML = `❌ Error Fetching ReqRes: ${error}`;
    });
}
