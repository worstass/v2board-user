import type { FC } from 'react'
// import { useState, useEffect } from 'react'
// import Stat from './_Stat'
// import type { statProps } from './_Stat'
// import { invites } from '@/services'
// import Manager from './_Manager'
// import List from './_List'
// import { message } from 'antd'
// import { useIntl } from 'umi'
import { Link } from 'umi'

const IntroPage: FC = () => {
  // const [userStats, setUserStats] = useState<statProps>()
  // const [userInviteCodes, setUserInviteCodes] = useState<API.User.InviteCodeItem[]>()
  // const [generateStatus, setGenerateStatus] = useState(false)
  // const intl = useIntl()
  //
  // const generateSuccessCallback = () => {
  //   message.success(intl.formatMessage({ id: 'invite.generated' }))
  //   setGenerateStatus(true)
  // }
  //
  // useEffect(() => {
  //   ;(async () => {
  //     const invitesResult = await invites()
  //     if (invitesResult === undefined) {
  //       return
  //     }
  //     setUserInviteCodes(invitesResult.data.codes)
  //     const [registered, commissionPendingBalance, , commissionRate] = invitesResult.data.stat
  //     setUserStats({ registered, commissionPendingBalance, commissionRate })
  //     setGenerateStatus(false)
  //   })()
  // }, [generateStatus])
  return (
    <>
      {/*<div> intro*/}
      {/*</div>*/}
        <Link to="/dashboard">Dashboard</Link>
    </>
  )
}
export default IntroPage
