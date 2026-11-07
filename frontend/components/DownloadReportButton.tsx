interface DownloadReportButtonProps {
  analysisId: string;
}

export default function DownloadReportButton({ analysisId }: DownloadReportButtonProps) {
  const handleDownload = () => {
    const downloadUrl = `http://127.0.0.1:8000/api/v1/analyses/${analysisId}/report.pdf`;
    window.open(downloadUrl, "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FF2D55]/10 hover:bg-[#FF2D55]/20 text-[#FF2D55] border border-[#FF2D55]/30 rounded-lg text-xs font-mono font-semibold transition shadow-sm"
    >
      <span>📄</span> Download Executive PDF
    </button>
  );
}