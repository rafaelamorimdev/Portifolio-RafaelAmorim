        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
        import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js';

        // Configuração do Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyCwea0ZIkplhXxQpKqBImrAvkOdMsuAQdk",
            authDomain: "portifoliorafaamorim.firebaseapp.com",
            projectId: "portifoliorafaamorim",
            storageBucket: "portifoliorafaamorim.appspot.com",
            messagingSenderId: "168353822866",
            appId: "1:168353822866:web:7782afe9e3158956584e4b"
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