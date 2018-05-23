# bank
Record and retrieve bank transactions.

**User Stories**

```
As a user so I can understand a payment better, I want to have the data of a transaction saved.

As a user so I know the impact of a transaction, I want my balance to be updated.

As a user so I can plan my budget, I want to be able to look back at my past transactions.
```

**Structure**

Public methods:

* deposit
* withdraw
* printStatement
* getBalance
* getTransactions

**Dependencies**

*Testing:* 

* Cucumber (BDD features)
* Mocha (Unit tests)
* Chai (assertions)

**Instructions**

Install:

```bash
git clone https://github.com/dewinterjack/bank
```

Testing:

```bash
npm install
npm test
```

Run:

```javascript
var account = require(./account);
account.deposit(500);
account.withdraw(35);
account.printStatement();
```