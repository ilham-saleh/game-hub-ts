export interface Screenshot {
  id: number;
  image: string;
  is_deleted: boolean;
  width: number;
  height: number;
}

export interface ScreenshotResponse {
  results: Screenshot[];
}
