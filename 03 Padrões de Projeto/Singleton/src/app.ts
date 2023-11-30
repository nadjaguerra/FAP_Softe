import SistemaSeguranca from "./sistemaSeg";

const sistemaSeguranca = SistemaSeguranca.getInstance();


sistemaSeguranca.acessarBaseSecreta("6873"); // Acesso negado


sistemaSeguranca.acessarBaseSecreta("7368"); // Acesso concedido


