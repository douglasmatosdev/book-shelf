import React from "react";
import { Document } from "react-pdf";

interface PdfProps {
  url: string;
}

export const Pdf = ({ url }: PdfProps) => {
  return (
    <div>
      <Document file={url} />
    </div>
  );
};
