const dune = {
    author:'Frank Herbert',
    title:'Dune',
    pages:676,
    year:1969,
    id:1,
    read: false,
    displayed:false,
}
const mistborn = {
    author:'Brandon Sanderson',
    title:'Mistborn',
    pages:700,
    year:2012,
    id:2,
    read: false,
    displayed:false,
}
const myLibrary = [dune,mistborn];
const submit = document.getElementById('form')
const openModalButton= document.getElementById('openModal')
const modalDialog= document.getElementById('modalDialog')
const bookDisplay= document.getElementById('bookDisplay')

submit.addEventListener('submit',(event)=>{
  event.preventDefault()
  let author = document.getElementById('newAuthor').value
  let title = document.getElementById('newTitle').value
  let pages = document.getElementById('newPages').value
  let year = document.getElementById('newYear').value 
  addBookToLibrary(author,title,pages,year)
  displayBooks(myLibrary)
  console.log(myLibrary)
  modalDialog.close()
  formClear()
})

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
  this.read=false
  this.displayed=false
}

function addBookToLibrary(author,title,pages,year) {
  // take params, create a book then store it in the array
  let newBook= new Book(author, title, pages, year)
  myLibrary.push(newBook)
}

function displayBooks(bookList){
  //displays the books in the array
  //creates element for library
  for (const book of bookList) {
    if (!book.displayed) {
    book.displayed=true
    createDomBook(book)
  }
  }
}

function toggleRead(event){
  for (let i =0; i<myLibrary.length; i++) {
    if (event.target.dataset.id=myLibrary[i].id && !myLibrary[i].read ) {
      myLibrary[i].read=true
      event.target.style.backgroundColor='red'
      event.target.textContent='read'
    } else {
      myLibrary[i].read=false
      event.target.style.backgroundColor='white'
      event.target.textContent='Mark as read'
    }
  }
}

function deleteBook(event){
  for (let i =0; i<myLibrary.length; i++) {
    if (event.target.dataset.id=myLibrary[i].id){
      myLibrary.splice(i,1)
    }
  }
  let bookChoppingBlock = document.getElementsByClassName('newBookCard')
  for (let i =0; i<bookChoppingBlock.length; i++) {
    if (event.target.dataset.id=bookChoppingBlock[i].dataset.id){
      bookChoppingBlock[i].remove()
    }
  }
}

function createDomBook(book){
  const bookCard = document.createElement('div')
  bookCard.classList.add('newBookCard')
  bookCard.dataset.id = book.id
  const title = document.createElement('div')
  const bookName = document.createElement('h6')
  const bookDesc = document.createElement('p')
  bookDesc.textContent = `${book.author} / ${book.pages} pages / ${book.year}`
  bookName.textContent = book.title
  title.appendChild(bookName)
  title.appendChild(bookDesc)
  bookCard.appendChild(title)
  const markAsReadButton = document.createElement('button')
  const deleteBookButton = document.createElement('button')
  markAsReadButton.textContent = 'Mark as read'
  markAsReadButton.dataset.id = book.id
  markAsReadButton.addEventListener('click',(event)=>toggleRead(event))
  deleteBookButton.textContent = 'Delete'
  deleteBookButton.dataset.id = book.id
  deleteBookButton.addEventListener('click',(event)=>deleteBook(event))
  bookCard.appendChild(markAsReadButton)
  bookCard.appendChild(deleteBookButton)
  bookDisplay.appendChild(bookCard)
}

function formClear(){
  document.getElementById('newAuthor').value = ''
  document.getElementById('newTitle').value = ''
  document.getElementById('newPages').value = ''
  document.getElementById('newYear').value = ''
}



displayBooks(myLibrary)

