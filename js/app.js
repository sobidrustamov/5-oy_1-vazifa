addEventListener("DOMContentLoaded", async () => {
  // Constructor Function

  function Person(ism, familiya, yosh, uquvMaskani, yunalishi, maqsadi) {
    this.ism = ism;
    this.familiya = familiya;
    this.yosh = yosh;
    this.uquvMaskani = uquvMaskani;
    this.yunalishi = yunalishi;
    this.maqsadi = maqsadi;
  }

  Person.prototype.gretting = function () {
    console.log(
      `Salom! Mening ismim ${this.ism}, familiyam ${this.familiya}. Yoshim ${this.yosh}da, ${this.uquvMaskani}da ${this.yunalishi} yo'nalishida o'qiyman. Maqsadim ${this.maqsadi}.`
    );
  };

  let teshavoy = new Person(
    "Teshavoy",
    "Boltaboyev",
    18,
    "Najot ta'lim",
    "Frontend",
    "Kuchli frontendchi bo'lish"
  );

  teshavoy.gretting();

  function Car(name, speed, color, price) {
    this.name = name;
    this.speed = speed;
    this.color = color;
    this.price = price;
  }

  Car.prototype.info = function () {
    console.log(
      `name: ${this.name}, speed: ${this.speed}km/h, color: ${this.color}, price: $${this.price}.`
    );
  };

  let bmw = new Car("BMW", 140, "black", 15_000);

  bmw.info();

  function Animal(nomi, turi, ozuqasi, olinadi, rangi) {
    this.nomi = nomi;
    this.turi = turi;
    this.ozuqasi = ozuqasi;
    this.olinadi = olinadi;
    this.rangi = rangi;
  }

  Animal.prototype.info = function () {
    console.log(
      `Hayvon nomi: ${this.nomi}, turi: ${this.turi}, ozuqasi ${this.ozuqasi}, undan ${this.olinadi} olinadi, rangi: ${this.rangi}`
    );
  };

  let sigir = new Animal(
    "Sigir",
    "Uy hayvoni",
    "O't-o'lanlar va yem xashaklar",
    "Sut",
    "Har xil rangda bo'ladi"
  );

  let tovuq = new Animal(
    "Tovuq",
    "Parranda",
    "Don-dunlar",
    "tuxum",
    "Har xil rangda bo'ladi"
  );

  sigir.info();
  tovuq.info();

  function Fruit(nomi, tami, rangi, shakli) {
    this.nomi = nomi;
    this.tami = tami;
    this.rangi = rangi;
    this.shakli = shakli;
  }

  Fruit.prototype.info = function () {
    console.log(
      `Mevaning nomi: ${this.nomi}, tami: ${this.tami}, rangi: ${this.rangi}, shakli: ${this.shakli}`
    );
  };

  let olcha = new Fruit("olcha", "nordon", "qizil", "kichik dumaloq");
  olcha.info();

  function Ovqat(nomi, mahsulotlar = []) {
    this.nomi = nomi;
    this.mahsulotlar = mahsulotlar;
  }

  Ovqat.prototype.tayyorlash = function () {
    console.log(`${this.nomi} tayyorlash uchun ${this.mahsulotlar} solinadi😂`);
  };

  let osh = new Ovqat("osh", [
    "yog",
    "gusht",
    "piyoz",
    "sabzi",
    "zira",
    "tuz",
    "guruch",
    "suv",
  ]);
  osh.tayyorlash();
});
