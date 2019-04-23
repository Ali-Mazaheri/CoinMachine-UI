import { MoneyModel } from './MoneyModel';

export class ResultModel {
    errorMessage: string;
    public data: MoneyModel;
    public success: boolean;
}