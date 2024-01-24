export interface Currencie {
  id: string;
  name: string;
  min_size: string;
}

export interface CoinbaseCurrenciesResponse {
  data: Currencie[];
}
