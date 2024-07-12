import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment';

class HttpOptions {
    headers?: HttpHeaders | Record<string, string | string[]>;
    context?: HttpContext;
    observe?: 'body';
    params?: Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
    reportProgress?: boolean;
    responseType?: 'json' | 'arraybuffer' | 'blob' | 'text' | any;
    withCredentials?: boolean;
    body?: any | null;

    public constructor(init?: Partial<HttpOptions>) {
        Object.assign(this, init);
    }
}

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    public baseURL = environment.baseUrl;

    constructor(private httpClient: HttpClient) {}

    get<T>(
        url: string,
        options?: {
            httpParams?: Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
        }
    ): Observable<T> {
        const httpOptions = new HttpOptions({
            headers: this._getHeaders(),
            params: options?.httpParams
        });

        return this.httpClient.get<T>(`${this.baseURL}/${url}`, httpOptions);
    }

    post<T>(
        url: string,
        data: any,
        options?: {
            httpParams?: Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
        }
    ): Observable<T> {
        const httpOptions = new HttpOptions({
            headers: this._getHeaders(),
            params: options?.httpParams
        });

        return this.httpClient.post<T>(`${this.baseURL}/${url}`, data, httpOptions);
    }

    put<T>(
        url: string,
        data: any,
        options?: {
            httpParams?: Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
        }
    ): Observable<T> {
        const httpOptions = new HttpOptions({
            headers: this._getHeaders(),
            params: options?.httpParams
        });

        return this.httpClient.put<T>(`${this.baseURL}/${url}`, data, httpOptions);
    }

    delete<T>(
        url: string,
        options?: {
            httpParams?: Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
        }
    ): Observable<T> {
        const httpOptions = new HttpOptions({
            headers: this._getHeaders(),
            params: options?.httpParams
        });

        return this.httpClient.delete<T>(`${this.baseURL}/${url}`, httpOptions);
    }

    private _getHeaders(params?: { contentType?: 'json' | 'formData' | 'binaryArray' }) {
        const headers = {
            Anthorization: 'Bearer'
        };

        switch (params?.contentType) {
            case 'binaryArray':
                return new HttpHeaders({ ...headers, 'Content-Type': 'application/octet-stream' });
            case 'formData':
                return new HttpHeaders({ ...headers, Accept: 'application/json' });
            default:
                return new HttpHeaders({ ...headers, 'Content-Type': 'application/json' });
        }
    }
}
