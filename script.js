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
const bookDisplay= document.getElementById('bookDisplay')

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

function displayBooks(bookList){
  //displays the books in the array

  //creates element for library
  for (const book of bookList) {
    console.log(book)
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
    deleteBookButton.textContent = 'Delete'
    deleteBookButton.dataset.id = book.id
    deleteBookButton.addEventListener('click',(event)=>deleteBook(event))
    bookCard.appendChild(markAsReadButton)
    bookCard.appendChild(deleteBookButton)
    bookDisplay.appendChild(bookCard)
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

displayBooks(myLibrary)
displayBooks(myLibrary)

