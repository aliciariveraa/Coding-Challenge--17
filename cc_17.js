// Task 1: Create Customer Class

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    // Adds a purchase amount to the purchase history
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }

    // Returns total amount spent by the customer
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}