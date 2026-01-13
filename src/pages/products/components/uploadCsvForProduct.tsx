import { request_to_import_products } from "@/api/services_products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function UploadCsvForProduct() {
  const [file, setFile] = useState<File | null>(null);

  async function handleUpload() {
    if (!file) {
      alert("Selecione um arquivo CSV");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await request_to_import_products(formData);
      alert("CSV enviado com sucesso!");
    } catch (error) {
      alert("Falha ao enviar o arquivo");
    }
  }
  return (
    <div className="w-full flex justify-start">
      <Card className="p-5 w-full  flex flex-col gap-2">
        <span className="font-medium">Adicionar Produto com arquivo CSV</span>
        <div className="flex flex-row gap-5">
          <Input
            type="file"
            accept=".csv"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          <Button className="cursor-pointer" onClick={handleUpload}>
            Enviar
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default UploadCsvForProduct;
