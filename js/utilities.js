function returnInputFieldValue(id){
    const value = document.getElementById(id).value;
    const valueNumber = parseFloat(value)
    return valueNumber;
}

// show action part on clicking button 

function showSection(id){
    document.getElementById('add-money-container').classList.add('hidden');
    document.getElementById('cash-out-container').classList.add('hidden');
    document.getElementById('transfer-money-container').classList.add('hidden');
    document.getElementById('transaction-history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

