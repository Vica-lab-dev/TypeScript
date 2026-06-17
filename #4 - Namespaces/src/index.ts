namespace Chat {
    export function send(message: string): void {
        console.log(`Message was sent to chat: ${message}`);
    }
}

namespace Email {
    export function send(message: string): void {
        console.log(`Email was sent to chat: ${message}`);
    }
}

namespace BudgetTracker {
    export function addExpense(expense: string, amount: number): void {
        const expenses = getAllExpenses();
        expenses.push({expense: expense, amount: amount});

        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    export function getAllExpenses() {
        const data = localStorage.getItem('expenses');
        return data ? JSON.parse(data) : [];
    }

    export function showBudget(): void {
        const data = getAllExpenses();

        data.forEach((expense: { expense: string; amount: number; }) => {
            const budgetDiv = document.querySelector("#personalBudget") as HTMLElement;
            budgetDiv.innerHTML += `<p>${expense.expense}: ${expense.amount}</p>`
        });
    }
}

BudgetTracker.addExpense("New PC", 5000);
BudgetTracker.addExpense("New Mouse", 50);
BudgetTracker.showBudget();