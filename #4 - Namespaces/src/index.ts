import {BudgetTracker} from "./namespaces/BudgetTracker/BudgetTracker";

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

BudgetTracker.UI.showBudget();