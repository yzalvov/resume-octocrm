export const maskedFirestoreDocId = (str: string): string => {
  const [leftStr, rightStr] = [
    str.substring(0, 4),
    str.substring(str.length - 4)
  ]
  return `${leftStr}-${rightStr}`
}
