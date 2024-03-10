import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 10000
});
export async function getReport(handler:any){
    instance.get('products').then((d:any) => {
        handler(d.data)
        console.log(d.data)
    } )
}
export async function getReportById(reportId?: string){
    const response = await instance.get(`products/${reportId}`)
    console.log(response.data)
    return response.data;

}