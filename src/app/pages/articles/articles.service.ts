import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class ArticlesService {
    API_URL = 'http://api.aii.od.ua/wp-json/wp/v2';
    loaded = new EventEmitter();
    constructor(private http: HttpClient,
        private router: Router) {
    }

    getArticles() {
        return this.http.get(`${this.API_URL}/posts?categories=2`);
    }

    getArticleById(id: number) {
        return this.http.get(`${this.API_URL}/posts/${id}`);
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