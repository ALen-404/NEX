import { useEffect } from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { useAppDispatch } from 'state/hooks'

import { ApplicationModal, setOpenModal } from '../../state/application/reducer'

// Redirects to swap but only replace the pathname
export function RedirectPathToSwapOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/' }} />
}

// Redirects from the //:outputCurrency path to the /?outputCurrency=:outputCurrency format
export function RedirectToSwap(props: RouteComponentProps<{ outputCurrency: string }>) {
  const {
    location: { search },
    match: {
      params: { outputCurrency },
    },
  } = props

  return (
    <Redirect
      to={{
        ...props.location,
        pathname: '/',
        search:
          search && search.length > 1
            ? `${search}&outputCurrency=${outputCurrency}`
            : `?outputCurrency=${outputCurrency}`,
      }}
    />
  )
}

export function OpenClaimAddressModalAndRedirectToSwap(props: RouteComponentProps) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setOpenModal(ApplicationModal.ADDRESS_CLAIM))
  }, [dispatch])
  return <RedirectPathToSwapOnly {...props} />
}
