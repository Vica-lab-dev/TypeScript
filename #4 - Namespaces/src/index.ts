import {BudgetTracker} from "./namespaces/BudgetTracker/BudgetTracker";

namespace App {
    export function init() {
        BudgetTracker.UI.showBudget();
        BudgetTracker.Finances.addExpense("Test", 5000);
    }
}

App.init();