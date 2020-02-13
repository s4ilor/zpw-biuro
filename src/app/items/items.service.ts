import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private backendUrl = 'zpw-biuro/items';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor( private http: HttpClient, private db: AngularFirestore) {
    this.itemsCollection = this.db.collection<Item>('items');
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /**
   * Fetch items from database.
   */
  getItems(): Observable<Item[]> {
    // Firebase
    this.items = this.itemsCollection.valueChanges({idField: 'id'});
    return this.items;
    // API
    return this.http.get<Item[]>(this.backendUrl)
                     .pipe(tap(_ => console.log('Fetched items from API')),
                     catchError(this.handleError<Item[]>('getItemsFromAPI', [])));
  }

  /**
   * Fetch item from database.
   */
  getItem(id: any): Observable<Item> {
    // Firebase
    const item = this.db.doc<Item>(`/items/${id}`).valueChanges();
    return item;
    // API
    const url = `${this.backendUrl}/${id}`;
    return this.http.get<Item>(url)
                    .pipe(tap(_ => console.log('fetched item')),
                          catchError(this.handleError<Item>('getItem')));
  }

  /**
   * Add item to database.
   */
  addItem(item: Item): Observable<Item> {
    // Firebase
    this.itemsCollection.add(item);
    return of(item);
    // API
    return this.http.post<Item>(this.backendUrl, item, this.httpOptions)
                    .pipe(tap(_ => console.log('added item')),
                          catchError(this.handleError<Item>('addItem')));
  }

  /**
   * Delete item from database.
   */
  removeItem(item: Item): Observable<Item> {
    // Firebase
    this.db.doc<Item>(`/items/${item.id}`).delete();
    return of(item);
    // API
    const url = `${this.backendUrl}/${item.id}`;
    return this.http.delete<Item>(url, this.httpOptions)
                    .pipe(tap(_ => console.log('removed item')),
                          catchError(this.handleError<Item>('removeItem')));
  }



}
