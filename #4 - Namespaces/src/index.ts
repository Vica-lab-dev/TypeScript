import {BudgetTracker} from "./namespaces/BudgetTracker/BudgetTracker";

namespace App {
    export function init() {
        BudgetTracker.UI.showBudget();
    }
}

App.init();