import { ResponseModel } from '../common/responseModel';

export interface BooksListModel extends ResponseModel {
    status: number,
    result: BookListResult[],
    total_count: number,
    total_pages: number,
    current_page: number,
    limit: number,
}

type BookListResult = {
    id: number,
    name: string,
    image?: string,
    price?: number,
    purchase_date?: string,
};
