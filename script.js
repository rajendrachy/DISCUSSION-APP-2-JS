window.onload = function() {
    document.querySelector('.butt').onclick = function() {
        let subject = document.querySelector('.inp').value;
        let question = document.querySelector('textarea').value;

        let newEntry = document.createElement('div');
        newEntry.style = 'background-color: rgba(0,0,0,0.040);padding: 20px; margin-top: 10px;  border: 1px solid rgba(0, 0, 0, 0.228);  border-left: none;';
        newEntry.innerHTML = `<h1 style="margin: 0;">${subject}</h1><p style="margin: 0;">${question}</p>`;


        document.querySelector('.containr1').appendChild(newEntry);
         
        // to clear the input and question where we enter
        document.querySelector('.inp').value = '';
        document.querySelector('textarea').value = '';


    };
};
