let selectedInterests = JSON.parse(localStorage.selectedInterests);
console.log(selectedInterests)

let interests = ["IT","Coder Army","Engineering","Web Dev","PHP","LATEST","JAVASCRIPT","Psychology","Programming","Books"];

// INSERTING CONTENT IN NAVBAR 

const first = document.getElementById('first-interest');
first.innerHTML = interests[selectedInterests[0]];

const interest1 = interests[selectedInterests[0]];

const second = document.getElementById('second-interest');
second.innerHTML = interests[selectedInterests[1]];

const interest2 = interests[selectedInterests[1]]

const third = document.getElementById('third-interest');
third.innerHTML = interests[selectedInterests[2]];

const interest3 = interests[selectedInterests[2]]

const fourth = document.getElementById('fourth-interest');
fourth.innerHTML = interests[selectedInterests[3]];

const interest4 = interests[selectedInterests[3]];

const five = document.getElementById('fifth-interest');
five.innerHTML = interests[selectedInterests[4]];

const interest5 = interests[selectedInterests[4]]

// INTERST CONTENT IN NAVNBAR ENDS HERE 

// CREATING AND DISPLAYING THE NOTES, TAKING DATA FROM THE LOCAL STORAGE 



 let notedata = JSON.parse(localStorage.getItem('notesArray')) || [];
 let notedate = JSON.parse(localStorage.getItem('notedate')) || [];

 console.log(notedata)

const rootNotes = document.querySelector('.root-notes');

if(notedata.length==0){
    const empty = document.getElementById('empty-div');
    empty.style.display="block";
}



for(let i=0; i<notedata.length; i++){

const note1 = document.createElement('div');
note1.className = 'note1';

const noteTextDiv = document.createElement('div');
noteTextDiv.className = 'note-text-div';

const noteText = document.createElement('p');
noteText.className = 'note-text';
noteText.innerHTML = notedata[i]; 


noteTextDiv.appendChild(noteText);


const noteDateDiv = document.createElement('div');
noteDateDiv.className = 'note-date-div';


const noteDate = document.createElement('p');
noteDate.className = 'note-date';
noteDate.innerHTML = notedate[i]; 

noteDateDiv.appendChild(noteDate);

note1.appendChild(noteTextDiv);
note1.appendChild(noteDateDiv);

rootNotes.appendChild(note1);

}

