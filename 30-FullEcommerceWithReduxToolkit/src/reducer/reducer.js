// function reducer(state, action) {
  
//     switch (action.type) {
//       case "SetProducts":
//         return {
//           ...state,
//           products: action.products,
//           filteredProd: action.products,
//         };
//         case "SetUsers":
//           return {
//             ...state,
//             users: action.users,
//             filteredUsers: action.users,
//           };
      
//       case "DeleteProduct": {
//         const filteredProducts = state.products.filter(
//           (product) => product.id !== action.productId
//         );
//         return {
//           ...state,
//           products: filteredProducts,
//           filteredProd: filteredProducts,
//         };
//       }
//       default:
//         break;
//     }
//   }
  
//   export default reducer;