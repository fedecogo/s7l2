    const localStorageKey = 'notepad-memory';
    const namearea = document.getElementById('name_area');
    const sendBtn = document.getElementById('send');
    const deleteBtn = document.getElementById('delete');

    const save = () => {
      const content = namearea.value;
      localStorage.setItem(localStorageKey, content);
      alert('Nome salvato');
    };

    const deleteData = () => {
      localStorage.removeItem(localStorageKey);
      alert('Dati cancellati');
    };

    sendBtn.addEventListener('click', save);
    deleteBtn.addEventListener('click', deleteData);


    
    // set interval con assegnazione ternaria
    let counter = sessionStorage.getItem('counter') ? parseInt(sessionStorage.getItem('counter')) : 0 ;
    const counterDisplay = document.getElementById('counterDisplay');

    function incrementCounter() {
      counter++;
      counterDisplay.textContent = counter;
      sessionStorage.setItem('counter', counter);
    }

    const intervalId = setInterval(incrementCounter, 1000);

    


    