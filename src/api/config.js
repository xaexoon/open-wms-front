const DEV_MODE = true;
let BASE_IP;
let BASE_PORT;

if (DEV_MODE) {
    BASE_IP = "127.0.0.1";
    BASE_PORT = 8000;
} else {
    BASE_IP = "192.168.1.249";
    BASE_PORT = 8000;
}

export const API_URL = `http://${BASE_IP}:${BASE_PORT}`;
export const WS_URL = `ws://${BASE_IP}:${BASE_PORT}`;
