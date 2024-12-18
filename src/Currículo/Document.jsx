
//import downloadPDF from "../Components/Services/firebase";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import { initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCwea0ZIkplhXxQpKqBImrAvkOdMsuAQdk",
    authDomain: "portifoliorafaamorim.firebaseapp.com",
    projectId: "portifoliorafaamorim",
    storageBucket: "portifoliorafaamorim.appspot.com",
    messagingSenderId: "168353822866",
    appId: "1:168353822866:web:7782afe9e3158956584e4b"
};

const app = initializeApp(firebaseConfig);
        const storage = getStorage( app );

export function DownloadButton  ()  {
    
    const DownloadPDF =() => {
        const pdfRef = ref(storage, 'rafaelAmorim.pdf.pdf'); 

        getDownloadURL(pdfRef)
            .then((url) => {
                
                const link = document.createElement('a');
                link.href = ("portifoliorafaamorim.appspot.com", url);
                
                link.download = 'rafaelAmorim.pdf.pdf'; 
                document.body.appendChild(link);
                link.click(url);
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error("Erro ao obter a URL de download:", error);
            });
        }


    return (
        <button onClick={DownloadPDF} target="_blank" className="btn btn-primary">
            Download CV
        </button>
    );
};

export default DownloadButton;