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


// Task 2: Create a SalesRep Class

class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    // Adds a customer to the client list
    addClient(customer) {
        this.clients.push(customer);
    }

    // Finds a client by name and returns total spent
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        if (client) {
            return client.getTotalSpent();
        }
        return `Client ${name} not found.`;
    }
}