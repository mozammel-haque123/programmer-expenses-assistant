// Income input
let caount = 0;



const calculate = document.getElementById('calculate');
calculate.addEventListener('click', function(){
const income = parseFloat(document.getElementById('income').value) ;
if(isNaN(income) || income < 0){
  document.getElementById('income-error').classList.remove('hidden');
  return;
}
const software = parseFloat(document.getElementById('software').value);
if(isNaN(software) || software < 0){
    document.getElementById('software-error').classList.remove('hidden');
    return;
  }
const courses = parseFloat(document.getElementById('courses').value);
if(isNaN(courses) || courses < 0){
    document.getElementById('courses-error').classList.remove('hidden');
    return;
  }
const internet = parseFloat(document.getElementById('internet').value);
if(isNaN(internet) || internet < 0){
    document.getElementById('internet-error').classList.remove('hidden');
    return;
  }

// Results Summary
const totalJog = software + courses + internet;

// Total expenses cannot exceed your income!
if(totalJog > income){
    document.getElementById('logic-error').classList.remove('hidden');
    return;
}

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
      <p class"text-sm">Serial: ${caount} </p>
      <p class"text-sm">Tarik: ${new Date().toLocaleDateString()} </p>
      <p class"text-sm">Time: ${ new Date().toLocaleTimeString()} </p>
      <p class"text-sm">Income: ${income} </p>
      <p class"text-sm">Expenses: ${totalJog} </p>
      <p class"text-sm">Balance: ${balanceBiyog} </p>
`
const historyList = document.getElementById('history-list');
historyList.insertBefore(eliment, historyList.firstChild);

})

// calculate Savings

const calculateSavings = document.getElementById('calculate-savings');
calculateSavings.addEventListener('click', function(){

    const savings = parseFloat(document.getElementById('savings').value);


    if(isNaN(savings) || savings < 0){
        document.getElementById('savings-error').classList.remove('hidden');
        return;
      }

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


