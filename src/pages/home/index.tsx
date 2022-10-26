import './index.css'

import { useWeb3React } from '@web3-react/core'
import { PageName } from 'components/AmplitudeAnalytics/constants'
import { Trace } from 'components/AmplitudeAnalytics/Trace'
import { SwitchLocaleLink } from 'components/SwitchLocaleLink'
import { useXenContract } from 'hooks/useContract'
import { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
export default function Swap({ history }: RouteComponentProps) {
  const { chainId } = useWeb3React()

  const xenContractAddress: any = {
    1: '0x6D8115daa3fFc361e3229E4dB4A17f724441D1af',
    56: '0x9705f0793d8eC48108f021D6f92c73b88963D6F2',
    137: '0x58B063Bed253Ff4759654C2C7465d00F16756c9a',
  }
  const conrtact = useXenContract(xenContractAddress[chainId || '1'])
  const writeMint = () => {
    conrtact?.claimRank(times, term)
  }
  const [times, setTimes] = useState(0)
  const [term, setTerm] = useState(0)
  return (
    <Trace page={PageName.SWAP_PAGE} shouldLogImpression>
      <h1 style={{ fontSize: '64px' }}>Bulk create wallets and claim $XEN.</h1>

      <div className="main">
        <div className="form__content">
          <h1>Mintxen.club</h1>
          <div className="styled-input">
            <input
              type="text"
              className="styled-input__input"
              name="Number of Wallets to Create"
              placeholder="Number of Wallets to Create"
              onChange={(e) => {
                setTimes(Number(e.target.value))
              }}
            />
          </div>
          <div className="styled-input">
            <input
              type="text"
              className="styled-input__input"
              placeholder="Term"
              onChange={(e) => {
                setTerm(Number(e.target.value))
              }}
            />
          </div>
          <button type="button" className="styled-button" onClick={writeMint}>
            <span className="styled-button__real-text-holder">
              <span className="styled-button__real-text">Mint</span>
              <span className="styled-button__moving-block face">
                <span className="styled-button__text-holder">
                  <span className="styled-button__text">Mint</span>
                </span>
              </span>
              <span className="styled-button__moving-block back">
                <span className="styled-button__text-holder">
                  <span className="styled-button__text">Mint</span>
                </span>
              </span>
            </span>
          </button>
        </div>
        <div>
          <SwitchLocaleLink></SwitchLocaleLink>
        </div>
      </div>
    </Trace>
  )
}
