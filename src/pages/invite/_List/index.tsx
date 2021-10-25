import './style.less'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Table, Tabs, Badge, Modal, message } from 'antd'
import { inviteOrders, invitePackages, plans, invitePackageApply } from '@/services'
import { currencyFormatter } from '@/default'
import { useIntl, Link, history, useModel } from 'umi'
import moment from 'moment'
import lodash from 'lodash'
import { useDebounceFn } from 'ahooks'
import useSubModel from '@/models/useSubModel'

const { Column } = Table
const { TabPane } = Tabs

export interface listProps {
  packageTabEnable: boolean
}

const List: FC<listProps> = (props) => {
  const { packageTabEnable } = props
  const [userInviteOrders, setUserInviteOrders] = useState<API.User.InviteOrderItem[]>()
  const [userInvitePackages, setUserInvitePackages] = useState<API.User.InvitePackageItem[]>()
  const [userPlans, setUserPlans] = useState<API.User.PlanItem[]>()
  const [defaultTab, setDefaultTab] = useState('commission')
  const [applyPackageStatus, setApplyPackageStatus] = useState(false)
  const {refresh} = useModel('useSubModel')

  const intl = useIntl()

  useEffect(() => {
    ;(async () => {
      const inviteOrdersResult = await inviteOrders()
      if (inviteOrdersResult !== undefined) {
        setUserInviteOrders(inviteOrdersResult.data)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (packageTabEnable || applyPackageStatus) {
        const invitePackagesResult = await invitePackages()
        if (invitePackagesResult !== undefined) {
          setUserInvitePackages(invitePackagesResult.data)
        }

        const plansResult = await plans()
        if (plansResult !== undefined) {
          setUserPlans(plansResult.data)
        }

        if (history?.location?.state !== undefined) {
          const locationState = history?.location?.state as { tab: string }
          setDefaultTab(locationState.tab)
        }
        setApplyPackageStatus(false)
        refresh()
      }
    })()
  }, [packageTabEnable, applyPackageStatus])

  const { run } = useDebounceFn(
    (id: number) => {
      const invitePackageApplyResult = invitePackageApply({package_id:id})
      if (invitePackageApplyResult === undefined) {
        return 
      }
      message.success(intl.formatMessage({id:'invite.list.package.columm.operation.message.success'}))
      setApplyPackageStatus(true)
    },
    {
      wait: 500,
    },
  )
  const packageApply = run

  return (
    <>
      <div className="block block-rounded js-appear-enabled ">
        <div className="block-header block-header-default">
          <h3 className="block-title">{intl.formatMessage({ id: 'invite.list.title' })}</h3>
        </div>
        <Tabs
          activeKey={defaultTab}
          size="large"
          type="card"
          onTabClick={(key: string) => {
            setDefaultTab(key)
          }}
        >
          <TabPane tab={intl.formatMessage({ id: 'invite.list.tab.commission' })} key="commission">
            <div className="block-content p-0">
              <Table<API.User.InviteOrderItem>
                rowKey="id"
                dataSource={userInviteOrders}
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
                  dataIndex="updated_at"
                  key="updated_at"
                  render={(updatedAt: string) => {
                    return <>{moment.unix(Number(updatedAt)).format('YYYY/MM/DD HH:mm')}</>
                  }}
                />
                <Column
                  title={intl.formatMessage({ id: 'invite.list.column.commission_balance' })}
                  dataIndex="commission_balance"
                  key="commission_balance"
                  render={(balance: number) => {
                    return <>{currencyFormatter.format(balance / 100)}</>
                  }}
                />
                <Column
                  title={intl.formatMessage({ id: 'invite.list.column.commission_status' })}
                  dataIndex="commission_status"
                  key="commission_status"
                  align="right"
                  render={(commissionStatus: number) => {
                    return (
                      <>
                        {commissionStatus === 0 &&
                          intl.formatMessage({ id: 'invite.list.column.commission_status.new' })}
                        {commissionStatus === 1 &&
                          intl.formatMessage({
                            id: 'invite.list.column.commission_status.pending',
                          })}
                        {commissionStatus === 2 &&
                          intl.formatMessage({ id: 'invite.list.column.commission_status.valid' })}
                        {commissionStatus === 3 &&
                          intl.formatMessage({
                            id: 'invite.list.column.commission_status.invalid',
                          })}
                      </>
                    )
                  }}
                />
              </Table>
            </div>
          </TabPane>

          {packageTabEnable === true && (
            <TabPane tab={intl.formatMessage({ id: 'invite.list.tab.package' })} key="package">
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
                    title={intl.formatMessage({ id: 'invite.list.package.column.updated_at' })}
                    dataIndex="created_at"
                    key="created_at"
                    render={(createdAt: string) => {
                      return <>{moment.unix(Number(createdAt)).format('YYYY/MM/DD HH:mm')}</>
                    }}
                  />
                  <Column
                    title={intl.formatMessage({ id: 'invite.list.package.column.plan_id' })}
                    dataIndex="plan_id"
                    key="plan_id"
                    render={(planId: number) => {
                      const plan = lodash.find(userPlans, { id: planId }) as API.User.PlanItem
                      return <>{plan.name}</>
                    }}
                  />

                  <Column
                    title={intl.formatMessage({ id: 'invite.list.package.column.plan_cycle' })}
                    dataIndex="plan_cycle"
                    key="plan_cycle"
                    align="center"
                    render={(planCycle: string) => {
                      let cycleMessageId: string = `invite.list.package.column.plan_cycle.${planCycle}`
                      return <>{intl.formatMessage({ id: cycleMessageId })}</>
                    }}
                  />

                  <Column
                    title={intl.formatMessage({ id: 'invite.list.package.column.status' })}
                    dataIndex="status"
                    key="status"
                    align="center"
                    render={(status: number) => {
                      return (
                        <>
                          <Badge color={status === 0 ? 'blue' : 'gray'} />
                          {status === 0
                            ? intl.formatMessage({ id: 'invite.list.package.column.status.unused' })
                            : intl.formatMessage({ id: 'invite.list.package.column.status.used' })}
                        </>
                      )
                    }}
                  />
                  <Column
                    title={intl.formatMessage({ id: 'invite.list.package.column.operation' })}
                    dataIndex="operation"
                    key="operation"
                    align="right"
                    render={(operation: any, record: API.User.InvitePackageItem) => {
                      return (
                        <>
                          {record.status === 0 && (
                            <Link
                              to=""
                              onClick={(e: React.MouseEvent) => {
                                e.preventDefault()
                                Modal.confirm({
                                  title: intl.formatMessage({
                                    id: 'invite.list.package.columm.operation.apply.title',
                                  }),
                                  content: intl.formatMessage({
                                    id: 'invite.list.package.columm.operation.apply.content',
                                  }),
                                  onOk: async (): Promise<any> => {
                                    packageApply(record.id)
                                  },
                                })
                              }}
                            >
                              {intl.formatMessage({
                                id: 'invite.list.package.columm.operation.apply',
                              })}
                            </Link>
                          )}
                        </>
                      )
                    }}
                  />
                </Table>
              </div>
            </TabPane>
          )}
        </Tabs>
      </div>
    </>
  )
}
export default List
