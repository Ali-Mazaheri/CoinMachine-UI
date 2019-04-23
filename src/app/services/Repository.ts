
import { Injectable } from '@angular/core';
import {MoneyModel} from "../models/MoneyModel"
import { ResultModel } from '../models/ResultModel';
//import { promise } from 'protractor';


@Injectable()
export class Repository {
    private static baseURL = "http://localhost:8080/";

    public getBalance() { 
        return this.ajaxCall<MoneyModel>("/admin/getInventory", "GET");
    }

    
    public setInventory(payload: MoneyModel) {
        return this.ajaxCall<MoneyModel>("/admin/setInventory", "POST", payload);
    }

    public topupInventory(payload:MoneyModel) { 
        return this.ajaxCall<MoneyModel>("/admin/topupInventory", "POST", payload);
    }

    public billInserted(payload) { 
        return this.ajaxCall<ResultModel>("/user/billInserted", "POST", payload);
    }

    public approved(payload: MoneyModel) {
        return this.ajaxCall<MoneyModel>("/user/userApproved", "POST", payload);
    }

    private ajaxCall<T>(url: string, method: 'GET' | 'POST', payload?: {} ): Promise<T> {
        return new Promise(async (success, reject) => {
            try {
                let options: RequestInit = {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    mode: "cors"
                };

                if (payload) { 
                    options.body = JSON.stringify(payload);
                }

                let c = await fetch(Repository.baseURL + url , options);
                let d = await c.json();
                success(d);
            } catch (e) {
                reject(e);
            }
        });
    }
}