const itemsLoaded = (newItem, what) => {
  return {
    type: what,
    payload: newItem
  }
}

const somethingLoading = () => {
  return {
    type: 'LOADING'
  }
}

const errorOccurred = () => {
  return {
    type: 'ERROR'
  }
}

const filterItems = (country) => {
  return {
    type: 'FILTER_ITEMS',
    payload: country
  }
}

const searchItems = (term) => {
  return {
    type: 'SEARCH_ITEMS',
    payload: term
  }
}

const selectedItem = (id) => {
  return {
    type: 'SELECT_ITEM',
    payload: id
  }
}

export {
  itemsLoaded,
  somethingLoading,
  errorOccurred,
  filterItems,
  searchItems,
  selectedItem
}