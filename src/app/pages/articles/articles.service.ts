import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class ArticlesService {
    API_URL = 'http://api.aii.od.ua/wp-json/wp/v2';
    loaded = new EventEmitter();
    constructor(private http: HttpClient,
        private router: Router) {
    }

    getArticles(page = 1) {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('categories', '2');
        httpParams = httpParams.append('page', page.toString());
        return this.http.get(`${this.API_URL}/posts`, {observe: 'response', params: httpParams});
    }

    getArticleById(id: number) {
        return this.http.get(`${this.API_URL}/posts/${id}`);
    }

    getMemorandums() {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('categories', '14');
        httpParams = httpParams.append('order', 'asc');
        return this.http.get(`${this.API_URL}/posts`, {params: httpParams});
    }

    setLoaded() {
        this.loaded.emit(true);
    }

    destroyLoaded() {
        this.loaded.emit(false);
    }

    isLoaded() {
        return this.loaded.asObservable() || null;
    }
}
