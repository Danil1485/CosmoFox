import React, {useEffect, useState} from 'react';
import './App.scss';
import {Link} from "react-router-dom";
import {getReport} from "./api/Api";
import {reportCard} from "./models";
import {Header} from "./components/Header";


function App() {

    const [data, setData] = useState<Array<reportCard>>()

    const handleData = (data: any) => {
        setData(data)
    }

    useEffect(() => {
        getReport(handleData)
    }, [])

    const showData = data?.map((data: reportCard) => {
        return (
            <div className={'card'} key={data.id}>
                <Link className={'name'} to={`/report/${data.id}`}>{data.title}</Link>
                <p>{data.price}</p>
            </div>
        );
    })

    return (
        <div className={"App"}>
            <Header/>
            <div className={'reportbox'}>
                <h1>История отчетов</h1>
                <div>
                    {showData}
                </div>
            </div>
        </div>

    );
}

export default App;
