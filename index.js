// Income input
let caount = 0;
const calculate = document.getElementById('calculate');
calculate.addEventListener('click', function(){
const income = parseFloat(document.getElementById('income').value) ;
const software = parseFloat(document.getElementById('software').value);
const courses = parseFloat(document.getElementById('courses').value);
const internet = parseFloat(document.getElementById('internet').value);


// Results Summary
const totalJog = software + courses + internet;
const totalExpenses = document.getElementById('total-expenses');
totalExpenses.innerText = totalJog.toFixed(2);

const balanceBiyog = income - totalJog;

const balanceTotal = document.getElementById('balance');
balanceTotal.innerText = balanceBiyog.toFixed(2);

const results = document.getElementById('results');
results.classList.remove('hidden');


caount += 1;


const eliment = document.createElement('div');
eliment.className = 'bg-white p-3 rounded-md shadow-sm border-l-2 border-blue-500 text-sm ';

eliment.innerHTML = `
      <p>Income: ${caount} </p>
      <p>Income: ${income} </p>
      <p>Expenses: ${totalJog} </p>
      <p>Balance: ${balanceBiyog} </p>
`
const historyList = document.getElementById('history-list');
historyList.insertBefore(eliment, historyList.firstChild);

})

// calculate Savings

const calculateSavings = document.getElementById('calculate-savings');
calculateSavings.addEventListener('click', function(){

    const savings = parseFloat(document.getElementById('savings').value);

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

        
    // Results Summary
    const savingsAmount = document.getElementById('savings-amount');
    const motMainasValue = document.getElementById('remaining-balance');


    const totalJog = software + courses + internet;
    const balanceBiyog = income - totalJog;

    const totalSaving = balanceBiyog * savings / 100;
    savingsAmount.innerText = totalSaving.toFixed(2);


    const remainingBalance = balanceBiyog - totalSaving;
    motMainasValue.innerText = remainingBalance.toFixed(2);

    
// console.log(totalSaving)
})




// history tab 
const historyTab = document.getElementById('history-tab');
historyTab.addEventListener('click', function(){

   historyTab.classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
   historyaddRemov();

 
//    const assistantTab = document.getElementById('assistant-tab');
//    assistantTab.classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
//    assistantTab.classList.add('text-gray-600');
//    const expenseForm = document.getElementById('expense-form');
//    expenseForm.classList.add('hidden');
})





// assistant-tab
const assistantTab = document.getElementById('assistant-tab');
assistantTab.addEventListener('click', function(){

    assistantTab.classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistantaddRemov()

    // const historyTab = document.getElementById('history-tab');
    // historyTab.classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    // historyTab.classList.add('text-gray-600')
    // const expenseForm = document.getElementById('expense-form');
    // expenseForm.classList.remove('hidden');
})


