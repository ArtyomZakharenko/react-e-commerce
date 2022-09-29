import styled from 'styled-components'
import { PageHeader, StripeCheckout } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <main>
      <PageHeader title='checkout' />
      <Wrapper className='page'>
        <div className='section-center page'>
          <h3>checkout</h3>
        </div>
      </Wrapper>
    </main>

  );
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
