

const DownloadButton = () => {
    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = 'Currículo/CvRafaelAmorim.pdf'; // Caminho do PDF
        link.download = 'CvRafaelAmorim.pdf'; // Nome do arquivo que será baixado
        document.body.appendChild(link);
        link.click(); // Simula o clique no link
        document.body.removeChild(link); // Remove o link do DOM
        
    };

    return (
        <button onClick={handleDownloadClick} className="btn btn-primary">
            Download CV
        </button>
    );
};

export default DownloadButton;