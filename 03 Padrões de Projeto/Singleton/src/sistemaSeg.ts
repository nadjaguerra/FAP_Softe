class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "7368";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha !== this.senhaBaseSecreta) {
            console.log("Acesso negado! Senha incorreta. Intruso detectado!");
            return;
        }

        console.log("Acesso concedido à Base Secreta. Bem-vindo, agente secreto!");
    }
}

export default SistemaSeguranca;