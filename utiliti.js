// history tab 
function historyaddRemov(){
    const assistantTab = document.getElementById('assistant-tab');
    assistantTab.classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistantTab.classList.add('text-gray-600');
    // Results Summary
    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.add('hidden');
    const results = document.getElementById('results');
    results.classList.remove('hidden');
      //  Expense History
    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden');
    return assistantTab;
}
// assistant-tab
function assistantaddRemov(){
    const historyTab = document.getElementById('history-tab');
    historyTab.classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    historyTab.classList.add('text-gray-600')
    // Results Summary
    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.remove('hidden');
    const results = document.getElementById('results');
    results.classList.add('hidden');
     //  Expense History
    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden');
    return historyTab;
}