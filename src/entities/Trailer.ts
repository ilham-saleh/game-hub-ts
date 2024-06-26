export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

export interface TrailersResponse {
  results: Trailer[];
}
