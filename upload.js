// DISPLAYIN GCONTENT IN HEADER 

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

// DISABLING THE OPTIONS THAT IS NOT SELECTED BY THE USER

const main_interest = [interest1,interest2,interest3,interest4,interest5];

const options = document.querySelectorAll('option');

options.forEach(option => {
    
    if (!main_interest.includes(option.value)) {
      option.disabled = true;
    }
  });
  

// DISPLAYUG CONTENT IN HEADER ENDS HEREW 

const submit = document.getElementById('submit');

let blog_name  = JSON.parse(localStorage.getItem('blog_name')) || [];
let blog_content = JSON.parse(localStorage.getItem('blog_content')) || [];
let blog_category = JSON.parse(localStorage.getItem('blog_category')) || [];

submit.addEventListener('click',()=>{

    alert("Data Entered Successfullt");

    // TAKING VALUE 

    const blogName = document.getElementById('blog-name').value;
    const blogContent = document.getElementById('blog-content').value;
    const blogCategory = document.getElementById('blog-category').value;

    // STORING IN ARRAY 

    blog_name.push(blogName);
    blog_content.push(blogContent);
    blog_category.push(blogCategory);

    // SETTING IN LOCALSTORAGE 

    localStorage.setItem('blog_name',JSON.stringify(blog_name))
    localStorage.setItem('blog_content',JSON.stringify(blog_content))
    localStorage.setItem('blog_category',JSON.stringify(blog_category))
    

})

console.log(blog_name);
console.log(blog_content);
console.log(blog_category);
console.log(img);




