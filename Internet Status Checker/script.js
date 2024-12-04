window.addEventListener("load", checkInternetConnection);

function checkInternetConnection() {
    const statusText = document.getElementById("statusText");
    const ipAddressText = document.getElementById("ipAddressText");
    const networkStrengthText = document.getElementById("networkStrengthText");

    if (navigator.onLine) {
        fetch('https://geo.ipify.org/api/v2/country?apiKey=at_LidmqTZWcNp4KhR28fMvf8xejrKtG&ipAddress=8.8.8.8')
            .then(response => response.json())
            .then(data => {
                ipAddressText.textContent = data.ip;
                statusText.textContent = "Connected"

                const connection = navigator.connection;
                const networkStrength = connection ? connection.downlink
                    + " Mbps" : "Unknown";
                networkStrengthText.textContent = networkStrength;
            })
            .catch(() => {


                statusText.textContent = "Disconnected";
                ipAddressText.textContent = '-';
                networkStrengthText.textContent = '-';

            })
    } else {
        statusText.textContent = "Disconnected";
        ipAddressText.textContent = '-';
        networkStrengthText.textContent = '-';
    }
}