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


// Task 3: Create VIPCustomer Class (extends Customer)

class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;  // VIP level could be 'Gold', 'Platinum'
    }

    // Override getTotalSpent to apply a 10% loyalty bonus
    getTotalSpent() {
        const totalSpent = super.getTotalSpent();
        const loyaltyBonus = totalSpent * 0.1;  // 10% bonus
        return totalSpent + loyaltyBonus;
    }
}


// Task 4: Build a Client Report System

const customer1 = new Customer("John Doe", "john@example.com");
customer1.addPurchase(100);
customer1.addPurchase(200);

const customer2 = new VIPCustomer("Jane Smith", "jane@example.com", "Platinum");
customer2.addPurchase(300);
customer2.addPurchase(400);

const customer3 = new Customer("Alice Weber", "alice@example.com");
customer3.addPurchase(150);

const salesRep = new SalesRep("Jake Brown");
salesRep.addClient(customer1);
salesRep.addClient(customer2);
salesRep.addClient(customer3);

// Total revenue from all customers
const totalRevenue = salesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0);

// High-spending customers (spent over $500)
const highSpendingCustomers = salesRep.clients.filter(client => client.getTotalSpent() > 500);

// Customer summary (name and total spent)
const customerSummary = salesRep.clients.map(client => ({
    name: client.name,
    totalSpent: client.getTotalSpent()
}));

// Logs
console.log("Total Revenue: $", totalRevenue);
console.log("High-Spending Customers:", highSpendingCustomers.map(client => client.name));
console.log("Customer Summary:");
customerSummary.forEach(client => console.log(`${client.name}: $${client.totalSpent.toFixed(2)}`));