export class Book {
  // private properties
  private id: number;
  private title: string;
  private category: string;
  private price: number;
  private stock: number;

  // constructor
  public constructor(id: number, title: string, category: string, price: number, stock: number) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }

  //getters
  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getCategory(): string {
    return this.category;
  }

  public getPrice(): number {
    return this.price;
  }

  public getStock(): number {
    return this.stock;
  }

  //setters
  public setId(id: number): void {
    this.id = id;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public setStock(stock: number): void {
    this.stock = stock;
  }
}