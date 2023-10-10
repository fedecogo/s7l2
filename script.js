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