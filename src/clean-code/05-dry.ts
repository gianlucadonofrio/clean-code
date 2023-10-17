type Size = "S" | "M" | "L" | "XL";
class Product {
  constructor(public name: string, public price: number, public size: string) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw new Error(`${key} is empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0)
            throw new Error(`${key} is zero`);
          break;
        default:
          throw new Error(`${key} is not a valid type`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady()) return;

    return `Product: ${this.name} - Price: ${this.price} - Size: ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue Pants", 20, "M");
  console.log(bluePants.toString());
})();
