import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => useData<Genre>("/genres");

export default useGenre;
