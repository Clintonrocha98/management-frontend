import apiService from '../api-service'
import ISaleApi from './ISaleApi'
import { PostSaleRequest } from './request'
import { GetSalePaginateResponse } from './response/IGetSalePaginateResponse'
import { IResponseDTO, PaginateRequest } from '~/common/types'
import { SaleDTO } from '~/sales/types'

class SaleApi implements ISaleApi {
  private uri

  constructor() {
    this.uri = import.meta.env.VITE_API
  }

  async getSalesPaginate(query: PaginateRequest): Promise<GetSalePaginateResponse> {
    const url = `${this.uri}saleshistory?PageNumber=${query.pageNumber}&PageSize=${query.pageSize}`
    const reponse = await apiService.get<GetSalePaginateResponse>(url)
    const result = reponse.get()
    return result
  }

  async createSale(payload: PostSaleRequest): Promise<IResponseDTO<SaleDTO>> {
    const url = `${this.uri}saleshistory`
    const reponse = await apiService.post<PostSaleRequest, IResponseDTO<SaleDTO>>(url, payload)
    const result = reponse.get()
    return result
  }

  async todaySales(): Promise<IResponseDTO<number>> {
    const url = `${this.uri}saleshistory/today`
    const reponse = await apiService.get<IResponseDTO<number>>(url)
    const result = reponse.get()
    return result
  }

  async monthSales(): Promise<IResponseDTO<number>> {
    const url = `${this.uri}saleshistory/month`
    const reponse = await apiService.get<IResponseDTO<number>>(url)
    const result = reponse.get()
    return result
  }

  updateSale(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  deleteSale(): Promise<void> {
    throw new Error('Method not implemented.')
  }

  getSaleById(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

export default new SaleApi()
