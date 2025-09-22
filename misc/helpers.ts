export function formatRange(start: string, end: string): string {
  try {
    const s = new Date(start).toLocaleDateString()
    const e = new Date(end).toLocaleDateString()
    return `${s} — ${e}`
  } catch {
    return `${start} — ${end}`
  }
}
// export function getPageRange(current: number, total: number) {
//   if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
//   const delta = 2
//   const range: (number | '...')[] = []
//   const start = Math.max(1, current - delta)
//   const end = Math.min(total, current + delta)

//   if (start > 1) {
//     range.push(1)
//     if (start > 2) range.push('...')
//   }
//   for (let i = start; i <= end; i++) range.push(i)
//   if (end < total) {
//     if (end < total - 1) range.push('...')
//     range.push(total)
//   }
//   return range
// }

export function getPageRange(current: number, total: number) {
  // Always force ellipsis mode if total > 4
  if (total <= 4) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const range: (number | '...')[] = []
  const delta = 2
  const left = Math.max(2, current - delta)
  const right = Math.min(total - 1, current + delta)

  range.push(1)

  // Always show ellipsis after first page if we're not literally on page 2
  if (left > 2 || current > 2) {
    range.push('...')
  }

  for (let i = left; i <= right; i++) {
    if (i > 1 && i < total) {
      range.push(i)
    }
  }

  // Always show ellipsis before last page if we're not literally on total - 1
  if (right < total - 1 || current < total - 1) {
    range.push('...')
  }

  range.push(total)

  return range
}
