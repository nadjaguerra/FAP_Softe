
interface Galinha {
    cacarejar(): void;
}


class Pato {
    grasnar(): void {
        console.log("Quack!");
    }
}


class AdaptadorPato implements Galinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.grasnar(); 
    }
}

// Demonstração do AdaptadorPato
const pato = new Pato();
const adaptadorPato = new AdaptadorPato(pato);


console.log(adaptadorPato.cacarejar());
