import { useMemo } from "react"

const usePagination = (totalItems: number, itemsPerPage: number) => {
  const numPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage])

  const getPageItems = (currentPage: number, items: any[]) => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return items.slice(start, end)
  }

  return { numPages, getPageItems }
}

export default usePagination
