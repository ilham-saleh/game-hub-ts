// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { AxiosRequestConfig } from "axios";
// import { toast } from "react-toastify";

// export interface FetchingResponse<T> {
//   count: number;
//   results: T[];
// }

// const useData = <T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   deps?: any[]
// ) => {
//   const [data, setData] = useState<T[]>([]);
//   const [loading, setLoading] = useState(false);

//   //   const controller = new AbortController();

//   useEffect(
//     () => {
//       setLoading(true);
//       apiClient
//         .get<FetchingResponse<T>>(endpoint, { ...requestConfig }) // {signal: controller.signal}
//         .then((res) => {
//           setData(res.data.results);
//           setLoading(false);
//         })
//         .catch((err) => {
//           // if (err instanceof CanceledError) return;
//           toast(err.message);
//           setLoading(false);
//         });

//       // return () => controller.abort();
//     },
//     deps ? [...deps] : []
//   );

//   return { data, loading };
// };

// export default useData;
