
//import downloadPDF from "../Components/Services/firebase";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import { initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_API_KEY,
            authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
            
            projectId: import.meta.env.REACT_APP_PROJECT_ID,
            storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: import.meta.env.REACT_APP_APP_ID
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
        <button onClick={DownloadPDF}  className="btn btn-primary">
            Download CV
        </button>
    );
};

export default DownloadButton;