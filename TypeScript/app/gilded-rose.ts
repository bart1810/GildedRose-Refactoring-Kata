export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {

      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros": {
          item.quality = 80;
          break;
        }
        case "Aged Brie": {
          item = this.isQualityNegative(item);
          item = this.isQualityOverFifty(item);
          item = this.changeQualityOfItem(item);
          item.sellIn -= 1;
          break;
        }
        case "Backstage passes to a TAFKAL80ETC concert": {
          item = this.isQualityNegative(item);
          item = this.isQualityOverFifty(item);
          item = this.changeQualityOfBackstagePasses(item);
          item.sellIn -= 1;
          break;
        }
        case "Conjured Mana Cake": {
          item = this.isQualityNegative(item);
          item = this.isQualityOverFifty(item);
          item = this.changeQualityOfItem(item);
          item.sellIn -= 1;
          break;
        }
        default: {
          item = this.isQualityNegative(item);
          item = this.isQualityOverFifty(item);
          item = this.changeQualityOfItem(item);
          item.sellIn -= 1;
        }
      }
    });
    return this.items;
  }

  isQualityOverFifty(item: Item) {
    if (item.quality > 50) {
      item.quality = 50
    }
    return item
  }

  isQualityNegative(item: Item) {
    if (item.quality < 0) {
      item.quality = 0;
    }
    return item
  }

  changeQualityOfItem(item: Item) {
    if (!item.name.includes("Conjured")) {
      if (item.sellIn >= 0) {
        if (item.name !== "Aged Brie") {
          item.quality--;
        } else {
          item.quality++;
        }
      } else {
        if (item.name !== "Aged Brie") {
          item.quality -= 2;
        } else {
          item.quality += 2;
        }
      }
    }
    else {
      item.quality -= 2;
    }
    return item
  }

  changeQualityOfBackstagePasses(item: Item) {
    if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (item.sellIn <= 10) {
        item.quality += 2;
      }
      else if (item.sellIn <= 5) {
        item.quality += 3;
      }
      else if (item.sellIn <= 0) {
        item.quality = 0;
      } else {
        item.quality += 1;
      }
    }
    return item
  }
}
