// HEADER CONTENT SHOWINGF
// HEADER INTEREST  DISPLAYING 


let selectedInterests = JSON.parse(localStorage.selectedInterests);

//selectedInterests contents numbers that are selected

console.log(selectedInterests);

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


// STORING SELECTED INTEREST IN STRING LIKE CODER ARMY PROGRAMMING ETC

const main_interest = [interest1,interest2,interest3,interest4,interest5];
console.log(main_interest)

// HEADER ENDS 

// TAKING DATA FROM LOCALHOST AND DISPLAYING ALL THE UPLOADED BLOGS 

let blog_name  = JSON.parse(localStorage.getItem('blog_name')) || [];
let blog_content = JSON.parse(localStorage.getItem('blog_content')) || [];
let blog_category = JSON.parse(localStorage.getItem('blog_category')) || [];

let blogs = [];


if(blog_name.length>0){



for(let i = 0 ; i<blog_name.length; i++){

  let obj = {};

    obj.img = "random-img.jpeg";
    obj.title = blog_name[i]
    obj.paragraph = blog_content[i]
    obj.category = blog_category[i]

    console.log(obj)
    blogs.unshift(obj);
  
 
}
}

console.log(blogs);
const blogSection = document.getElementById("root-blogs");
blogs.forEach(blog => {
    // THIS IS CONDITION IS CHECKING THAT THE CHOSEN INTEREST BLOGS WILL DISPLAY
   
      const blogDiv = document.createElement('div');
      blogDiv.classList.add('blog1');

      const imgDiv = document.createElement('div');
      imgDiv.classList.add('img-div');

      const img = document.createElement('img');
      img.src = `./images/${blog.img}`;
      img.classList.add('blog-img');
      imgDiv.appendChild(img);

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('blog-content');

      const title = document.createElement('h2');
      title.textContent = `Title : ${blog.title}`;
      title.classList.add('blog-title');
      contentDiv.appendChild(title);

      const paragraph = document.createElement('p');
      paragraph.textContent = blog.paragraph;
      paragraph.classList.add('blog-para');
      contentDiv.appendChild(paragraph);

      const category = document.createElement('p');
      category.textContent = `Category : ${blog.category}`;
      category.classList.add('category');
      contentDiv.appendChild(category);

      blogDiv.appendChild(imgDiv);
      blogDiv.appendChild(contentDiv);

      blogSection.appendChild(blogDiv);
    
  });