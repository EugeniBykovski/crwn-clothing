import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51Hs2tGLJNGFaHxdaCHO8K732G9VV06iMa64pkR60CBLO4U5hfpiVYWqLAINxHp8TnkYdcJ34mr7yo52TRLwdODen00wM1OFX29'

  const onToken = token => {
    axios({
      url: 'payment', 
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please, sure you use the provided credit cart.')
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      shippingAddress
      billingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${ price }`}
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publishableKey }
    />
  )
}

export default StripeCheckoutButton