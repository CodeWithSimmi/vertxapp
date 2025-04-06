export const getServerOnfromAPI = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/isserveron`);
    return await res.json();
  } catch (error) {
    return error;
  }
}