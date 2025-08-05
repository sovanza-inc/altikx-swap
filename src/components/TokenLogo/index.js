import React, { useState } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils'

import { ReactComponent as EthereumLogo } from '../../assets/images/ethereum-logo.svg'
import DocumentIcon from '../../assets/document_icon.svg'

const TOKEN_ICON_API = address =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
    address
  )}/logo.png`
const BAD_IMAGES = {}




const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 1rem;
`

const Emoji = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

const StyledEthereumLogo = styled(EthereumLogo)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function TokenLogo({ address, size = '1rem', ...rest }) {
  const [error, setError] = useState(false)

  let path = ''
  if (address === 'ETH') {
    return <img src={DocumentIcon} width={20} />
  } else if (!error && !BAD_IMAGES[address]) {
    path = TOKEN_ICON_API(address.toLowerCase())
  } else {
    return (
      <Emoji {...rest} size={size}>
        <span role="img" aria-label="Thinking">
        {/* <img src='https://dex.bstchain.io/static/media/bstc-logo.png' width={20}/> */}
        <img src={DocumentIcon} width={20}/>
        </span>
      </Emoji>
    )
  }

  return (
    <Image
      {...rest}
      alt={address}
      src={path}
      size={size}
      onError={() => {
        BAD_IMAGES[address] = true
        setError(true)
      }}
    />
  )
}
