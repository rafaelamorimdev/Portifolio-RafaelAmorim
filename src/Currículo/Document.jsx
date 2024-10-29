import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { App } from "../App";

const storage = getStorage (App)
    const DownloadPDF = () => {
        const handleDownload = () => {
            const pdfRef = ref(storage, 'CvRafaelAmorim.pdf');
    
            getDownloadURL(pdfRef)
                .then((url) => {
                    // Criar um link para download
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'CvRafaelAmorim.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
                .catch((error) => {
                    console.error("Erro ao obter a URL de download:", error);
                });
        };
    
        return (
            <button onClick={handleDownload}>
                Download CV
            </button>
        );
    };
    
    export default DownloadPDF;
