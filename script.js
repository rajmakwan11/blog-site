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


// HEADER DISPLAYING ENDS 

let blogs = [
 
    
    {
      img: 'it1-img.webp', // Add your own image
      title: 'Introduction to IT',
      paragraph: 'Information Technology (IT) refers to the use of computers, networking, and data management to process and store information. It has revolutionized businesses, education, and communication. IT professionals are responsible for designing, developing, and maintaining systems that support a wide range of applications. Understanding IT is fundamental for today’s world.',
      category: 'IT'
    },

    
    {
      img: 'it2-img.jpg', // Add your own image
      title: 'Basic Computer Hardware',
      paragraph: 'Computer hardware includes the physical components of a computer system, such as the CPU, RAM, motherboard, hard drive, and more. Understanding these components and how they work together is crucial for troubleshooting, repairs, and optimizing system performance. It’s a fundamental topic for anyone entering the IT field.',
      category: 'IT'
    },

    
    {
      img: 'it3-img.jpeg', // Add your own image
      title: 'Operating Systems Basics',
      paragraph: 'An operating system (OS) manages the computer’s hardware and software resources and provides common services for computer programs. Examples include Windows, macOS, and Linux. OS skills are essential for IT professionals who work in areas like system administration, network management, and software development.',
      category: 'IT'
    },

    
    {
      img: 'it4-img.jpg', // Add your own image
      title: 'Introduction to Databases',
      paragraph: 'Databases are structured collections of data that can be easily accessed, managed, and updated. IT professionals working with databases focus on designing, developing, and maintaining these systems to store and retrieve data efficiently. Knowledge of databases is essential for fields like web development, data analysis, and business intelligence.',
      category: 'IT'
    },

  
    {
      img: 'it5-img.jpg', // Add your own image
      title: 'Networking Fundamentals',
      paragraph: 'Networking refers to the practice of connecting computers and other devices to share data and resources. IT professionals need to understand networking protocols, IP addresses, routers, and switches to build and maintain networks. Networking is a core aspect of IT infrastructure in organizations and businesses.',
      category: 'IT'
    },
  
    
    {
      img: 'coder1-img.png', // Add your own image
      title: 'Introduction to HTML',
      paragraph: 'HTML (HyperText Markup Language) is the standard language for creating webpages. It structures content using elements like headings, paragraphs, links, and images. HTML forms the backbone of every web page, and learning it is the first step for anyone interested in web development. It is essential for building accessible and well-structured websites.',
      category: 'Coder Army'
    },

    
    {
      img: 'coder2-img.png', // Add your own image
      title: 'Introduction to CSS',
      paragraph: 'CSS (Cascading Style Sheets) is used to style HTML elements. It controls the layout, colors, fonts, and visual elements of a webpage. CSS enhances the user experience by making websites more visually appealing. It is crucial for web developers to understand CSS for creating responsive and aesthetically pleasing web pages.',
      category: 'Coder Army'
    },

    
    {
      img: 'coder3-img.png', // Add your own image
      title: 'Introduction to JavaScript',
      paragraph: 'JavaScript is a programming language used to add interactivity to web pages. It allows developers to create dynamic content, such as pop-up messages, interactive forms, and animations. JavaScript is essential for making websites more engaging and is a must-learn for modern web developers.',
      category: 'Coder Army'
    },

    
    {
      img: 'coder4-img.png', // Add your own image
      title: 'Introduction to Computer Networks',
      paragraph: 'Computer networks allow devices to communicate and share resources. Examples include the Internet, LANs, and WANs. Networks are fundamental to web development, as they enable data transfer between servers and users. Understanding how networks work is crucial for building web applications that communicate with remote servers.',
      category: 'Coder Army'
    },

    
    {
      img: 'coder5-img.png', // Add your own image
      title: 'Introduction to Git and GitHub',
      paragraph: 'Git is a version control system that tracks changes in code, while GitHub is a platform for hosting Git repositories. They are essential tools for developers, allowing them to collaborate on projects, manage versions, and share code. Mastering Git and GitHub is necessary for efficient software development, especially in team-based environments.',
      category: 'Coder Army'
    },


  
    
    {
      img: 'engineering1-img.jpg', // Add your own image
      title: 'Introduction to Civil Engineering',
      paragraph: 'Civil engineering is a branch of engineering that focuses on designing, constructing, and maintaining infrastructure like roads, bridges, and buildings. It involves planning, analysis, and implementation of complex projects. Civil engineers must have a strong understanding of materials, environmental factors, and structural integrity to ensure safety and sustainability.',
      category: 'Engineering'
    },

    
    {
      img: 'engineering2-img.webp', // Add your own image
      title: 'Introduction to Mechanical Engineering',
      paragraph: 'Mechanical engineering is concerned with the design, analysis, and manufacturing of mechanical systems. It involves understanding principles of motion, energy, and force to design machines and tools. Mechanical engineers work in a wide range of industries, from automotive to aerospace, using their skills to improve efficiency, reduce costs, and innovate new technologies.',
      category: 'Engineering'
    },

    
    {
      img: 'engineering3-img.jpg', // Add your own image
      title: 'Introduction to Electrical Engineering',
      paragraph: 'Electrical engineering focuses on the study and application of electricity, electronics, and electromagnetism. Electrical engineers design and develop electrical systems, circuits, and devices. Their work is critical in fields like energy generation, communication, and transportation. They are responsible for creating and maintaining the electrical infrastructure that powers our modern world.',
      category: 'Engineering'
    },

   
    {
      img: 'engineering4-img.jpg', // Add your own image
      title: 'Introduction to Computer Engineering',
      paragraph: 'Computer engineering blends principles of electrical engineering and computer science to develop hardware and software systems. Computer engineers design and build computing devices, from microprocessors to complex data networks. They work in fields such as embedded systems, robotics, and software development, creating the backbone of modern technology and communication.',
      category: 'Engineering'
    },
    
    {
      img: 'engineering5-img.jpg', // Add your own image
      title: 'Introduction to Chemical Engineering',
      paragraph: 'Chemical engineering is the branch of engineering that deals with the design, optimization, and operation of chemical processes that transform raw materials into valuable products. Chemical engineers apply principles of chemistry, physics, biology, and mathematics to solve problems related to energy, environment, and the production of chemicals, pharmaceuticals, and materials.',
      category: 'Engineering'
    },
   
    {
      img: 'web1-img.png', // Add your own image
      title: 'Introduction to Web Development',
      paragraph: 'Web development involves building and maintaining websites or web applications. It encompasses both the front-end (user interface) and back-end (server-side logic). Developers use technologies like HTML, CSS, JavaScript, and various frameworks to create interactive, user-friendly websites. Web development also involves databases, hosting, and security to ensure a seamless user experience.',
      category: 'Web Dev'
    },

   
    {
      img: 'web2-img.jpg', // Add your own image
      title: 'HTML Basics for Web Developers',
      paragraph: 'HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure for content on the web, including text, images, and links. HTML uses tags to format elements, and every website relies on HTML to display content in a browser. Understanding HTML is the first step in becoming a web developer, as it forms the foundation of web design.',
      category: 'Web Dev'
    },

    
    {
      img: 'web3-img.jpg', // Add your own image
      title: 'Introduction to CSS',
      paragraph: 'CSS (Cascading Style Sheets) is used to control the appearance of HTML elements on a web page. It allows developers to define fonts, colors, layouts, and more. By separating the content (HTML) from the presentation (CSS), developers can create visually appealing, responsive websites. CSS is essential for building modern, interactive user interfaces in web development.',
      category: 'Web Dev'
    },

    
    {
      img: 'web4-img.jpg', // Add your own image
      title: 'JavaScript for Interactive Websites',
      paragraph: 'JavaScript is a programming language that enables dynamic, interactive content on websites. With JavaScript, developers can create interactive forms, animations, and real-time updates. It’s an essential tool for front-end web development and is often used alongside HTML and CSS. Mastering JavaScript opens the door to building modern, engaging web applications that users can interact with seamlessly.',
      category: 'Web Dev'
    },

    
    {
      img: 'web5-img.jpg', // Add your own image
      title: 'Introduction to Responsive Web Design',
      paragraph: 'Responsive web design ensures that websites look great on any device, whether it’s a desktop, tablet, or smartphone. By using flexible layouts, grids, and media queries, developers can create websites that adapt to different screen sizes and resolutions. This approach is crucial for providing a positive user experience across a wide range of devices and increasing the accessibility of your website.',
      category: 'Web Dev'
    },
 
    
    {
      img: 'php1-img.jpg', // Add your own image
      title: 'Introduction to PHP',
      paragraph: 'PHP (Hypertext Preprocessor) is a popular server-side scripting language used for web development. It allows developers to create dynamic web pages and interact with databases. PHP is often used in combination with HTML, CSS, and JavaScript to build interactive websites. It powers many popular platforms like WordPress and Facebook, making it an essential skill for web developers.',
      category: 'PHP'
    },

   
    {
      img: 'php2-img.jpg', // Add your own image
      title: 'PHP Syntax and Basics',
      paragraph: 'PHP syntax is simple and easy to learn for beginners. It uses semicolons to end statements, and curly braces to define code blocks. PHP can be embedded within HTML code, making it ideal for dynamic web pages. Understanding basic syntax, variables, operators, and control structures is essential for writing functional PHP scripts. It’s the foundation for building interactive and data-driven websites.',
      category: 'PHP'
    },

    
    {
      img: 'php3-img.png', // Add your own image
      title: 'PHP Forms and User Input',
      paragraph: 'PHP is commonly used to process form data and manage user input on websites. When a user submits a form, PHP can validate the data, store it in a database, or send an email. PHP handles both GET and POST data from forms, making it a powerful tool for creating interactive web applications. Learning how to work with PHP forms is essential for building functional, user-friendly websites.',
      category: 'PHP'
    },

    
    {
      img: 'php4-img.jpg', // Add your own image
      title: 'Connecting PHP with MySQL Database',
      paragraph: 'PHP and MySQL work together to create dynamic websites that store and retrieve data. MySQL is a relational database management system, and PHP provides the interface to connect to it. By using SQL queries, PHP can add, update, delete, and fetch data from the database. This combination allows developers to create data-driven websites such as blogs, e-commerce platforms, and social media sites.',
      category: 'PHP'
    },

    
    {
      img: 'php5-img.jpg', // Add your own image
      title: 'PHP and Sessions for User Authentication',
      paragraph: 'PHP sessions allow developers to store user information across multiple pages. Sessions are essential for user authentication, where a user logs in once, and their identity is preserved as they navigate through the website. PHP sessions use session variables to store and retrieve user data securely. This technique is critical for building secure login systems, personalized dashboards, and member-only areas of websites.',
      category: 'PHP'
    },
  
    
    {
      img: 'latest1-img.jpg', // Add your own image
      title: 'Global Technology Innovations',
      paragraph: 'Technology is rapidly advancing, with breakthroughs occurring in artificial intelligence, quantum computing, and biotechnology. Innovations in AI are transforming industries like healthcare, finance, and manufacturing, enabling automation and smarter decision-making. Quantum computing promises to revolutionize computing power, and biotechnology holds the potential to cure diseases and extend human life.',
      category: 'LATEST'
    },

   
    {
      img: 'latest2-img.jpg', // Add your own image
      title: 'Space Exploration Milestones',
      paragraph: 'Recent achievements in space exploration have sparked excitement across the globe. NASA’s Mars Rover has successfully sent back valuable data, and private companies like SpaceX are pushing the boundaries of space travel. Space tourism is becoming a reality, and upcoming missions aim to explore the Moon, Mars, and beyond, paving the way for a new era of interplanetary exploration.',
      category: 'LATEST'
    },

   
    {
      img: 'latest3-img.png', // Add your own image
      title: 'Climate Change and Environmental Impact',
      paragraph: 'The effects of climate change are becoming more apparent, with rising sea levels, extreme weather events, and loss of biodiversity. Global leaders are calling for urgent action to mitigate the environmental crisis by adopting renewable energy, reducing carbon emissions, and protecting ecosystems. Climate change poses significant risks, and efforts to combat it are critical for the future of our planet.',
      category: 'LATEST'
    },

    
    {
      img: 'latest4-img.webp', // Add your own image
      title: 'The Rise of Electric Vehicles',
      paragraph: 'Electric vehicles (EVs) are gaining popularity as consumers and automakers alike prioritize sustainability. With advancements in battery technology, EVs are becoming more affordable and offering longer ranges. Governments are encouraging EV adoption through incentives and infrastructure development. As electric vehicles become more mainstream, they will play a crucial role in reducing carbon emissions and combating climate change.',
      category: 'LATEST'
    },

    
    { 
      img: 'latest5-img.webp', // Add your own image
      title: 'Breakthroughs in Healthcare Technology',
      paragraph: 'Advancements in healthcare technology are transforming the medical field, improving diagnosis, treatment, and patient care. Innovations like telemedicine, wearable health devices, and AI-powered medical tools are enhancing healthcare accessibility and efficiency. Breakthroughs in genomics and biotechnology are also providing new treatments for diseases that were previously difficult to cure, promising a healthier future.',
      category: 'LATEST'
    },
  
   
    {
      img: 'js1-img.png', // Add your own image
      title: 'Introduction to JavaScript',
      paragraph: 'JavaScript is a versatile programming language used to create interactive web applications. It allows developers to manipulate web page content, respond to user interactions, and build dynamic features. JavaScript runs in the browser, making it essential for front-end development. Learning JavaScript opens doors to developing rich, interactive websites and web apps, powering some of the most popular platforms online.',
      category: 'JAVASCRIPT'
    },

   
    {
      img: 'js2-img.png', // Add your own image
      title: 'JavaScript Functions and Scope',
      paragraph: 'Functions in JavaScript are blocks of code designed to perform a specific task. They are essential for organizing code and making it reusable. Understanding scope is crucial in JavaScript, as it determines the visibility of variables and functions within different parts of your code. Proper use of functions and scope helps to create modular, maintainable, and efficient JavaScript code.',
      category: 'JAVASCRIPT'
    },

    
    {
      img: 'js3-img.jpg', // Add your own image
      title: 'Asynchronous Programming in JavaScript',
      paragraph: 'Asynchronous programming in JavaScript allows tasks like data fetching, animations, and timers to run in the background, without blocking the rest of the code from executing. Promises, async/await, and callbacks are key concepts for managing asynchronous operations. Mastering asynchronous JavaScript is essential for building responsive, real-time web applications that provide a smooth user experience.',
      category: 'JAVASCRIPT'
    },

   
    {
      img: 'js4-img.jpg', // Add your own image
      title: 'JavaScript DOM Manipulation',
      paragraph: 'The Document Object Model (DOM) represents the structure of a webpage as a tree of elements. JavaScript allows developers to manipulate the DOM to change content, add events, and update styles dynamically. DOM manipulation is fundamental for creating interactive websites that respond to user actions like clicks, scrolls, and inputs. Understanding DOM manipulation is essential for modern front-end web development.',
      category: 'JAVASCRIPT'
    },

    
    {
      img: 'js5-img.jpg', // Add your own image
      title: 'Introduction to JavaScript Frameworks',
      paragraph: 'JavaScript frameworks like React, Angular, and Vue provide pre-built solutions for common web development challenges. They help developers build complex, dynamic applications more efficiently by offering tools and patterns for managing state, routing, and components. Understanding JavaScript frameworks allows developers to streamline their workflow and create scalable, maintainable web applications with less code.',
      category: 'JAVASCRIPT'
    },
  
    
    {
      img: 'psycho1-img.jpg', // Add your own image
      title: 'Understanding Cognitive Behavioral Therapy',
      paragraph: 'Cognitive Behavioral Therapy (CBT) is a therapeutic approach that focuses on identifying and changing negative thought patterns and behaviors. CBT is widely used to treat anxiety, depression, and other mental health disorders. By addressing distorted thinking, CBT helps individuals develop healthier thought patterns, leading to improved emotional well-being and coping strategies.',
      category: 'Psychology'
    },

    
    {
      img: 'psycho2-img.webp', // Add your own image
      title: 'The Role of Emotions in Decision Making',
      paragraph: 'Emotions play a crucial role in decision-making processes. While logic and reason are essential, emotions can heavily influence our choices. Studies show that emotional reactions can sometimes override rational thinking, leading to impulsive decisions. Understanding how emotions shape decision-making can help individuals make better, more balanced choices and increase emotional intelligence.',
      category: 'Psychology'
    },

    
    {
      img: 'psycho3-img.jpg', // Add your own image
      title: 'The Psychology of Motivation',
      paragraph: 'Motivation is the driving force behind our actions. Psychologists classify motivation into intrinsic and extrinsic types. Intrinsic motivation comes from within, driven by personal satisfaction, while extrinsic motivation is influenced by external rewards like money or recognition. Understanding the psychology of motivation can help individuals set effective goals and overcome obstacles to achieving them.',
      category: 'Psychology'
    },

    
    {
      img: 'psycho4-img.jpg', // Add your own image
      title: 'The Impact of Social Media on Mental Health',
      paragraph: 'Social media has a significant impact on mental health, both positive and negative. While it helps individuals stay connected, excessive use can lead to feelings of loneliness, anxiety, and depression. Studies show that social media addiction can cause a decrease in self-esteem, especially among young adults. Balancing social media usage and real-world interactions is essential for mental well-being.',
      category: 'Psychology'
    },

    
    {
      img: 'psycho5-img.jpg', // Add your own image
      title: 'Understanding Anxiety Disorders',
      paragraph: 'Anxiety disorders are among the most common mental health issues worldwide. They involve excessive fear, worry, and nervousness that can interfere with daily life. Conditions such as generalized anxiety disorder (GAD), panic disorder, and social anxiety disorder can be debilitating. Treatment options, including therapy and medication, can help manage symptoms and improve quality of life for those affected.',
      category: 'Psychology'
    },

   
    {
      img: 'pro1-img.jpg', // Add your own image
      title: 'Introduction to Algorithms',
      paragraph: 'Algorithms are the foundation of computer science. They are step-by-step procedures for solving problems or performing tasks efficiently. Understanding algorithms is crucial for writing efficient code, optimizing performance, and solving complex problems. Topics like sorting, searching, and dynamic programming are essential for developers to master for effective problem-solving.',
      category: 'Programming'
    },

   
    {
      img: 'pro2-img.webp', // Add your own image
      title: 'Object-Oriented Programming Basics',
      paragraph: 'Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects, each containing data and methods. Key principles of OOP include encapsulation, inheritance, polymorphism, and abstraction. Understanding OOP concepts helps developers design modular, reusable, and scalable code, which is easier to maintain and troubleshoot.',
      category: 'Programming'
    },

   
    {
      img: 'pro3-img.jpg', // Add your own image
      title: 'Data Structures Every Developer Should Know',
      paragraph: 'Data structures are ways to organize and store data efficiently. Common data structures include arrays, linked lists, stacks, queues, trees, and graphs. Knowing which data structure to use for a specific problem can drastically improve the performance of your program. A strong foundation in data structures is crucial for every developer to solve complex problems effectively.',
      category: 'Programming'
    },

    
    {
      img: 'pro4-img.jpg', // Add your own image
      title: 'Understanding Recursion',
      paragraph: 'Recursion is a technique where a function calls itself in order to solve smaller instances of the same problem. Recursion is widely used in problems related to tree traversal, dynamic programming, and divide-and-conquer algorithms. Understanding recursion requires mastering base cases and recursive cases, ensuring the function terminates correctly and avoids infinite loops.',
      category: 'Programming'
    },

   
    {
      img: 'pro5-img.jpg', // Add your own image
      title: 'Introduction to Web Development',
      paragraph: 'Web development is the process of building and maintaining websites. It involves front-end (client-side) development using HTML, CSS, and JavaScript, as well as back-end (server-side) development using technologies like PHP, Python, or Node.js. Web development is an exciting field with endless possibilities, from building simple websites to complex web applications and e-commerce platforms.',
      category: 'Programming'
    },
  
   
    {
      img: 'book1-img.jpg', // Add your own image
      title: 'The Power of Reading Books',
      paragraph: 'Reading books is a powerful way to gain knowledge, stimulate the mind, and expand perspectives. Books provide a wealth of information, from fiction that ignites imagination to non-fiction that offers insights into history, science, and personal development. Reading regularly can improve vocabulary, critical thinking, and overall cognitive function, making it an essential habit for lifelong learning.',
      category: 'Books'
    },

   
    {
      img: 'book2-img.jpg', // Add your own image
      title: 'Must-Read Books for Personal Development',
      paragraph: 'Personal development books are an excellent resource for self-improvement and motivation. Books like "The Power of Habit" by Charles Duhigg and "Atomic Habits" by James Clear provide actionable advice on how to build better habits and achieve personal goals. Other popular titles like "The 7 Habits of Highly Effective People" offer strategies for improving productivity and leadership skills.',
      category: 'Books'
    },

    
    {
      img: 'book3-img.jpg', // Add your own image
      title: 'The Best Fiction Books of All Time',
      paragraph: 'Fiction books transport readers to different worlds, offering a break from reality while exploring complex themes. Classics like "To Kill a Mockingbird" by Harper Lee and "1984" by George Orwell offer timeless lessons on human nature, society, and politics. Books like "The Great Gatsby" and "Pride and Prejudice" continue to captivate readers with their rich characters and compelling storytelling.',
      category: 'Books'
    },

    
    {
      img: 'book4-img.jpg', // Add your own image
      title: 'Exploring the World of Science Fiction',
      paragraph: 'Science fiction is a genre that blends imagination and technology, offering readers a glimpse into future possibilities. Books like "Dune" by Frank Herbert and "Ender\'s Game" by Orson Scott Card present futuristic societies, alien species, and complex moral dilemmas. Science fiction explores the relationship between technology and humanity, inspiring new ideas and innovations in science and society.',
      category: 'Books'
    },

  
    {
      img: 'book5-img.jpg', // Add your own image
      title: 'The Rise of Audiobooks and Digital Reading',
      paragraph: 'Audiobooks and digital reading platforms have transformed the way we consume books. With services like Audible and Kindle, readers can now enjoy books on-the-go, whether commuting, exercising, or relaxing at home. Audiobooks have become a preferred choice for busy individuals, while e-readers provide a convenient alternative to traditional paper books. Both formats are reshaping the reading experience in the digital age.',
      category: 'Books'
    }
  

];

