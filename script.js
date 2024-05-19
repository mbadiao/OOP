class product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItems {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// Shopping cart class containing an array of ShoppingCartItem instances
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to get the total number of items inside the cart
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Method to add items to the cart
  addItem(product, quantity) {
    const newItem = new ShoppingCartItems(product, quantity);
    this.items.push(newItem);
  }

  // Method to remove items from the cart
  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  // Method to display cart items
  displayCart() {
    console.log("Shopping Cart Items:");
    this.items.forEach((item, index) => {
      console.log(
        `Item ${index + 1}: ${item.product.name} - Quantity: ${
          item.quantity
        } - Total Price: ${item.getTotalPrice()}`
      );
    });
    console.log(`Total Items: ${this.getTotalItems()}`);
  }
}

const product1 = new product(1, "Product 1", 10);
const product2 = new product(2, "Product 2", 20);
const product3 = new product(3, "Product 3", 30);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 3);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(1);

// Display the updated cart
cart.displayCart();