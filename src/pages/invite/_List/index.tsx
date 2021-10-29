import './style.less'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Table, Badge, Space } from 'antd'
import { invitePackages } from '@/services'
import { useIntl } from 'umi'
import moment from 'moment'

const { Column } = Table

const List: FC = () => {
  const [userInvitePackages, setUserInvitePackages] = useState<API.User.InvitePackageItem[]>()
  const intl = useIntl()

  useEffect(() => {
    ;(async () => {
      const invitePackagesResult = await invitePackages()
      if (invitePackagesResult !== undefined) {
        setUserInvitePackages(invitePackagesResult.data)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="block block-rounded js-appear-enabled ">
        <div className="block-header block-header-default">
          <h3 className="block-title">{intl.formatMessage({ id: 'invite.list.title' })}</h3>
        </div>

        <div className="block-content p-0">
          <Table<API.User.InvitePackageItem>
            rowKey="id"
            dataSource={userInvitePackages}
            pagination={false}
            scroll={{ x: true }}
            bordered={false}
            loading={false}
          >
            <Column
              title="#"
              dataIndex="id"
              render={(text, record, index) => {
                return <>{index + 1}</>
              }}
            />

            <Column
              title={intl.formatMessage({ id: 'invite.list.column.updated_at' })}
              dataIndex="created_at"
              key="created_at"
              render={(createdAt: string) => {
                return <>{moment.unix(Number(createdAt)).format('YYYY/MM/DD HH:mm')}</>
              }}
            />
            <Column
              title={intl.formatMessage({ id: 'invite.list.column.from_user_email' })}
              dataIndex="from_user_email"
              key="from_user_email"
            />
            <Column
              title={intl.formatMessage({ id: 'invite.list.column.value' })}
              dataIndex="value"
              key="value"
              render={(value: number) => {
                return (
                  <>
                    <Space>{value}GB</Space>
                  </>
                )
              }}
            />
            <Column
              title={intl.formatMessage({ id: 'invite.list.column.status' })}
              dataIndex="status"
              key="status"
              align="center"
              render={(status: number) => {
                return (
                  <>
                    {status === 1 && <Badge status="success" />}
                    {status === 1 &&
                      intl.formatMessage({ id: 'invite.list.column.status.activated' })}
                  </>
                )
              }}
            />
          </Table>
        </div>
      </div>
    </>
  )
}
export default List
