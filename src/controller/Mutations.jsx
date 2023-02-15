export const createNewChequeOptions = (newdata,olddata) => {
  return {
    optimisticData: [...olddata, newdata].sort((a,b) => a.id - b.id),
    rollbackOnError: true,
    populateCache: [...olddata, newdata].sort((a,b) => a.id - b.id),
    revalidate: false
  }
}