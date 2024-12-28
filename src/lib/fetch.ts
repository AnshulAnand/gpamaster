// GET fetch api request
export async function GET(url: string) {
  try {
    const res = await fetch(url, {
      credentials: 'include',
    })
    if (!res.ok) {
      const error: any = new Error('An error occurred while fetching the data')
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json()
  } catch (e) {
    throw new Error('Failed to fetch data')
  }
}
