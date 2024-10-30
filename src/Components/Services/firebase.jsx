        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
        import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js';
        
        
        // Configuração do Firebase
        const firebaseConfig = {
            apiKey: import.meta.env.REACT_APP_API_KEY,
            authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
            
            projectId: import.meta.env.REACT_APP_PROJECT_ID,
            storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: import.meta.env.REACT_APP_APP_ID
        };

        // Inicializar o Firebase
        const app = initializeApp(firebaseConfig);
        const storage = getStorage(app);

        // Função para baixar o PDF
        function downloadPDF() {
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
            }

            export default downloadPDF;