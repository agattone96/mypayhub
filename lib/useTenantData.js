import useSWR from 'swr';

export function useTenantData() {
  const { data, error } = useSWR('/api/tenant/financials', (url) =>
    fetch(url).then((res) => res.json())
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}