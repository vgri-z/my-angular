import { Component } from '@angular/core';
import { books } from './datas/list';

interface IBook {
  name: string;
  id: string;
}

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrl: './for.component.less',
})
export class ForComponent {
  books: IBook[] = books;

  bookName = '';

  addBook() {
    if (this.bookName) {
      const book: IBook = {
        name: this.bookName,
        id: new Date().getTime() + '',
      };
      this.books.push(book);
    }
  }

  resetList() {
    const list = [
      {
        id: '1-1',
        name: '活着1',
      },
      {
        id: '2-2',
        name: '小王子2',
      },
      {
        id: '3',
        name: '百年孤独',
      },
      {
        id: '4-4',
        name: '万历十五年4',
      },
      {
        id: '5-5',
        name: '动物农场5',
      },
    ];

    this.books = list;
  }

  // 类似于vue中key的作用
  trackByFunc(index: number, book: IBook) {
    return book.id;
  }
}
