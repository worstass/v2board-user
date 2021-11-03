import type { FC } from 'react'
import { useState, useEffect } from 'react'
import Stat from './_Stat'
import type { statProps } from './_Stat'
import { invites } from '@/services'
import Manager from './_Manager'
import List from './_List'
import { message } from 'antd'
import { useIntl } from 'umi'

const InvitePage: FC = () => {
  const [userStats, setUserStats] = useState<statProps | undefined>(undefined)
  const [userInviteCodes, setUserInviteCodes] = useState<API.User.InviteCodeItem[]>()
  const [userInviteUrl, setUserInviteUrl] = useState<string | null>(null)
  const [generateStatus, setGenerateStatus] = useState(false)

  const intl = useIntl()

  const generateSuccessCallback = () => {
    message.success(intl.formatMessage({ id: 'invite.generated' }))
    setGenerateStatus(true)
  }

  useEffect(() => {
    ;(async () => {
      const invitesResult = await invites()
      if (invitesResult === undefined) {
        return
      }
      setUserInviteCodes(invitesResult.data.codes)
      const [invitePackageActivatedNumber, invitePackagePerValue, invitePackageTotalValues] =
        invitesResult.data.stat

      setUserStats({
        invitePackageActivatedNumber,
        invitePackagePerValue,
        invitePackageTotalValues,
      })
      setUserInviteUrl(invitesResult.data.invite_url)
      setGenerateStatus(false)
    })()
  }, [generateStatus])
  return (
    <>
      <div className="content content-full">
        {userStats !== undefined && <Stat {...userStats} />}
        {userInviteCodes && (
          <Manager
            dataSource={userInviteCodes}
            inviteUrl={userInviteUrl}
            onGenerateSuccess={generateSuccessCallback}
          />
        )}
        <List />
      </div>
    </>
  )
}
export default InvitePage
