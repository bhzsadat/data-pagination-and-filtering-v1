/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';

   //selecting the students we want to show on the page
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const studentItem = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${data[i].picture.thumbnail}" alt="Profile Picture">
               <h3>${data[i].name.first} ${data[i].name.last}</h3>
               <span class="email">${data[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${data[i].registered.date}</span>
            </div>
         </li>
         `;
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const numOfPages = Math.ceil(list.length/9);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';

   //Adding pagination
   for (let i = 1; i <= numOfPages; i++) {
      const button = `<li>
         <button type="button">${i}</button>
      </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }

   //Adding active class to the first button on load
   const firstBtn = linkList.querySelector('button');
   if (firstBtn) {
      firstBtn.className = 'active';
   }
   //Adding event handler
   linkList.addEventListener('click', (e) => {
      const trgt = e.target;
      if (trgt.tagName === 'BUTTON') {
         const actv = document.querySelector('.active');
         if (actv) {
            actv.className = '';
            
         }
         trgt.className = 'active';
         showPage(list, trgt.textContent);
         
      }
   });

}


// Call functions
showPage(data, 1);
addPagination(data);
