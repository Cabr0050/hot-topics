// GET THE REFERENCES
const container = document.querySelector('.dynamic-content');
const links = document.querySelectorAll('.main-nav nav ul li a'); 
let url = './partials/content-home.html'; 

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (urlPlaceholder) => {

   // RUN THE fetch(urlFeed).then().then().catch()
   fetch(urlPlaceholder)
   .then(response => {
      if (response.statusText === 'OK') {
         return response.text();
      }  

      throw new Error(response.statusText);
   })   
   .then(data => container.innerHTML = data)
   .catch(err => container.innerText = err.message);
   // CLOSE YOUR FUNCTION loadContent HERE
} 

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url); 

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent  = e => {
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   e.preventDefault(); 
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   url = e.target.href; 
   // CALL THE FUNCTION loadContent PROVIDING THE href
   loadContent(url); 
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER OF loadContent FUNCTION.

// CLOSE YOUR FUNCTION selectContent HERE
}
   
// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let btn of links){
   btn.addEventListener('click', selectContent);
}
