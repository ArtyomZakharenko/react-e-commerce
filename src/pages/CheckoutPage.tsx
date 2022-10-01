import styled from 'styled-components'
import { PageHeader, StripeCheckout } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHeader title='checkout' />
      <Wrapper className='page'>
        {!cart.length ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default CheckoutPage
