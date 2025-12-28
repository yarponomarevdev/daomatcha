import { useState } from 'react'
import { useCart } from './hooks/useCart'
import { Page, Product } from './types'

// Pages
import { MainMenu } from './pages/MainMenu'
import { MatchaChoicePage } from './pages/MatchaChoicePage'
import { RecipesPage } from './pages/RecipesPage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'
import { FindMatchaPage } from './pages/FindMatchaPage'
import { NearbyPage } from './pages/NearbyPage'
import { PartnershipPage } from './pages/PartnershipPage'
import { SupportPage } from './pages/SupportPage'
import { FAQPage } from './pages/FAQPage'
import { ShopPage } from './pages/ShopPage'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { PaymentPage } from './pages/PaymentPage'
import { PaymentSuccessPage } from './pages/PaymentSuccessPage'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('main-menu')
  const [pageData, setPageData] = useState<any>(null)
  
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  } = useCart()

  const handleNavigate = (page: Page, data?: any) => {
    setCurrentPage(page)
    setPageData(data || null)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'main-menu':
        return <MainMenu onNavigate={handleNavigate} />
      
      case 'matcha-choice':
        return <MatchaChoicePage onNavigate={handleNavigate} />
      
      case 'recipes':
        return <RecipesPage onNavigate={handleNavigate} />
      
      case 'recipe-detail':
        return <RecipeDetailPage onNavigate={handleNavigate} recipeId={pageData?.recipeId} />
      
      case 'find-matcha':
        return <FindMatchaPage onNavigate={handleNavigate} />
      
      case 'nearby':
        return <NearbyPage onNavigate={handleNavigate} />
      
      case 'partnership':
        return <PartnershipPage onNavigate={handleNavigate} />
      
      case 'support':
        return <SupportPage onNavigate={handleNavigate} />
      
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />
      
      case 'shop':
        return <ShopPage onNavigate={handleNavigate} cartCount={getCartCount()} />
      
      case 'product':
        return (
          <ProductPage
            onNavigate={handleNavigate}
            productId={pageData?.productId}
            onAddToCart={addToCart}
            cartCount={getCartCount()}
          />
        )
      
      case 'cart':
        return (
          <CartPage
            cart={cart}
            onNavigate={handleNavigate}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            getCartTotal={getCartTotal}
          />
        )
      
      case 'checkout':
        return (
          <CheckoutPage
            cart={cart}
            onNavigate={handleNavigate}
            getCartTotal={getCartTotal}
            onClearCart={clearCart}
          />
        )
      
      case 'payment':
        return (
          <PaymentPage
            onNavigate={handleNavigate}
            cart={cart}
            getCartTotal={getCartTotal}
          />
        )
      
      case 'payment-success':
        return (
          <PaymentSuccessPage
            onNavigate={handleNavigate}
            orderId={pageData?.orderId || '0000'}
          />
        )
      
      default:
        return <MainMenu onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen relative">
      {renderPage()}
    </div>
  )
}

export default App