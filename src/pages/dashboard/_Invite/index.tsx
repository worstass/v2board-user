import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useIntl } from 'umi'
import { Statistic, Row, Button, Col, Space, message } from 'antd'
import { inviteStats } from '@/services'
import clipboardy from '@umijs/deps/reexported/clipboardy'
import { CopyOutlined, UserOutlined, DropboxOutlined } from '@ant-design/icons'

const Invite: FC = () => {
  const [userInviteStat, setUserInviteStat] = useState<API.User.InviteStatsResult>()
  const intl = useIntl()

  useEffect(() => {
    ;(async () => {
      const userInviteStatResult = await inviteStats()
      if (userInviteStatResult === undefined) {
        return
      }
      setUserInviteStat(userInviteStatResult)
    })()
  }, [])

  const render = () => (
    <>
      <div className="justify-content-md-between align-items-md-center">
        <Row gutter={12}>
          <Col span={12}>
            <Statistic
              title={intl.formatMessage({ id: 'invite.stat.registerd' })}
              value={userInviteStat?.data.invite_users}
              prefix={<UserOutlined />}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title={intl.formatMessage({ id: 'invite.stat.invite_package_total_values' })}
              value={userInviteStat?.data.total_values}
              prefix={<DropboxOutlined />}
              formatter={(value: number | string) => {
                return (
                  <>
                    <Space>{value} GB</Space>
                  </>
                )
              }}
            />
          </Col>
        </Row>

        <div className="mb-3">
          {userInviteStat?.data.invite_code !== null && (
            <Button
              style={{ marginTop: 16 }}
              type="primary"
              icon={<CopyOutlined />}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                const registerUrl = `${window.location.origin}/#/register?code=${userInviteStat?.data.invite_code}`

                clipboardy.write(registerUrl).then(() => {
                  message.success(intl.formatMessage({ id: 'common.message.copy_success' }))
                })
              }}
            >
              {intl.formatMessage({ id: 'dashboard.invite.copy_link' })}
            </Button>
          )}
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="block block-rounded js-appear-enabled">
        <div className="block-header block-header-default">
          <h3 className="block-title">{intl.formatMessage({ id: 'module.invite' })}</h3>
        </div>
        <div className="block-content">{render()}</div>
      </div>
    </>
  )
}
export default Invite