// TAKING THE BLOG THAT IS UPLOADED BY THE USER AND ADDING INTO THE MAIN OBJECCT TO DISPLAY

let blog_name  = JSON.parse(localStorage.getItem('blog_name')) || [];
let blog_content = JSON.parse(localStorage.getItem('blog_content')) || [];
let blog_category = JSON.parse(localStorage.getItem('blog_category')) || [];


if(blog_name.length>0){



for(let i = 0 ; i<blog_name.length; i++){

  let obj = {};

    obj.img = "random-img.jpeg"; 
    obj.title = blog_name[i]
    obj.paragraph = blog_content[i]
    obj.category = blog_category[i]

    console.log(obj)
  blogs.unshift(obj);
  
  // console.log(obj);
}

}


// MAKING AND DISPLAYING THE CARDS WITH DATA 

function displayBlogs(blogs, filter = main_interest) {
  const blogSection = document.getElementById("root-blogs");
  blogSection.innerHTML = ""; 

  blogs.forEach(blog => {
    // THIS IS CONDITION IS CHECKING THAT THE CHOSEN INTEREST BLOGS WILL DISPLAY
    if (filter.includes(blog.category)) {
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
    }
  });
}

// SETTING UP CATEGORY BUTTONS FOR FILTERING BLOGS
function setupCategoryButtons(blogs) {
  const buttons = document.querySelectorAll(".head-contents-div button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.textContent;

      if (selectedCategory === "All") {
       
        location.reload()
        // displayBlogs(blogs, blogs.map(blog => blog.category));
      } else {
        
        displayBlogs(blogs, [selectedCategory]);
      }
    });
  });
}


