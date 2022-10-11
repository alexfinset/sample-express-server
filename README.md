# Sample Express Server

Instructions:

- run: `yarn install`
- test api in `api.rest`
- change `SHOULD_THROW` variable in `index.js`
- run `yarn start`

Frontend setup example:

```ts
import axios from "axios";
import { useQuery, UseQueryOptions } from "react-query";
// ----------------------------------------------------------------------

async function getIncome() {
  const { data } = await axios.get("http://localhost:3000/api/income");
  console.log("data >>> ", data);
}

export function useGetIncome<TData = any>(
  options?: UseQueryOptions<any, AxiosError, TData>
) {
  return useQuery("sample-income-api", getIncome, options);
}
```
