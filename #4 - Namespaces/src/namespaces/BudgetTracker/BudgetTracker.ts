export namespace BudgetTracker {
    export namespace Finances {

        const STORAGE_KEY = "expenses";

        interface Expense {
            expense: string,
            amount: number
        }

        export function addExpense(expense: string, amount: number): void {
            const expenses = getAllExpenses();
            expenses.push({expense: expense, amount: amount});

            localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
        }

        export function getAllExpenses(): Expense[] {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        }
    }

    export namespace UI {
        import getAllExpenses = BudgetTracker.Finances.getAllExpenses;

        export function showBudget(): void {
            const data = getAllExpenses();

            data.forEach((expense: { expense: string; amount: number; }) => {
                const budgetDiv = document.querySelector("#personalBudget") as HTMLElement;
                budgetDiv.innerHTML += `<p>${expense.expense}: ${expense.amount}</p>`
            });
        }
    }
}