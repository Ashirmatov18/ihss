export const truncateString = (str, num, dots = true) => {
  if (str?.length < num) {
    return str
  }

  return (str || "").slice(0, num) + (dots ? "..." : "")
}
