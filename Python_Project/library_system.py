class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_borrowed = False

    def borrow_book(self):
        if not self.is_borrowed:
            self.is_borrowed = True
            print(f"{self.title} has been borrowed.")
        else:
            print(f"{self.title} is already borrowed.")

    def return_book(self):
        if self.is_borrowed:
            self.is_borrowed = False
            print(f"{self.title} has been returned.")
        else:
            print(f"{self.title} was not borrowed.")

class User:
    def __init__(self, name, user_id):
        self.name = name
        self.user_id = user_id
        self.borrowed_books = []

    def borrow(self, book):
        if not book.is_borrowed:
            self.borrowed_books.append(book)
            book.borrow_book()
        else:
            print(f"Sorry, {book.title} is not available.")

    def return_book(self, book):
        if book in self.borrowed_books:
            self.borrowed_books.remove(book)
            book.return_book()
        else:
            print(f"You haven't borrowed {book.title}.")

class Librarian(User):
    def add_book(self, library, book):
        library.add_book(book)
        print(f"{book.title} has been added to the library.")

class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def list_available_books(self):
        available_books = [book for book in self.books if not book.is_borrowed]
        if available_books:
            print("Available books:")
            for book in available_books:
                print(f"- {book.title} by {book.author}")
        else:
            print("No books available at the moment.")

# Example usage
library = Library()
librarian = Librarian("Alice", 1)

book1 = Book("1984", "George Orwell", "12345")
book2 = Book("To Kill a Mockingbird", "Harper Lee", "54321")

librarian.add_book(library, book1)
librarian.add_book(library, book2)

user = User("Bob", 2)

library.list_available_books()

user.borrow(book1)
library.list_available_books()

user.return_book(book1)
library.list_available_books()
