import Sanduiche from './sanduiche';

class FrangoAssadoDecorator implements Sanduiche {
    preco(): number {
        return 4.5; 
    }
}

export default FrangoAssadoDecorator;