export const filterData = (searchInput, restaurants) => {
    let filteredList = restaurants.filter((item) => item?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase()))
    return filteredList;
}