// DISPLAYING AT STARTING 
displayBlogs(blogs); 
// DISPLAYS AFTER CLICKING ANY OF THE BUTTON 
setupCategoryButtons(blogs); 


// DISPLAYING TEXT EDITOR WHEN WE CLICK THE TAKE NOTE BUTTON 

const takeNoteButton = document.getElementById('take-note');
const editorContainer = document.getElementById('editor-container');

takeNoteButton.addEventListener('click', () => {
  editorContainer.style.display = "block";  
});

// STOP DISPLAYING EDITOR WHEN WE CLICK THE CALCEL BUTTON 

const cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
  editorContainer.style.display="none";
});


// TAKINGB THE CONTENT OF THE TEXT EDITOR AND STORING IN A LOCALSTORAGE

// THIS notesArray WILL STORE THE EDITORS CONTENT IN AN ARRAY 

let notesArray = JSON.parse(localStorage.getItem('notesArray')) || [];

let notedate = JSON.parse(localStorage.getItem('notedate')) || [];


submit.addEventListener('click', () => {

  const editor = document.getElementById('editor').innerHTML;

  notesArray.push(editor.trim());

  localStorage.setItem('notesArray', JSON.stringify(notesArray));

  // STORING DATE AND TIME 

  const now = new Date();
  const dateTime = now.toLocaleString();
  notedate.push(dateTime);
  localStorage.setItem('notedate', JSON.stringify(notedate));

  // DATE AND TIME STORING CODE ENDS HERE 

  editorContainer.style.display = "none";

});

console.log(notesArray);


// STORING CONTENT AND DATE ENDS HERE 


// DISPLAYING BLOG THAT IS UPLOADED



// console.log(blog_name);
// console.log(blog_content);
// console.log(blog_category)
// console.log(img);


