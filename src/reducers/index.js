const initialState = {
    loading: true,
    error: false,
    bestsellers: [],
    goods: [],
    coffee: [],
    filter: 'all',
    search: '',
    id: '1',
    selected: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true,
                error: false
            };
        case 'ERROR':
            return {
                ...state,
                loading: false,
                error: true
            };
        case 'BEST_COFFEE_LOADED':
            return {
                ...state,
                loading: false,
                error: false,
                bestsellers: action.payload
            };
        case 'GOODS_LOADED':
            return {
                ...state,
                loading: false,
                error: false,
                goods: action.payload
            };
        case 'COFFEE_LOADED':
            return {
                ...state,
                loading: false,
                error: false,
                coffee: action.payload
            };
        case 'FILTER_ITEMS':
            return {
                ...state,
                filter: action.payload
            };
        case 'SEARCH_ITEMS':
            return {
                ...state,
                search: action.payload
            };
        case 'SELECT_ITEM':
            const newItem = state.coffee.filter(item => {
                return item.id === action.payload;
            })

            return {
                ...state,
                id: action.payload,
                selected: newItem[0]
            };
        default:
            return state;
    }
}

export default reducer;