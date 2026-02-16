import enhancedPortrait from "@/assets/enhanced-portrait.png";

const Index = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = enhancedPortrait;
    link.download = "enhanced-portrait.png";
    link.click();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-8">
      <h1 className="text-2xl font-semibold text-foreground">Enhanced Portrait</h1>
      <img
        src={enhancedPortrait}
        alt="Enhanced vintage portrait"
        className="max-h-[70vh] rounded-lg shadow-xl"
      />
      <button
        onClick={handleDownload}
        className="rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
      >
        Download Image
      </button>
    </div>
  );
};

export default Index;
