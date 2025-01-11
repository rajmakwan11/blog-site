const parent = document.querySelector('.container2');

export const selectedButtons = new Set();

parent.addEventListener('click', (event) => {
    const button = event.target;
    if (button.tagName === "BUTTON") {
        if (selectedButtons.has(button.id)) {
            button.style.backgroundColor = "lightgrey";
            selectedButtons.delete(button.id);  
        } else {
            if (selectedButtons.size < 5) {
                console.log(...selectedButtons);
                button.style.backgroundColor = "aqua";
                selectedButtons.add(button.id); 
            } else {
                alert("select only 5 buttons");
            }
        }
    }
});


 

document.querySelector('#submit').addEventListener('click', () => {
    if (selectedButtons.size == 5) {
        localStorage.setItem('selectedInterests', JSON.stringify([...selectedButtons]));
        window.location.href = "home.html";  
    } else {
        alert("Please select 5 interests.");
    }
});

