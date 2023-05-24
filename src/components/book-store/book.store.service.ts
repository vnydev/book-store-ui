import { HttpRequest } from '../../services/http.service'
import { UseQueryOptions } from 'react-query'
import { Books } from '../../interfaces'

const baseUrl = '/book-store'

const getBooks = async ({ queryKey }: UseQueryOptions): Promise<Books[]>  => {
    try {
        console.log("queryKey", queryKey)
        const [ _, searchValue ]: any = queryKey
        const { data } = await HttpRequest(`${baseUrl}?search=${searchValue}`, 'GET')

        return data
    } catch (error){
        throw new Error(error as string)
    }
}

export {
    getBooks
}