import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getReportById} from "../api/Api";
import {Header} from "./Header";
import filee from "../assets/icons/filee.svg";

const ProductDetailPage: React.FC = () => {
    const {reportId} = useParams();
    console.log(reportId)

    const [report, setReport] = useState<any>(null);


    useEffect(() => {
        const getReport = async () => {
            const data = await getReportById(reportId)
            console.log(data)
            setReport(data)
        };
        getReport();
    }, [reportId]);


    if (!report) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-detail">
            <Header/>
            <div className={'detailbox'}>
                <div className={'topPartbox'}>
                    <h2>ФИО:</h2>
                    <div className={'name-date'}>
                        <p>{report.title}</p>
                        <p>{report.price}</p>
                    </div>
                </div>
                <h2>Отчет:</h2>
                <p className={'description'}>{report.description}</p>
                <div className={'buttons-descr'}>
                    <Link className={'back-button'} to={'/'}>Назад</Link>
                    <a href={report.image} download className={'download'}><img src={filee} alt="Иконка"/>Скачать приложенный файл</a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
