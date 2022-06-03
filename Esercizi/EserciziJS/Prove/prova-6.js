class Veicolo{
  constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  }
}

let fiatPunto = new Veicolo ("fiat", "punto", 2000);

console.log(fiatPunto);


console.log(JSON.parse(JSON.stringify(fiatPunto)));