const dune = {
    author:'Frank Herbert',
    title:'Dune',
    pages:676,
    year:1969,
    id:1,
 }
const myLibrary = [dune];
const submit = document.getElementById('submitButton')
const openModalButton= document.getElementById('openModal')
const modalDialog= document.getElementById('modalDialog')

submit.addEventListener('click',()=> submit.textContent='uwu')
openModalButton.addEventListener('click', ()=> {modalDialog.showModal()
    console.log('working')
})

function Book(author, title, pages, year) {
  // the constructor...
  this.author=author
  this.title=title
  this.pages=pages
  this.year=year
  this.id=crypto.randomUUID()
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  let newBook= new Book(author, title, pages, year)
  myLibrary.push(newBook)
}

function displayBooks(){
    //displays the books in the array
    document.createElement('div')
}
