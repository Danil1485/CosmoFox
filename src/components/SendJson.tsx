import React, { useState } from 'react';
import { Header } from "./Header";
import { Link } from "react-router-dom";
import '../App.scss'
import papka from "../assets/icons/papka.svg";

function Sendjson() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await fetch('ЧТО-ТО ВСТАВИТЬ', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    console.log('Файл успешно отправлен на сервер');
                } else {
                    console.error('Произошла ошибка при отправке файла на сервер');
                }
            } catch (error) {
                console.error('Произошла ошибка при отправке запроса:', error);
            }
        } else {
            console.log('Файл не выбран');
        }
    };

    return (
        <div>
            <Header />
            <div className={'send-box'}>
                <h1>Загрузка JSON-файла</h1>
                <div className={'input-sett'}>
                    <label htmlFor="files"><img src={papka} />Загрузить файл json</label>
                    <input type="file" id="files" accept=".json" onChange={handleFileChange} />
                    {selectedFile && <p>Выбранный файл: {selectedFile.name}</p>}
                </div>

                <div className={'send-buttons'}>
                    <Link className={'back-button'} to={'/'}>Назад</Link>
                    <button onClick={handleUpload}>Отправить</button>
                </div>
            </div>

        </div>
    );
}

export default Sendjson;
