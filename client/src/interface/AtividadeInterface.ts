export interface Avaliacao {
  id: number;
  name: string;
  startTime: string;
  endTime: string | null;
  location: string;
  managementDescription: string;
  otherObservations: string;
  averageScore: number;
  layerCount: number;
}

export interface AvaliacaoDetalhes extends Avaliacao {
  samples: {
    id: number;
    name: string;
    location: string;
    otherInfo: string;
    layers: {
      id: number;
      layerNumber: number;
      length: number;
      score: number;
    }[];
  }[];
  images: {
    id: number;
    fileName: string;
    contentType: string;
    data: string;
  }[];
}
