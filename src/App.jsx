// import {Component} from 'react'
// import {Route, Routes,Navigate} from 'react-router-dom'

// import LoginForm from './componets/LoginForm'
// import Home from './componets/Home'
// import Products from './componets/Products'
// import ProductItemDetails from './componets/ProductItemDetails'
// import Cart from './componets/Cart'
// import NotFound from './componets/NotFound'
// import ProtectedRoute from './componets/ProtectedRoute'
// import CartContext from './context/CartContext'

// // import './App.css'


// // class App extends Component {
// //   state = {
// //     cartList: [],
// //   }

// //   removeAllCartItems = () => {
// //     this.setState({cartList: []})
// //   }

// //   incrementCartItemQuantity = id => {
// //     this.setState(prevState => ({
// //       cartList: prevState.cartList.map(eachCartItem => {
// //         if (id === eachCartItem.id) {
// //           const updatedQuantity = eachCartItem.quantity + 1
// //           return {...eachCartItem, quantity: updatedQuantity}
// //         }
// //         return eachCartItem
// //       }),
// //     }))
// //   }

// //   decrementCartItemQuantity = id => {
// //     const {cartList} = this.state
// //     const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
// //     if (productObject.quantity > 1) {
// //       this.setState(prevState => ({
// //         cartList: prevState.cartList.map(eachCartItem => {
// //           if (id === eachCartItem.id) {
// //             const updatedQuantity = eachCartItem.quantity - 1
// //             return {...eachCartItem, quantity: updatedQuantity}
// //           }
// //           return eachCartItem
// //         }),
// //       }))
// //     } else {
// //       this.removeCartItem(id)
// //     }
// //   }

// //   removeCartItem = id => {
// //     const {cartList} = this.state
// //     const updatedCartList = cartList.filter(
// //       eachCartItem => eachCartItem.id !== id,
// //     )

// //     this.setState({cartList: updatedCartList})
// //   }

// //   addCartItem = product => {
// //     const {cartList} = this.state
// //     const productObject = cartList.find(
// //       eachCartItem => eachCartItem.id === product.id,
// //     )

// //     if (productObject) {
// //       this.setState(prevState => ({
// //         cartList: prevState.cartList.map(eachCartItem => {
// //           if (productObject.id === eachCartItem.id) {
// //             const updatedQuantity = eachCartItem.quantity + product.quantity

// //             return {...eachCartItem, quantity: updatedQuantity}
// //           }

// //           return eachCartItem
// //         }),
// //       }))
// //     } else {
// //       const updatedCartList = [...cartList, product]

// //       this.setState({cartList: updatedCartList})
// //     }
// //   }

// //   render() {
// //     const {cartList} = this.state

// //     return (
// //       <CartContext.Provider
// //         value={{
// //           cartList,
// //           addCartItem: this.addCartItem,
// //           removeCartItem: this.removeCartItem,
// //           incrementCartItemQuantity: this.incrementCartItemQuantity,
// //           decrementCartItemQuantity: this.decrementCartItemQuantity,
// //           removeAllCartItems: this.removeAllCartItems,
// //         }}
// //       >
// //         <Routes>
// //           <Route exact path="/login" element={<LoginForm/>} />
// //           <ProtectedRoute exact path="/" element={<Home/>} />
// //           <ProtectedRoute exact path="/products" element={<Products/>} />
// //           <ProtectedRoute
// //             exact
// //             path="/products/:id"
// //             element={<ProductItemDetails/>}
// //           />
// //           <ProtectedRoute exact path="/cart" element={<Cart/>} />
// //           <Route path="/not-found" element={NotFound} />
// //           <Route path='*' element={<Navigate to='/not-found' replace/>}/>
// //         </Routes>
// //       </CartContext.Provider>
// //     )
// //   }
// // }

// // export default App







// import './App.css'

// class App extends Component {
//   state = {
//     cartList: [],
//   }

//   removeAllCartItems = () => {
//     this.setState({ cartList: [] })
//   }

//   incrementCartItemQuantity = id => {
//     this.setState(prevState => ({
//       cartList: prevState.cartList.map(eachCartItem => {
//         if (id === eachCartItem.id) {
//           const updatedQuantity = eachCartItem.quantity + 1
//           return { ...eachCartItem, quantity: updatedQuantity }
//         }
//         return eachCartItem
//       }),
//     }))
//   }

//   decrementCartItemQuantity = id => {
//     const { cartList } = this.state
//     const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
//     if (productObject.quantity > 1) {
//       this.setState(prevState => ({
//         cartList: prevState.cartList.map(eachCartItem => {
//           if (id === eachCartItem.id) {
//             const updatedQuantity = eachCartItem.quantity - 1
//             return { ...eachCartItem, quantity: updatedQuantity }
//           }
//           return eachCartItem
//         }),
//       }))
//     } else {
//       this.removeCartItem(id)
//     }
//   }

//   removeCartItem = id => {
//     const { cartList } = this.state
//     const updatedCartList = cartList.filter(
//       eachCartItem => eachCartItem.id !== id
//     )

//     this.setState({ cartList: updatedCartList })
//   }

//   addCartItem = product => {
//     const { cartList } = this.state
//     const productObject = cartList.find(
//       eachCartItem => eachCartItem.id === product.id
//     )

//     if (productObject) {
//       this.setState(prevState => ({
//         cartList: prevState.cartList.map(eachCartItem => {
//           if (productObject.id === eachCartItem.id) {
//             const updatedQuantity = eachCartItem.quantity + product.quantity

//             return { ...eachCartItem, quantity: updatedQuantity }
//           }

//           return eachCartItem
//         }),
//       }))
//     } else {
//       const updatedCartList = [...cartList, product]

//       this.setState({ cartList: updatedCartList })
//     }
//   }

//   render() {
//     const { cartList } = this.state

//     return (
//       <CartContext.Provider
//         value={{
//           cartList,
//           addCartItem: this.addCartItem,
//           removeCartItem: this.removeCartItem,
//           incrementCartItemQuantity: this.incrementCartItemQuantity,
//           decrementCartItemQuantity: this.decrementCartItemQuantity,
//           removeAllCartItems: this.removeAllCartItems,
//         }}
//       >
//         <Routes>
//           <Route exact path="/login" element={<LoginForm />} />
//           <Route
//             exact
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             exact
//             path="/products"
//             element={
//               <ProtectedRoute>
//                 <Products />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             exact
//             path="/products/:id"
//             element={
//               <ProtectedRoute>
//                 <ProductItemDetails />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             exact
//             path="/cart"
//             element={
//               <ProtectedRoute>
//                 <Cart />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/not-found" element={<NotFound />} />
//           <Route path="*" element={<Navigate to="/not-found" replace />} />
//         </Routes>
//       </CartContext.Provider>
//     )
//   }
// }

// export default App

import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({cartList: updatedCartList})
  }

  addCartItem = product => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )

    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, product]

      this.setState({cartList: updatedCartList})
    }
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="*" component={NotFound} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App


