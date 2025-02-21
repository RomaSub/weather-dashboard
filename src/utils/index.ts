export const request = async <T>(...params: Parameters<typeof fetch>): Promise<T> => {
  const response = await fetch(...params)
  if (!response.ok) throw new Error(response.statusText)

  const geoData = await response.json()
  //if (!geoData.length) throw new Error('Город не найден')
  return geoData
}
