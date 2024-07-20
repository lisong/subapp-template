interface GetTableMinWidthConfig {
  defaultWidth: number
}

/**
 * antd 表格宽度自动适配算法
 * @param tableColumns
 * @param config
 * @returns
 */
const getTableMinWidth = (tableColumns: Array<any>, config?: GetTableMinWidthConfig): number => {
  const defaultWidth: number = config?.defaultWidth || 110
  let totalWidth = 0
  tableColumns.map((item: any) => {
    totalWidth += (item.width || defaultWidth)
    return item
  })

  return totalWidth
}

export {
  // 计算表格最小的宽度
  getTableMinWidth
}
