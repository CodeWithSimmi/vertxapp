"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Document {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [newDocument, setNewDocument] = useState({ title: "", content: "" });

  const addDocument = () => {
    if (!newDocument.title || !newDocument.content) return;

    const doc: Document = {
      id: Date.now().toString(),
      title: newDocument.title,
      content: newDocument.content,
      createdAt: new Date(),
    };

    setDocuments([...documents, doc]);
    setNewDocument({ title: "", content: "" });
  };

  const deleteDocument = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  return (
    <div className="space-y-8 px-4 md:px-8 py-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Documents</h1>
    </div>

    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Add New Document</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            placeholder="Document Title"
            value={newDocument.title}
            onChange={(e) =>
              setNewDocument({ ...newDocument, title: e.target.value })
            }
          />
          <Input
            placeholder="Document Content"
            value={newDocument.content}
            onChange={(e) =>
              setNewDocument({ ...newDocument, content: e.target.value })
            }
          />
          <Button onClick={addDocument} className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Document
          </Button>
        </div>
      </CardContent>
    </Card>

    {documents.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {documents.map((doc) => (
          <Card key={doc.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{doc.title}</CardTitle>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteDocument(doc.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{doc.content}</p>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(doc.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    )}
  </div>
  );
}