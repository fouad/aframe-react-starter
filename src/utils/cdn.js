const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export function cdn (str) {
  return IS_PRODUCTION
    ? process.env.CDN_URL + str
    : str
}
