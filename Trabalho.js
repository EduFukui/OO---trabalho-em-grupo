export class Bardo{
    //atributos
    nome: string;
    forca: number;
    vida: number;
    velocidade: number;
    canto: number;
    nivel: number;


    //construtor
    constructor(nomeBardo:string, velocidadeBardo:number, cantoBardo:number, nivelBardo:number){
        this.nome = nomeBardo
        this.forca = -10
        this.vida = 50;
        this.velocidade = velocidadeBardo
        this.canto = cantoBardo
        this.nivel = nivelBardo
    }



    // metodos
    cantar():void{
        console.log("Smells like the spirit")
    }

    FazerNada():void{
        console.log("Vagabundo e foda mlk!")
    }

    SofrerDano(quantity:number):void{
        console.log("O Bardo NAO fez nada e tomou "+quantity," de dano")
    }
}


const meuBardo = new Bardo("Nick Minaji",10,10,10);
meuBardo.cantar();




export class Arqueiro{
    //atributos
    nome: string;
    forca: number;
    vida: number;
    velocidade: number;
    mira: number;
    nivel: number;


    //construtor
    constructor(nomeArqueiro:string, velocidadeArqueiro:number, miraArqueiro:number, nivelArqueiro:number){
        this.nome = nomeArqueiro
        this.forca = 70
        this.vida = 80;
        this.velocidade = velocidadeArqueiro
        this.mira = miraArqueiro
        this.nivel = nivelArqueiro
    }

    // metodos  
    Atirar():void{
        console.log("Hoya Hoya")
    }

    Andar():void{
        console.log("Corre mlk")
    }

    SofrerDano(quantity:number):void{
        console.log("O Arqueiro tomou "+quantity," de dano")
    }
}

const meuArqueiro = new Arqueiro("Verde",12,20,15);
meuBardo.cantar();






export class Gueirreiro{
    nome:string; 
    forca:number;
    vida:number;
    velocidade: number;
    Defesa:number;
    nivel: number;
    

    constructor(NomeGuerreiro:string,forcaGuerreiro:number,velocidadeGuerreiro:number,DefesaGuerreiro:number,nivelGueirreiro:number){
        this.nome = NomeGuerreiro;
        this.forca = forcaGuerreiro;
        this.vida = 100;
        this.velocidade = velocidadeGuerreiro;
        this.Defesa=DefesaGuerreiro;
        this.nivel= nivelGueirreiro;
    }

    //Metodos
    Bate():void{
        console.log("PAULADA")
    }

    SofreDano(quantity:number):void{
        console.log("O Guerreiro sofreu" + quantity,"de dano")
    }

    AtaqueEspecial(quantity:number):void{
        console.log("O Guerreiro usou seu especial e deu" + quantity, "de dano no Inimigo")




        
        export class Monstro{
nome: string;
força: number;
velocidade: number;
nivel:number;
vida:number;
raca:number;

constructor(nomeMonstro:string ,nivelMonstro: number,racaMonstro:number, velocidadeMostro: number ){

    this.nome = nomeMonstro;
    this.nivel = nivelMonstro;
    this.raca = racaMonstro;
    this.vida = 100
    this.força = 100
    this.velocidade = velocidadeMostro



}

bater(): void{
    console.log("O monstro bateu na pessoa")
}

sofreDano(quantity:number): void{
    console.log("O monstro sofreu dano da pessoa"+quantity)
}

ataqueEspecial(): void{
    console.log("O monstro fez o kamehameha")
}
}

const meuMonstro = new Monstro("gorgona",10,10,10);
meuMonstro.ataqueEspecial();


    }
}

const Guerreiro = new Gueirreiro("Alessia",200,100,50,150);
