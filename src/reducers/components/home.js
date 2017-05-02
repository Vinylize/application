import * as types from '../../actions/actionTypes';

const initialState = {
  // intention: avoid unnecessary geocoding from placeAutocomplete API prediction
  cameraWillMoveByPlaceDetailAPI: false,

  // indicates if searchBar is expanded
  searchBarExpanded: false,

  // current camera position on map
  mapCameraPos: {lat: undefined, lon: undefined},

  // determines should ApproveCard be shown
  showApproveAddressCard: false,

  // address texts on ApproveCard
  searchedAddressTextView: {
    // header address to be appeared bold
    firstAddressToken: '',
    // detailed address to be appeared smaller
    addressTextView: ''
  },

  // user's current location
  currentLocation: {lat: undefined, lon: undefined}
};

const home = (state = initialState, action = {}) => {
  switch (action.type) {
  case types.setCameraWillMoveByPlaceDetailAPI: {
    return {...state, cameraWillMoveByPlaceDetailAPI: action.cameraWillMoveByPlaceDetailAPI};}
  case types.setSearchBarExpanded: {
    return {...state, searchBarExpanded: action.searchBarExpanded };}
  case types.setMapCameraPos: {
    return {...state, mapCameraPos: action.mapCameraPos };}
  case types.setShowApproveAddressCard: {
    return {...state, showApproveAddressCard: action.showApproveAddressCard };}
  case types.setSearchedAddressTextView: {
    return {...state, searchedAddressTextView: action.searchedAddressTextView };}
  case types.setCurrentLocation: {
    return {...state, currentLocation: action.currentLocation };}
  default:
    return state;
  }
};

export default home;
